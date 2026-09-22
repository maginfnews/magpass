"use client";
import Link from "next/link";
import { company } from "@/lib/company";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-pink-50/40 to-white">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-90"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/65 via-fuchsia-950/50 to-slate-900/60" />
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-400/20 rounded-full blur-3xl animate-float" />
        <div className="absolute top-1/2 -left-40 w-96 h-96 bg-fuchsia-400/15 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-rose-300/20 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}} />
      </div>

      <div className="container-section relative z-20 pt-24 pb-32 lg:pt-32 lg:pb-40">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-500/35 via-rose-500/30 to-fuchsia-500/35 backdrop-blur-sm border border-pink-200/50 text-white text-sm font-medium shadow-lg">
              <span className="text-lg">♡</span>
              <span>Outubro Rosa • Cuidado que conecta</span>
              <span className="text-lg">♡</span>
            </div>

            {/* Headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight text-balance text-white drop-shadow-2xl">
              Infraestrutura de TI{" "}
              <span className="text-pink-300">que não falha</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-blue-50 leading-relaxed max-w-2xl font-light drop-shadow-lg">
              Suporte técnico especializado, administração de redes e backup em nuvem para empresas que não podem parar.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/contato" 
                className="group inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-pink-600 to-fuchsia-600 text-white font-semibold shadow-lg shadow-pink-500/30 hover:shadow-xl hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300"
              >
                Fale com especialista
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="/servicos" 
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-white border-2 border-slate-200 text-slate-700 font-semibold hover:border-pink-300 hover:bg-pink-50/50 transition-all duration-300"
              >
                Ver serviços
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                "SLA garantido",
                "95% resolução imediata",
                "Suporte 24/7"
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white">
                  <CheckCircle2 className="w-5 h-5 text-pink-300" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Services Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Suporte Técnico", desc: "Remoto & Presencial", icon: "🛠️", delay: "0s" },
                { title: "Redes", desc: "Administração & Segurança", icon: "🌐", delay: "0.1s" },
                { title: "Backup", desc: "Rotinas monitoradas", icon: "💾", delay: "0.2s" },
                { title: "Consultoria", desc: "Estratégia de TI", icon: "💡", delay: "0.3s" }
              ].map((service, idx) => (
                <div
                  key={service.title}
                  className="group card p-6 hover:scale-105 transition-all duration-300 cursor-pointer"
                  style={{animationDelay: service.delay}}
                >
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="font-bold text-lg text-slate-900 mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -right-6 glass-effect px-6 py-4 rounded-2xl animate-float">
              <div className="text-sm text-slate-600 font-medium">Desde</div>
              <div className="text-3xl font-bold gradient-text">2008</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
