
import { company } from "@/lib/company";

export const metadata = {
  title: "Sobre — Magpass",
  description: "Quem somos e como trabalhamos."
}

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="container-section prose max-w-3xl">
        <h1>Sobre a {company.name}</h1>
        <p>
          Fundada em 2008, a {company.name} é uma integradora de soluções de infraestrutura e suporte técnico
          corporativo. Nosso compromisso é simplificar a tecnologia e aumentar a produtividade das empresas com
          atendimento humanizado e ágil.
        </p>
        <h2>O que acreditamos</h2>
        <ul>
          <li>Ética, transparência e responsabilidade ambiental.</li>
          <li>Atendimento próximo, com foco em resultado.</li>
          <li>Inovação e melhoria contínua.</li>
        </ul>
        <h2>Diferenciais</h2>
        <ul>
          <li>SPOC (Single Point of Contact) para centralizar demandas.</li>
          <li>SLA e gestão de chamados (SLAM).</li>
          <li>Resolução imediata em até 95% dos casos.</li>
        </ul>
      </div>
    </section>
  )
}
