import { type NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Constants pour les regex et messages d'erreur
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^(?:(?:\+33|0)[1-9](?:[0-9]{8}))$/;
const ERROR_MESSAGES = {
  MISSING_FIELDS: "Tous les champs obligatoires doivent être remplis",
  INVALID_EMAIL: "Format d'email invalide",
  INVALID_PHONE: "Format de téléphone invalide (ex: +33612345678 ou 0612345678)",
  EMAIL_SERVICE_DOWN: "Service d'email temporairement indisponible",
  RATE_LIMIT: "Trop de demandes. Veuillez réessayer dans quelques minutes.",
  GENERIC_ERROR: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer ou nous contacter directement.",
  SUCCESS: "Votre demande a été envoyée avec succès ! Nous vous recontacterons dans les 24h."
};

// Fonction alternative pour convertir HTML en texte brut
const htmlToText = (html: string): string => {
  return html
    .replace(/<[^>]*>/g, '') // Supprime les balises HTML
    .replace(/\n{2,}/g, '\n') // Réduit les sauts de ligne multiples
    .replace(/\s{2,}/g, ' ') // Réduit les espaces multiples
    .trim();
};

// Interface des données de formulaire
interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  budget?: string;
  message: string;
}

// Fonction d'envoi d'email modifiée
async function sendContactEmail(data: ContactFormData) {
  const resend = new Resend(process.env.RESEND_API_KEY!);
  
  const emailHtml = `
    <div>
      <h2>Nouvelle demande de contact</h2>
      <p><strong>Nom:</strong> ${data.firstName} ${data.lastName}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Téléphone:</strong> ${data.phone}</p>
      <p><strong>Type de projet:</strong> ${data.projectType}</p>
      ${data.budget ? `<p><strong>Budget:</strong> ${data.budget}</p>` : ''}
      <p><strong>Message:</strong></p>
      <p>${data.message}</p>
    </div>
  `;

  const emailText = htmlToText(emailHtml);

  // Email à l'équipe
  const teamEmail = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'nzitapuindi2@gmail.com',
    subject: `Nouvelle demande: ${data.firstName} ${data.lastName}`,
    html: emailHtml,
    text: emailText
  });

  // Email de confirmation au client
  const clientEmail = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: data.email,
    subject: 'Confirmation de votre demande',
    html: `<p>Nous avons bien reçu votre demande et vous contacterons sous 24h.</p>`,
    text: 'Nous avons bien reçu votre demande et vous contacterons sous 24h.'
  });

  return {
    teamEmailId: teamEmail.data?.id,
    clientEmailId: clientEmail.data?.id
  };
}

export async function POST(request: NextRequest) {
  try {
    // Validation de la requête
    if (!request.headers.get("content-type")?.includes("application/json")) {
      return NextResponse.json(
        { error: "Content-Type must be application/json" },
        { status: 415 }
      );
    }

    const body = await request.json();
    const { firstName, lastName, email, phone, projectType, budget, message } = body;

    // Validation des champs obligatoires
    const requiredFields = { firstName, lastName, email, phone, message };
    const missingFields = Object.entries(requiredFields)
      .filter(([_, value]) => !value)
      .map(([key]) => key);

    if (missingFields.length > 0) {
      return NextResponse.json(
        { 
          error: ERROR_MESSAGES.MISSING_FIELDS,
          missingFields
        },
        { status: 400 }
      );
    }

    // Validation des formats
    if (!EMAIL_REGEX.test(email)) {
      return NextResponse.json(
        { error: ERROR_MESSAGES.INVALID_EMAIL },
        { status: 400 }
      );
    }

    const normalizedPhone = phone.replace(/\s/g, "");
    if (!PHONE_REGEX.test(normalizedPhone)) {
      return NextResponse.json(
        { 
          error: ERROR_MESSAGES.INVALID_PHONE,
          validExample: "+33612345678"
        },
        { status: 400 }
      );
    }

    // Préparation des données
    const emailData: ContactFormData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: normalizedPhone,
      projectType: projectType?.trim() || "autre",
      budget: budget?.trim() || undefined,
      message: message.trim(),
    };

    // Vérification de la configuration Resend
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY non configurée");
      return NextResponse.json(
        { error: ERROR_MESSAGES.EMAIL_SERVICE_DOWN },
        { status: 500 }
      );
    }

    // Envoi des emails
    const emailResult = await sendContactEmail(emailData);

    // Log structuré pour le suivi
    console.info("Demande de devis envoyée", {
      event: "contact_form_submission",
      client: `${emailData.firstName} ${emailData.lastName}`,
      email: emailData.email,
      projectType: emailData.projectType,
      timestamp: new Date().toISOString(),
      metadata: {
        teamEmailId: emailResult.teamEmailId,
        clientEmailId: emailResult.clientEmailId,
      }
    });

    return NextResponse.json({
      success: true,
      message: ERROR_MESSAGES.SUCCESS,
      data: {
        emailIds: {
          team: emailResult.teamEmailId,
          client: emailResult.clientEmailId,
        },
        submittedAt: new Date().toISOString()
      }
    });

  } catch (error) {
    console.error("Erreur API contact:", error);

    // Gestion des erreurs spécifiques
    if (error instanceof Error) {
      if (error.message.includes("API key")) {
        return NextResponse.json(
          { error: ERROR_MESSAGES.EMAIL_SERVICE_DOWN },
          { status: 500 }
        );
      }

      if (error.message.includes("rate limit")) {
        return NextResponse.json(
          { error: ERROR_MESSAGES.RATE_LIMIT },
          { status: 429 }
        );
      }
    }

    // Erreur générique
    return NextResponse.json(
      { error: ERROR_MESSAGES.GENERIC_ERROR },
      { status: 500 }
    );
  }
}