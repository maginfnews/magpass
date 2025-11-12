import { Metadata } from "next";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Serviços de TI Corporativa em Guarulhos | Suporte, Redes, Backup | Magpass",
  description: "Suporte técnico remoto e presencial, administração de redes, backup em nuvem, consultoria e licenciamento de software. SLA garantido. Atendemos Guarulhos e São Paulo.",
  keywords: [
    "serviços de TI",
    "suporte técnico Guarulhos",
    "administração de redes",
    "backup em nuvem",
    "consultoria TI",
    "licenciamento software",
    "infraestrutura TI",
    "help desk",
    "SPOC",
    "SLA"
  ],
  openGraph: {
    title: "Serviços de TI Corporativa | Magpass",
    description: "Suporte técnico, redes, backup e consultoria para empresas. SLA garantido.",
    type: "website",
    locale: "pt_BR"
  },
  alternates: {
    canonical: "https://www.magpass.com.br/servicos"
  }
}

export default function ServicesPage() {
  const services = [
    {
      title: "Suporte Técnico",
      description: "Remoto e presencial. Revisões, atualizações, correções e atendimento humanizado.",
      bullets: ["Gestão via SPOC", "SLA/SLAM definidos", "Relatórios gerenciais"]
    },
    {
      title: "Administração de Redes",
      description: "Projeto, implantação e gestão de redes corporativas com alta disponibilidade.",
      bullets: ["VPN e firewall", "Patches de segurança", "Domínios e políticas"]
    },
    {
      title: "Infraestrutura Física & Lógica",
      description: "Cabeamento estruturado, patch panels, telefonia, energia estabilizada.",
      bullets: ["Documentação de planta", "Certificação de pontos", "Suporte escalável"]
    },
    {
      title: "Soluções de Backup",
      description: "Rotinas em nuvem e locais; testes de restauração e governança de dados.",
      bullets: ["Monitoramento diário", "RPO/RTO alinhados", "Relatórios periódicos"]
    },
    {
      title: "Consultoria em TI",
      description: "Análise de performance e otimização contínua do ambiente de TI.",
      bullets: ["Assessment", "Roadmap", "Acompanhamento"]
    },
    {
      title: "Regularização de Licenças",
      description: "Parcerias com Microsoft, Adobe, Autodesk, Dell e outras.",
      bullets: ["Inventário", "Compliance", "Gestão de contratos"]
    }
  ] as const;

  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-section text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Serviços de TI Corporativa
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8">
            Soluções completas de infraestrutura e suporte técnico para empresas que não podem parar. 
            SLA garantido e resolução imediata em até 95% dos casos.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Solicitar Orçamento
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a 
              href="tel:+551146106363"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-slate-300 text-slate-700 font-bold hover:border-blue-600 hover:text-blue-600 transition-all duration-300"
            >
              📞 (11) 4610-6363
            </a>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <ServiceCard key={s.title} title={s.title} description={s.description} bullets={s.bullets as any} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Transformar sua TI?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Fale com nossos especialistas e descubra como podemos ajudar sua empresa.
          </p>
          <Link 
            href="/contato"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Entrar em Contato
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  )
}
