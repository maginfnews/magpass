import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { company } from "@/lib/company";

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-cyan-600 to-blue-700" />
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      </div>

      <div className="container-section relative">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/40 via-green-500/40 to-red-500/40 backdrop-blur-sm border border-yellow-300/50 text-white text-sm font-medium mb-6 animate-pulse">
            <span className="text-lg">🎄</span>
            <span>Oferta Especial de Natal 2024</span>
            <span className="text-lg">🎁</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Presente de Natal: <span className="text-yellow-300">30% OFF</span> em planos anuais
          </h2>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-2xl mx-auto leading-relaxed">
            Contrate até 31/12 e ganhe consultoria gratuita + setup sem custo adicional! 🎅
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="/contato"
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white text-blue-600 font-bold shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300"
            >
              Solicitar contato
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href={`https://wa.me/${company.phoneMobile.replace(/\D/g, '')}`}
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-white/80">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium">Resposta rápida</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium">Sem compromisso</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-medium">Atendimento personalizado</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
