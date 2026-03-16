import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });
const URL_BASE = "https://servicios.edelbyte.com.ar";

export const metadata: Metadata = {
  title: "Desarrollo de Software a Medida | Full Stack Developer",
  description:
    "Ayudo a empresas y emprendedores a construir productos digitales, escalables y con buena experiencia de usuario. De la idea al código, con mentalidad senior.",
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
  alternates: {
    canonical: URL_BASE,
    languages: {
      "es-AR": `${URL_BASE}`,
    },
  },
  openGraph: {
    title: "Desarrollo de Software a medida y Estrategia Digital",
    description:
      "Ayudo a empresas y emprendedores a construir productos digitales, escalables y con una buena experiencia de usuario. De la idea al código, con mentalidad profesional.",
    siteName: "edelbyte",
    images: [
      {
        url: "https://servicios.edelbyte.com.ar/servicios.png",
        width: 1200,
        height: 630,
        alt: "Servicios de desarrollo de software",
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Servicios de Desarrollo de Software y paginas web",
    description: "Desarrollo de software, aplicaciones web y páginas web para empresas y emprendedores en Campana, Buenos Aires.",
    url: "https://servicios.edelbyte.com.ar",
    telephone: "+543489693598",
    image: "https://servicios.edelbyte.com.ar/servicios.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Avenida Bellomo 131", 
      addressLocality: "Campana",
      addressRegion: "Buenos Aires",
      postalCode: "2804",
      addressCountry: "AR",
    },
    
    geo: {
    "@type": "GeoCoordinates",
    latitude: -34.19794,   // ← reemplazá con tus coords reales
    longitude: -58.94399,
  },

  sameAs: [
    "https://www.linkedin.com/in/alberto-edelmiro-carrizo-7639a186/",
    "https://github.com/AlbertCarri",
  ],
  areaServed: {
    "@type": "City",
    name: "Campana",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios de desarrollo",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Desarrollo web a medida" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Aplicaciones web" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Full Stack Development" } },
    ],
  },
  };
  return (
    <html lang="es-AR">
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
