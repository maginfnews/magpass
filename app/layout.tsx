
import type { Metadata } from "next";
import "./globals.css";
import { company } from "@/lib/company";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://magpass.example"),
  title: `${company.name} — ${company.slogan}`,
  description: "Integradora de soluções de infraestrutura e suporte técnico corporativo desde 2008.",
  openGraph: {
    title: `${company.name} — ${company.slogan}`,
    description: "Integradora de soluções de infraestrutura e suporte técnico corporativo desde 2008.",
    type: "website"
  },
  icons: {
    icon: "/icon.svg"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
