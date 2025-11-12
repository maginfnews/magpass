import { Metadata } from "next";
import Link from "next/link";
import { company } from "@/lib/company";
import { CheckCircle2, ArrowRight, Award, Users, Clock, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre a Magpass | Integradora de TI desde 2008 | Guarulhos - SP",
  description: "Conheça a Magpass: 16 anos simplificando a tecnologia para empresas. Suporte técnico especializado, SLA garantido e 95% de resolução imediata. Guarulhos e São Paulo.",
  keywords: [
    "sobre magpass",
    "empresa de TI Guarulhos",
    "integradora TI",
    "suporte técnico empresarial",
    "história magpass",
    "equipe TI"
  ],
  openGraph: {
    title: "Sobre a Magpass | Integradora de TI desde 2008",
    description: "16 anos simplificando a tecnologia para empresas. Suporte especializado com SLA garantido.",
    type: "website",
    locale: "pt_BR"
  },
  alternates: {
    canonical: "https://www.magpass.com.br/sobre"
  }
}

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="container-section text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Sobre a {company.name}
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Simplificando a tecnologia para empresas desde 2008
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">16+</div>
              <div className="text-slate-600">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">95%</div>
              <div className="text-slate-600">Resolução Imediata</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-slate-600">Suporte Disponível</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-600 mb-2">100+</div>
              <div className="text-slate-600">Empresas Atendidas</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-slate-50">
        <div className="container-section">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Nossa História</h2>
              <div className="prose prose-lg">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Fundada em <strong>2008</strong>, a {company.name} nasceu com o propósito de simplificar 
                  a tecnologia para empresas que precisam de soluções confiáveis e eficientes.
                </p>
                <p className="text-slate-700 leading-relaxed mb-4">
                  Ao longo de mais de 16 anos, nos consolidamos como uma <strong>integradora de soluções 
                  de infraestrutura e suporte técnico corporativo</strong>, atendendo empresas de diversos 
                  segmentos em Guarulhos e São Paulo.
                </p>
                <p className="text-slate-700 leading-relaxed">
                  Nosso compromisso é aumentar a produtividade das empresas através de um atendimento 
                  humanizado, ágil e com foco em resultados mensuráveis.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
                    <Award className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Excelência</h3>
                    <p className="text-slate-600 text-sm">SLA garantido e 95% de resolução imediata</p>
                  </div>
                </div>
              </div>
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center">
                    <Users className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Atendimento Humanizado</h3>
                    <p className="text-slate-600 text-sm">Equipe dedicada e próxima do cliente</p>
                  </div>
                </div>
              </div>
              <div className="card p-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-2">Agilidade</h3>
                    <p className="text-slate-600 text-sm">Resposta rápida e eficiente</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossos Valores</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Princípios que guiam nosso trabalho diariamente
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Ética e Transparência</h3>
              <p className="text-slate-600">
                Relacionamento baseado em confiança, honestidade e responsabilidade
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Foco em Resultado</h3>
              <p className="text-slate-600">
                Atendimento próximo com métricas claras e resultados mensuráveis
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Inovação Contínua</h3>
              <p className="text-slate-600">
                Sempre buscando as melhores tecnologias e práticas do mercado
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="section-padding bg-slate-50">
        <div className="container-section">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Nossos Diferenciais</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              O que nos torna únicos no mercado de TI
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 mb-3">SPOC - Single Point of Contact</h3>
              <p className="text-slate-600 text-sm">
                Centralizamos todas as demandas em um único ponto de contato, facilitando a gestão e comunicação.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 mb-3">SLA Garantido</h3>
              <p className="text-slate-600 text-sm">
                Acordos de nível de serviço claros com gestão de chamados (SLAM) e relatórios gerenciais.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 mb-3">95% de Resolução Imediata</h3>
              <p className="text-slate-600 text-sm">
                A maioria dos problemas é resolvida no primeiro atendimento, sem necessidade de escalação.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 mb-3">Atendimento 24/7</h3>
              <p className="text-slate-600 text-sm">
                Suporte disponível quando você precisar, incluindo finais de semana e feriados.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 mb-3">Parcerias Estratégicas</h3>
              <p className="text-slate-600 text-sm">
                Parceiros oficiais Microsoft, Dell, Adobe e Autodesk para licenciamento e suporte.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-slate-900 mb-3">Equipe Especializada</h3>
              <p className="text-slate-600 text-sm">
                Profissionais certificados e experientes em diversas tecnologias e segmentos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container-section text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Quer Conhecer Melhor Nosso Trabalho?
          </h2>
          <p className="text-xl text-blue-50 mb-8 max-w-2xl mx-auto">
            Agende uma visita ou fale com nossos especialistas para entender como podemos ajudar sua empresa.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link 
              href="/contato"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-white text-blue-600 font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Entrar em Contato
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              href="/servicos"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl border-2 border-white text-white font-bold hover:bg-white hover:text-blue-600 transition-all duration-300"
            >
              Ver Serviços
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
