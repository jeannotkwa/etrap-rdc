import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navigation } from "@/components/navigation"
import { MapPin, Calendar, DollarSign, Square, ArrowLeft, ArrowRight, CheckCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

// Base de données des projets (en production, cela viendrait d'une vraie base de données)
const projects = {
  "1": {
    id: 1,
    title: "RENOVATION DE L'INSTITUT MOKENGELI",
    category: "residential",
    location: "Commune de Lemba, Kinshasa",
    year: "2024",
    surface: "2600 m²",
    duration: "'4' mois",
    client: "Communauté Présbyterienne de Kinshasa",
    architect: "ETRAP CP INTERNATIONAL SARL",
    description:
      "Située dans la commune de Lemba, l’École Conventionnée Protestante CS MOKENGELI, construite à l’époque coloniale, a bénéficié d’importants travaux de rénovation financés par le Fonds de Promotion de l’Industrie dans le cadre du Programme d’urgence de 100 jours du Chef de l’État, visant à moderniser ses infrastructures scolaires selon les normes en vigueur.",
    longDescription: `
      Ecole Conventionnée Protestante de la Communauté Présbyterienne (CPK) Situé dans la commune de Lemba Construit dépuis l'époque colonniale, le CS MOKENGELI ne repondait pas aux normes en vigueur en matière des infranstructures scolaire

      Inscrit dans le cadre du Programme d'urgence de 100 jours du Chef de I'Etat Félix Antoine TSHISEKEDI C'est dans ce cadre que le Fonds de Prommotion de l'Industrie avait subventionné les travaux de rénovation de cette ecole executé par ETRAP CP INTERNATIONAL Sari
      suivant les travaux ci-après:

      Renforcement de la structure en béton armée, traitement des profilés métallique et protection contre anti rouille. Dépose et pose de la couverture en tôle ondulé pré-peint BG28 y compris accessoires des poses Fourniture et pose des faux plafonds en giproc y compris corniche Revêtement sol en granito et carreau anti dérapant Surélevèrent de la hauteur sous plafond de 2,10 m à 3,5 m

    `,
    images: [
      "/placeholder.svg?height=600&width=800&text=Loft+avant+rénovation",
      "/images/mokengeli/mokengeli-1.png ",
      "/images/mokengeli/mokengeli-2.png",
      "/images/mokengeli/mokengeli-3.png",
      "/images/mokengeli/mokengeli-4.png",
      "/placeholder.svg?height=600&width=800&text=Loft+avant+rénovation",
      "/placeholder.svg?height=600&width=800&text=Loft+avant+rénovation",
    ],
    tags: ["Construction Neuve", "Maison Individuelle", "Piscine", "BBC", "Domotique"],
    services: ["Gros Œuvre", "Second Œuvre", "Aménagement Extérieur", "Piscine"],
    features: [
      "4 chambres avec suites parentales",
      "Salon-séjour de 60m² avec cheminée",
      "Cuisine équipée haut de gamme",
      "Piscine chauffée 12x6m",
      "Garage double avec borne électrique",
      "Système domotique intégré",
      "Jardin paysager avec éclairage LED",
      "Terrasse en bois exotique 80m²",
    ],
    challenges: [
      "Terrain en pente nécessitant des fondations spéciales",
      "Intégration harmonieuse dans l'environnement urbain",
      "Respect des contraintes architecturales locales",
      "Optimisation de l'orientation pour l'efficacité énergétique",
    ],
    solutions: [
      "Fondations sur pieux avec mur de soutènement paysager",
      "Façades en pierre naturelle locale et enduit minéral",
      "Toiture végétalisée partielle",
      "Orientation sud-ouest optimisée avec brise-soleil automatiques",
    ],
    testimonial: {
      text: "ETRAP-CP a dépassé toutes nos attentes. La qualité de construction est exceptionnelle et l'équipe a su nous accompagner tout au long du projet avec professionnalisme et écoute.",
      author: "Communauté Présbyterienne",
      role: "Propriétaires",
    },
  },
  "2": {
    id: 2,
    title: "Immeuble BEREKIA",
    category: "Privé mixte",
    location: "Lyon 2ème",
    year: "2023",
    surface: "5 000 m²",
    budget: "2 500 000€",
    duration: "14 mois",
    client: "Groupe Immobilier Rhône",
    architect: "Cabinet Architecture Moderne",
    description:
      "Cet immeuble moderne, situé dans la commune de Barumbu et appartenant à un particulier, a été réalisé conformément aux normes de construction en vigueur. Il comprend une combinaison fonctionnelle de bureaux, appartements résidentiels et espaces commerciaux, offrant une exploitation polyvalente et efficace. Le bâtiment est équipé de plusieurs technologies de pointe assurant confort, sécurité et fonctionnalité, notamment :",
    longDescription: `
      L’ouvrage est structuré autour de trois fonctions principales :

      - Un espace administratif, comprenant plusieurs bureaux conçus pour accueillir diverses activités professionnelles ;
      - Des appartements résidentiels, aménagés pour offrir confort, luminosité et sécurité aux futurs occupants ;
      - Un espace commercial au rez-de-chaussée, conçu pour une exploitation optimale en milieu urbain dense.

      Le bâtiment est conçu pour répondre aux normes de construction en vigueur, avec une attention particulière portée à l'efficacité énergétique et à la durabilité des matériaux utilisés.

     ETRAP CP INTERNATIONAL a assuré la conception, la réalisation et l’équipement technique de l’immeuble, en intégrant les éléments suivants :

      ✅ Installation d’un système de téléphonie interne, facilitant la communication entre les différents services et niveaux du bâtiment ;

      ✅ Mise en place d’un système de contrôle d’accès (badge ou digicode) garantissant la sécurité des occupants et des zones sensibles ;

      ✅ Installation d’un réseau de caméras de vidéosurveillance couvrant les points stratégiques pour assurer une surveillance continue ;

      ✅ Système de détection des fumées, conforme aux normes de sécurité incendie, pour une alerte rapide en cas de départ de feu ;

      ✅ Aménagement complet des bureaux et appartements, incluant le mobilier, les finitions de haute qualité, les installations sanitaires et électriques, ainsi que les équipements complémentaires requis pour l’exploitation.
      
    `,
 images: [
  "/images/immeuble-berekia/1.png",
  "/images/immeuble-berekia/2.png",
  "/images/immeuble-berekia/3.png",
  "/images/immeuble-berekia/4.png",
  "/placeholder.svg?height=600&width=800&text=Loft+avant+rénovation",
  "/placeholder.svg?height=600&width=800&text=Loft+avant+rénovation",
],
    tags: ["Gros Œuvre", "Commercial", "Parking", "Développement Durable", "Verrière"],
    services: ["Construction", "Aménagement", "Parking", "Espaces Verts"],
    features: [
      "25 boutiques modulables de 50 à 300m²",
      "Espace restauration de 800m²",
      "Parking souterrain 200 places",
      "20 bornes de recharge électrique",
      "Verrière centrale 800m²",
      "Toiture végétalisée 1 200m²",
      "Système de climatisation géothermique",
      "Éclairage LED avec détection de présence",
    ],
    challenges: [
      "Construction en centre-ville avec contraintes de circulation",
      "Excavation complexe pour le parking souterrain",
      "Intégration de la verrière structurelle",
      "Respect des normes ERP (Établissement Recevant du Public)",
    ],
    solutions: [
      "Phasage des travaux avec circulation alternée",
      "Technique de parois moulées pour l'excavation",
      "Structure métallique légère pour la verrière",
      "Système de sécurité incendie avec désenfumage naturel",
    ],
    testimonial: {
      text: "ETRAP-CP a su allier modernité et fonctionnalité dans ce projet ambitieux. Leur expertise technique et leur réactivité ont été déterminantes pour le succès de cette réalisation.",
    },
  },
  "3": {
    id: 3,
    title: "NOVICIAT DEKINKONKA",
    category: "renovation",
    location: "Villeurbanne",
    year: "2024",
    surface: "180 m²",
    budget: "180 000€",
    duration: "5 mois",
    client: "Sophie et Marc Laurent",
    architect: "Atelier Rénovation Design",
    description:
      "Transformation complète d'un ancien entrepôt en loft de luxe. Conservation des éléments industriels authentiques avec intégration d'équipements modernes.",
    longDescription: `
      Ce projet de rénovation exceptionnelle transforme un ancien entrepôt industriel de 1920 en loft contemporain de 180m². 
      Situé à Villeurbanne, ce bâtiment chargé d'histoire retrouve une seconde vie tout en conservant son caractère industriel authentique.

      La rénovation respecte l'architecture d'origine avec ses poutres métalliques apparentes, ses murs en briques rouges et ses 
      grandes verrières d'atelier. L'intervention contemporaine se veut discrète et met en valeur le patrimoine industriel existant.

      L'aménagement intérieur privilégie les espaces ouverts avec une mezzanine créant un niveau supplémentaire pour l'espace nuit. 
      Les matériaux nobles comme le béton ciré, l'acier brut et le bois massif s'harmonisent parfaitement avec l'existant.
    `,
    images: [
      "/placeholder.svg?height=600&width=800&text=Loft+avant+rénovation",
      "/placeholder.svg?height=600&width=800&text=Espace+de+vie+rénové",
      "/placeholder.svg?height=600&width=800&text=Cuisine+industrielle+moderne",
      "/placeholder.svg?height=600&width=800&text=Mezzanine+chambre",
      "/placeholder.svg?height=600&width=800&text=Salle+de+bain+design",
      "/placeholder.svg?height=600&width=800&text=Détails+poutres+métalliques",
    ],
    tags: ["Rénovation", "Loft", "Industriel", "Patrimoine", "Design"],
    services: ["Rénovation", "Aménagement", "Design", "Isolation"],
    features: [
      "Conservation des poutres métalliques d'origine",
      "Murs en briques apparentes restaurés",
      "Mezzanine en acier et bois sur 60m²",
      "Cuisine ouverte avec îlot central",
      "Salle de bain avec douche à l'italienne",
      "Chauffage au sol basse température",
      "Isolation thermique renforcée",
      "Éclairage LED sur rails industriels",
    ],
    challenges: [
      "Conservation du patrimoine industriel",
      "Mise aux normes électriques et thermiques",
      "Création de la mezzanine sans altérer la structure",
      "Isolation phonique en milieu urbain",
    ],
    solutions: [
      "Restauration minutieuse des éléments d'origine",
      "Installation électrique apparente style industriel",
      "Structure métallique indépendante pour la mezzanine",
      "Double vitrage phonique sur les verrières",
    ],
    testimonial: {
      text: "ETRAP-CP a su préserver l'âme de ce lieu tout en le modernisant. Le résultat dépasse nos espérances, c'est exactement le loft dont nous rêvions.",
      author: "Sophie et Marc Laurent",
      role: "Propriétaires",
    },
  },
}

interface PageProps {
  params: {
    id: string
  }
}

export default function ProjectDetailPage({ params }: PageProps) {
  const project = projects[params.id as keyof typeof projects]

  if (!project) {
    notFound()
  }

  const projectIds = Object.keys(projects)
  const currentIndex = projectIds.indexOf(params.id)
  const prevProject = currentIndex > 0 ? projectIds[currentIndex - 1] : null
  const nextProject = currentIndex < projectIds.length - 1 ? projectIds[currentIndex + 1] : null

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link
              href="/portfolio"
              className="inline-flex items-center text-blue-200 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Retour au portfolio
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-black">{project.category}</Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{project.location}</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  <span>{project.year}</span>
                </div>
                <div className="flex items-center">
                  <Square className="h-4 w-4 mr-2" />
                  <span>{project.surface}</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 mr-2" />
                  <span>{project.budget}</span>
                </div>
              </div>
              <p className="text-xl">{project.description}</p>
            </div>
            <div>
              <Image
                src={project.images[0] || "/placeholder.svg"}
                alt={project.title}
                width={600}
                height={400}
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <div className="prose max-w-none mb-12">
                <h2 className="text-3xl font-bold mb-6">Description des travaux</h2>
                <div className="text-gray-600 leading-relaxed whitespace-pre-line">{project.longDescription}</div>
              </div>

              {/* Image Gallery */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Galerie Photos</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {project.images.slice(1).map((image, index) => (
                    <div key={index} className="relative overflow-hidden rounded-lg shadow-lg group">
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - Image ${index + 2}`}
                        width={400}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-6">Caractéristiques Principales</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {project.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenges & Solutions */}
              <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold mb-4">Défis Techniques</h3>
                  <ul className="space-y-3">
                    {project.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-red-500 mr-2">•</span>
                        <span className="text-gray-600">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-4">Solutions Apportées</h3>
                  <ul className="space-y-3">
                    {project.solutions.map((solution, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-500 mr-2">•</span>
                        <span className="text-gray-600">{solution}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Testimonial */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-4">Témoignage Client</h3>
                  <blockquote className="text-lg text-gray-700 italic mb-4">"{project.testimonial.text}"</blockquote>
                  <div>
                    <div className="font-semibold">{project.testimonial.author}</div>
                    <div className="text-sm text-gray-500">{project.testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Informations Projet</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium">Client:</span>
                      <br />
                      <span className="text-gray-600">{project.client}</span>
                    </div>
                    <div>
                      <span className="font-medium">Architecte:</span>
                      <br />
                      <span className="text-gray-600">{project.architect}</span>
                    </div>
                    <div>
                      <span className="font-medium">Durée:</span>
                      <br />
                      <span className="text-gray-600">{project.duration}</span>
                    </div>
                    <div>
                      <span className="font-medium">Surface:</span>
                      <br />
                      <span className="text-gray-600">{project.surface}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Services Réalisés</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, index) => (
                      <Badge key={index} variant="secondary">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50">
                <CardContent className="p-6 text-center">
                  <h3 className="text-lg font-bold mb-4">Projet Similaire ?</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Vous avez un projet similaire ? Contactez-nous pour un devis personnalisé.
                  </p>
                  <Button asChild className="w-full">
                    <Link href="/contact">Demander un Devis</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation between projects */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              {prevProject && (
                <Link
                  href={`/portfolio/${prevProject}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Projet précédent
                </Link>
              )}
            </div>
            <div>
              <Link href="/portfolio" className="text-gray-600 hover:text-blue-600">
                Tous les projets
              </Link>
            </div>
            <div>
              {nextProject && (
                <Link
                  href={`/portfolio/${nextProject}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800"
                >
                  Projet suivant
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
