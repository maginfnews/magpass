"use client";
import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Indústria ABC",
      role: "Diretor de TI",
      content: "A Magpass transformou nossa infraestrutura de TI. O suporte é rápido, eficiente e sempre disponível. Recomendo!",
      rating: 5,
      image: "👨‍💼"
    },
    {
      name: "Maria Santos",
      company: "Comércio XYZ",
      role: "Gerente Administrativa",
      content: "Desde que contratamos a Magpass, nossos problemas de TI diminuíram 90%. A equipe é muito profissional e atenciosa.",
      rating: 5,
      image: "👩‍💼"
    },
    {
      name: "João Oliveira",
      company: "Serviços Tech",
      role: "CEO",
      content: "O SPOC facilitou muito nossa gestão. Agora temos um único ponto de contato para todas as demandas de TI. Excelente!",
      rating: 5,
      image: "👨‍💻"
    }
  ];

  return (
    <section className="section-padding bg-slate-50">
      <div className="container-section">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Depoimentos reais de empresas que confiam na Magpass
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card p-8 hover:shadow-xl transition-shadow duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-slate-700 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200">
                <div className="text-4xl">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{testimonial.name}</div>
                  <div className="text-sm text-slate-600">{testimonial.role}</div>
                  <div className="text-sm text-slate-500">{testimonial.company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-green-50 border border-green-200">
            <Star className="w-5 h-5 fill-green-600 text-green-600" />
            <span className="font-bold text-green-900">4.9/5</span>
            <span className="text-green-700">• Baseado em 127 avaliações</span>
          </div>
        </div>
      </div>
    </section>
  );
}
