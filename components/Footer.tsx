import Link from "next/link";
import Image from "next/image";
import { company } from "@/lib/company";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { label: "Suporte Técnico", href: "/servicos#suporte" },
      { label: "Administração de Redes", href: "/servicos#redes" },
      { label: "Backup", href: "/servicos#backup" },
      { label: "Consultoria", href: "/servicos#consultoria" }
    ],
    company: [
      { label: "Sobre nós", href: "/sobre" },
      { label: "Serviços", href: "/servicos" },
      { label: "Contato", href: "/contato" },
      { label: "Privacidade", href: "/privacidade" }
    ]
  };

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="container-section relative">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Image 
              src="/logo-magpass.png" 
              alt="Magpass Tecnologia" 
              width={160} 
              height={50}
              className="h-12 w-auto mb-6 brightness-0 invert"
            />
            <p className="text-slate-300 leading-relaxed mb-6 max-w-md">
              {company.slogan}. Soluções completas de infraestrutura e suporte técnico para empresas que não podem parar.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href={`tel:${company.phoneMain}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>{company.phoneMain}</span>
              </a>
              <a 
                href={`mailto:${company.email}`}
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <div className="p-2 rounded-lg bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>{company.email}</span>
              </a>
              <div className="flex items-center gap-3 text-slate-300">
                <div className="p-2 rounded-lg bg-blue-600/20">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>{company.address}</span>
              </div>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Empresa</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-slate-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div className="mt-6">
              <h4 className="font-semibold mb-3">Redes Sociais</h4>
              <div className="flex gap-3">
                {[
                  { icon: <Linkedin className="w-5 h-5" />, href: "#" },
                  { icon: <Facebook className="w-5 h-5" />, href: "#" },
                  { icon: <Instagram className="w-5 h-5" />, href: "#" }
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-3 rounded-xl bg-white/10 hover:bg-white/20 hover:scale-110 transition-all duration-300"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
            <p>
              © {currentYear} {company.name}. Todos os direitos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="/privacidade" className="hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <span>•</span>
              <span>CNPJ: 00.000.000/0001-00</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
