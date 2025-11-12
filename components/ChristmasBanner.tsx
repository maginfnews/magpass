"use client";
import Link from "next/link";
import { Gift, Sparkles, ArrowRight } from "lucide-react";

export default function ChristmasBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-red-600 via-green-600 to-red-600 text-white">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}} />
      </div>

      <div className="container-section relative py-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left side - Message */}
          <div className="flex items-center gap-3">
            <div className="relative">
              <Gift className="w-8 h-8 animate-twinkle" />
              <Sparkles className="w-4 h-4 absolute -top-1 -right-1 text-yellow-300 animate-pulse" />
            </div>
            <div>
              <div className="font-bold text-lg">🎄 Promoção de Natal 2024!</div>
              <div className="text-sm text-red-100">
                Até 30% OFF em planos anuais + Consultoria gratuita
              </div>
            </div>
          </div>

          {/* Right side - CTA */}
          <Link
            href="/contato"
            className="group flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-red-600 font-bold hover:bg-yellow-50 hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Aproveitar oferta
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 text-6xl opacity-20 animate-twinkle">⭐</div>
      <div className="absolute top-0 right-20 text-4xl opacity-20 animate-twinkle" style={{animationDelay: '1s'}}>🎁</div>
      <div className="absolute bottom-0 left-1/4 text-5xl opacity-20 animate-twinkle" style={{animationDelay: '0.5s'}}>❄️</div>
      <div className="absolute bottom-0 right-1/3 text-4xl opacity-20 animate-twinkle" style={{animationDelay: '1.5s'}}>🔔</div>
    </div>
  );
}
