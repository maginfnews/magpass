
import type { Metadata } from "next";
import "./globals.css";
import { company } from "@/lib/company";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.magpass.com.br"),
  title: `${company.name} — ${company.slogan}`,
  description: "Integradora de soluções de infraestrutura e suporte técnico corporativo desde 2008. Suporte técnico, redes, backup em nuvem e consultoria especializada.",
  keywords: ["suporte técnico", "infraestrutura TI", "backup em nuvem", "consultoria TI", "Guarulhos", "São Paulo"],
  authors: [{ name: company.name }],
  openGraph: {
    title: `${company.name} — ${company.slogan}`,
    description: "Integradora de soluções de infraestrutura e suporte técnico corporativo desde 2008.",
    type: "website",
    locale: "pt_BR",
    siteName: company.name,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/android-chrome-192x192.png" },
      { rel: "android-chrome-512x512", url: "/android-chrome-512x512.png" }
    ]
  },
  manifest: "/site.webmanifest"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <StructuredData />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
