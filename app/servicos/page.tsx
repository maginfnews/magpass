
import ServiceCard from "@/components/ServiceCard";

export const metadata = {
  title: "Serviços — Magpass",
  description: "Portfólio completo de serviços de TI corporativa da Magpass."
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
    <section className="py-16">
      <div className="container-section">
        <h1 className="text-3xl font-bold">Serviços</h1>
        <p className="text-gray-700 mt-2">Soluções para empresas que não podem parar.</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.title} title={s.title} description={s.description} bullets={s.bullets as any} />
          ))}
        </div>
      </div>
    </section>
  )
}
