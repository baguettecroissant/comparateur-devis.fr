import type { Metadata } from "next";
import Script from "next/script";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

// Senior friendly font: Inter (Sans Serif, legible)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.comparateur-devis.fr'),
  title: "Comparateur Devis 2026 - Artisans et Travaux au meilleur prix",
  description: "Obtenez un devis exact pour vos travaux. Comparez 3 offres d'installateurs certifiés près de chez vous.",
  openGraph: {
    title: "Comparateur Devis 2026 - Artisans et Travaux",
    description: "Obtenez un devis exact pour vos travaux. Comparez 3 offres.",
    url: 'https://www.comparateur-devis.fr',
    siteName: 'Comparateur-Devis.fr',
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Comparateur Devis 2026 - Artisans et Travaux",
    description: "Obtenez un devis exact pour vos travaux. Comparez 3 offres.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Comparateur-Devis.fr",
  "url": "https://www.comparateur-devis.fr",
  "logo": "https://www.comparateur-devis.fr/icon.png",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer service",
    "areaServed": "FR",
    "availableLanguage": "French"
  }
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Comparateur-Devis.fr",
  "url": "https://www.comparateur-devis.fr",
  "description": "Comparateur de prix et devis pour tous vos travaux et aménagements en France. Devis gratuits d'installateurs certifiés.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://www.comparateur-devis.fr/annuaire?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased text-slate-900 bg-slate-50 min-h-screen flex flex-col`}
      >
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id="490067ef-024b-45c1-b8bd-dbce100285a1"
          strategy="afterInteractive"
        />
        <Script
          src="https://nhmvgsrwhjsjnpncpiaj.supabase.co/functions/v1/analytics-collect?script=1"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
