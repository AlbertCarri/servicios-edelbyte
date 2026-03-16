import type { Metadata } from "next";
import Script from "next/script";
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
    siteName: URL_BASE,
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
    name: "Tu Negocio Digital",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Mitre 123", // Cambiá por la tuya
      addressLocality: "Campana",
      addressRegion: "Buenos Aires",
      postalCode: "2804",
      addressCountry: "AR",
    },
    url: "https://tuweb.com",
    telephone: "+5411XXXXXXXX",
    image: "https://tuweb.com/logo.png",
  };
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
