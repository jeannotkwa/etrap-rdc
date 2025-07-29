import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Chatbot } from "@/components/chatbot/chatbot"
import { ChatbotProvider } from "@/components/chatbot/chatbot-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "ETRAP-CP - Construction et Architecture",
  description:
    "Spécialistes en construction, rénovation et architecture depuis 25 ans. Votre partenaire de confiance pour tous vos projets.",
  keywords: "construction, rénovation, architecture, bâtiment, Lyon, maison, commercial, industriel",
  authors: [{ name: "ETRAP-CP" }],
  openGraph: {
    title: "ETRAP-CP - Construction et Architecture",
    description: "Spécialistes en construction, rénovation et architecture depuis 25 ans.",
    url: "https://etrap-cp.com",
    siteName: "ETRAP-CP",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ETRAP-CP - Construction et Architecture",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ETRAP-CP - Construction et Architecture",
    description: "Spécialistes en construction, rénovation et architecture depuis 25 ans.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <ChatbotProvider>
          {children}
          <Chatbot />
        </ChatbotProvider>
      </body>
    </html>
  )
}
