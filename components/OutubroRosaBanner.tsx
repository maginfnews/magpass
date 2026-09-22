import Link from "next/link";
import { ArrowRight, Heart, Sparkles } from "lucide-react";

export default function OutubroRosaBanner() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-rose-500 to-fuchsia-600 text-white">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute -top-16 left-10 h-48 w-48 rounded-full bg-white blur-3xl" />
        <div className="absolute -bottom-20 right-10 h-56 w-56 rounded-full bg-pink-200 blur-3xl" />
      </div>

      <div className="container-section relative py-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-white/15">
              <Heart className="h-6 w-6 fill-current" aria-hidden="true" />
            </div>
            <div>
              <div className="flex items-center justify-center gap-2 font-bold text-lg md:justify-start">
                <Sparkles className="h-4 w-4 text-pink-100" aria-hidden="true" />
                Outubro Rosa
              </div>
              <div className="text-sm text-pink-50">
                Um lembrete de cuidado, prevenção e apoio
              </div>
            </div>
          </div>

          <Link
            href="/contato"
            className="group inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-pink-700 shadow-lg transition-all duration-300 hover:scale-105 hover:bg-pink-50"
          >
            Fale com a Magpass
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </div>
  );
}
