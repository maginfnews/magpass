
"use client";
import { useState } from "react";
import { company } from "@/lib/company";
import { Phone, Mail, MapPin, Send, CheckCircle2, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  }

  return (
    <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
      <div className="container-section">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Entre em Contato
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Estamos prontos para ajudar sua empresa. Fale com nossos especialistas.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Info */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="space-y-4">
              <a 
                href={`tel:${company.phoneMain}`}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Phone className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Telefone</div>
                  <div className="text-slate-600">{company.phoneMain}</div>
                  <div className="text-sm text-blue-600 mt-1">Clique para ligar</div>
                </div>
              </a>

              <a 
                href={`https://wa.me/${company.phoneMobile.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200 hover:border-green-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <svg className="w-6 h-6 text-green-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">WhatsApp</div>
                  <div className="text-slate-600">{company.phoneMobile}</div>
                  <div className="text-sm text-green-600 mt-1">Clique para conversar</div>
                </div>
              </a>

              <a 
                href={`mailto:${company.email}`}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-600 transition-colors">
                  <Mail className="w-6 h-6 text-cyan-600 group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">E-mail</div>
                  <div className="text-slate-600">{company.email}</div>
                  <div className="text-sm text-cyan-600 mt-1">Clique para enviar</div>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-slate-200">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-slate-600" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 mb-1">Localização</div>
                  <div className="text-slate-600">{company.address}</div>
                </div>
              </div>
            </div>

            {/* Info Box */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100">
              <h3 className="font-bold text-slate-900 mb-2">🎄 Promoção de Natal</h3>
              <p className="text-slate-700 text-sm">
                Contrate até 31/12 e ganhe <strong>30% OFF</strong> em planos anuais + consultoria gratuita!
              </p>
            </div>
          </div>

          {/* Right Column - Form */}
          <div>
            <form onSubmit={submit} className="card p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Nome Completo *
                </label>
                <input 
                  required 
                  name="name" 
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  E-mail *
                </label>
                <input 
                  required 
                  type="email" 
                  name="email" 
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Telefone
                </label>
                <input 
                  name="phone" 
                  type="tel"
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="(11) 99999-9999"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Empresa
                </label>
                <input 
                  name="company" 
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Nome da sua empresa"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Mensagem *
                </label>
                <textarea 
                  required 
                  name="message" 
                  rows={5} 
                  className="w-full rounded-xl border border-slate-300 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Como podemos ajudar?"
                />
              </div>

              <button 
                className="w-full group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                type="submit"
                disabled={status === 'loading'}
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </button>

              {status === 'success' && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-green-50 border border-green-200 text-green-700">
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm font-medium">Mensagem enviada com sucesso! Retornaremos em breve.</span>
                </div>
              )}

              {status === 'error' && (
                <div className="flex items-center gap-2 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
                  <span className="text-sm font-medium">Erro ao enviar. Tente novamente ou entre em contato via WhatsApp.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
