import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Users, Award, Target, Heart, Shield, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Navigation } from "@/components/navigation"

export default function AboutPage() {
  const team = [
    {
      name: "Ruben NLANDU MBANZULU",
      role: "DIRECTEUR GENERALE",
      Profession: "Architecte",
      experience: "15 ans d'expérience",
      image: "renex.png",
      description: "Expert en gestion de projets de construction et développement d'entreprise.",
    },
    {
      name: "Maurice LOKWA LOMA",
      role: "Chef de projet",
      experience: "15 ans d'expérience",
      image: "renex.png",
      description: "Spécialisée en architecture durable et conception innovante.",
    },
    {
      name: "ORODRIQUE BATOMENE",
      role: "DIRECTEUR TECHNIQUE",
      experience: "20 ans d'expérience",
      image: "renex.png",
      description: "Expert en coordination de chantiers et gestion d'équipes techniques.",
    },
    {
      name: "Sophie Bernard",
      role: "Responsable Qualité",
      experience: "12 ans d'expérience",
      image: "renex.png",
      description: "Garante de la qualité et du respect des normes de construction.",
    },
  ]

  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Nous visons l'excellence dans chaque projet, du plus petit au plus ambitieux.",
    },
    {
      icon: Heart,
      title: "Passion",
      description: "Notre passion pour la construction guide chacune de nos réalisations.",
    },
    {
      icon: Shield,
      title: "Fiabilité",
      description: "Respect des délais, des budgets et des engagements pris envers nos clients.",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail en équipe et écoute permanente de nos clients et partenaires.",
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-yellow-500 text-black">À Propos de Nous</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">11 Ans d'Excellence dans la Construction</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Depuis 2014, nous construisons l'avenir avec passion, expertise et innovation. Découvrez notre histoire,
              nos valeurs et l'équipe qui fait notre force.
            </p>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">Notre Histoire</Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                 L’excellence au service de vos projets de construction 
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Fondée en 2014, ETRAP CP INTERNATIONAL est une entreprise congolaise à compétences multidisciplinaires, active dans les secteurs de la construction, 
                  de l’architecture, de l’urbanisme et des techniques d’ingénierie. Forte d’une équipe dynamique et expérimentée, l’entreprise propose des solutions adaptées aux besoins des partenaires publics et privés à travers tout le territoire de la République Démocratique du Congo.
                </p>
                <p>
                  Notre expertise couvre toutes les étapes du cycle de vie d’un projet, depuis l’étude et la conception jusqu’à la mise en œuvre et le suivi rigoureux des travaux. 
                  ETRAP CP veille à ce que chaque mission soit exécutée dans le strict respect des normes en vigueur, des règles de l’art, ainsi que des engagements déontologiques les plus élevés.
                </p>
                <p>
                  Nous nous engageons à offrir des services de qualité, dans une logique de performance, de durabilité et de responsabilité. Chaque projet est réalisé en tenant compte des contraintes techniques, 
                  des ressources disponibles, et surtout des objectifs de nos partenaires. Qu’il s’agisse d’ouvrages de petite ou de grande envergure, ETRAP CP adapte ses méthodes d’exécution pour garantir un résultat à la hauteur des attentes.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/new.png"
                alt="Histoire de l'entreprise"
                width={600}
                height={500}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Nos Valeurs</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Les Piliers de Notre Réussite</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos valeurs guident chacune de nos actions et définissent notre approche unique de la construction et de
              l'architecture.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <value.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Notre Équipe</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Les Experts à Votre Service</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Rencontrez les professionnels expérimentés qui dirigent nos équipes et garantissent l'excellence de nos
              réalisations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-gray-500 mb-3">{member.experience}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="mb-4">Certifications & Garanties</Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Votre Sécurité, Notre Priorité</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Qualibat RGE</h3>
                <p className="text-gray-600">
                  Certification Qualibat Reconnu Garant de l'Environnement pour les travaux de rénovation énergétique.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Assurance Décennale</h3>
                <p className="text-gray-600">
                  Couverture complète par une assurance décennale pour tous nos travaux de construction et rénovation.
                </p>
              </CardContent>
            </Card>

            <Card className="p-6 text-center">
              <CardContent className="p-0">
                <Building2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">FFB</h3>
                <p className="text-gray-600">
                  Membre de la Fédération Française du Bâtiment, gage de professionnalisme et de qualité.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Rejoignez Nos Clients Satisfaits</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Faites confiance à notre expertise pour concrétiser vos projets de construction et d'architecture.
          </p>
          <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black">
            <Link href="/contact" className="flex items-center">
              Démarrer Mon Projet <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
