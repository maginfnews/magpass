import { Metadata } from "next";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import ChristmasBanner from "@/components/ChristmasBanner";
import ChristmasSnow from "@/components/ChristmasSnow";

export const metadata: Metadata = {
  title: "Magpass - Suporte Técnico e Infraestrutura de TI em Guarulhos | Desde 2008",
  description: "Suporte técnico especializado, administração de redes, backup em nuvem e consultoria em TI para empresas em Guarulhos e São Paulo. SLA garantido, 95% de resolução imediata. Contrate agora!",
  keywords: [
    "suporte técnico Guarulhos",
    "infraestrutura TI São Paulo",
    "backup em nuvem",
    "consultoria TI",
    "administração de redes",
    "suporte técnico empresarial",
    "licenciamento software",
    "Microsoft",
    "Dell",
    "Adobe",
    "Autodesk",
    "SPOC",
    "SLA",
    "help desk"
  ],
  openGraph: {
    title: "Magpass - Suporte Técnico e Infraestrutura de TI",
    description: "Suporte técnico especializado para empresas. SLA garantido, 95% de resolução imediata. Guarulhos e São Paulo.",
    type: "website",
    locale: "pt_BR",
    images: [
      {
        url: "/logo-magpass.png",
        width: 1200,
        height: 630,
        alt: "Magpass - Infraestrutura de TI"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Magpass - Suporte Técnico e Infraestrutura de TI",
    description: "Suporte técnico especializado para empresas. SLA garantido, 95% de resolução imediata.",
    images: ["/logo-magpass.png"]
  },
  alternates: {
    canonical: "https://www.magpass.com.br"
  }
};

export default function HomePage() {
  const services = [
    {
      title: "Suporte Técnico",
      description: "Atendimento remoto e presencial com foco em velocidade e qualidade.",
      bullets: [
        "Abertura e gestão de chamados (SPOC)",
        "SLA e relatórios gerenciais",
        "Resolução imediata em até 95% dos casos"
      ],
      icon: "🛠️"
    },
    {
      title: "Administração de Redes",
      description: "Planejamento, implantação e manutenção de redes corporativas.",
      bullets: [
        "VPN, firewall, patches de segurança",
        "Domínios, usuários e permissões",
        "Monitoramento de performance e banda"
      ],
      icon: "🌐"
    },
    {
      title: "Infraestrutura Física & Lógica",
      description: "Cabeamento estruturado, patch panels, energia e telefonia.",
      bullets: [
        "Projeto & implantação",
        "Documentação e certificação",
        "Suporte e expansão escalável"
      ],
      icon: "🏗️"
    },
    {
      title: "Soluções de Backup",
      description: "Rotinas de backup em nuvem e políticas de segurança de dados.",
      bullets: [
        "Criação e monitoramento de rotinas",
        "Testes de restauração",
        "Relatórios periódicos"
      ],
      icon: "💾"
    },
    {
      title: "Consultoria em TI",
      description: "Diagnóstico, arquitetura recomendada e roadmap de melhorias.",
      bullets: [
        "Levantamento de riscos",
        "Plano de ação",
        "Acompanhamento contínuo"
      ],
      icon: "💡"
    },
    {
      title: "Regularização de Licenças",
      description: "Compliance com Microsoft, Adobe, Autodesk, Dell e mais.",
      bullets: [
        "Inventário de software",
        "Adequação legal",
        "Gestão de contratos"
      ],
      icon: "📋"
    }
  ];

  return (
    <>
      {/* Christmas Effects */}
      <ChristmasSnow />
      <ChristmasBanner />
      
      <Hero />
      
      {/* Stats Section */}
      <Stats />

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-section">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium mb-6">
              <span>Soluções Completas</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Serviços que <span className="gradient-text">transformam</span> sua TI
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cobertura completa de infraestrutura e suporte corporativo para empresas que não podem parar
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                bullets={service.bullets}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
