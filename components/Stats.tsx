"use client";
import { TrendingUp, Users, Award, Clock } from "lucide-react";

export default function Stats() {
  const stats = [
    {
      icon: <Clock className="w-8 h-8" />,
      value: "15+",
      label: "Anos de experiência",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: "500+",
      label: "Empresas atendidas",
      color: "from-cyan-600 to-blue-600"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      value: "95%",
      label: "Taxa de resolução",
      color: "from-blue-600 to-cyan-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      value: "24/7",
      label: "Suporte disponível",
      color: "from-cyan-600 to-blue-600"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
      </div>

      <div className="container-section relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Números que inspiram <span className="gradient-text">confiança</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Resultados comprovados de quem entende de infraestrutura de TI
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div
              key={stat.label}
              className="group relative"
              style={{
                animation: `slideIn 0.6s ease-out ${idx * 0.1}s both`
              }}
            >
              <div className="glass-effect p-8 rounded-3xl text-center hover:scale-105 transition-all duration-300">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${stat.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.icon}
                </div>

                {/* Value */}
                <div className="text-5xl font-bold text-white mb-2">
                  {stat.value}
                </div>

                {/* Label */}
                <div className="text-slate-300 font-medium">
                  {stat.label}
                </div>
              </div>

              {/* Glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 -z-10`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
