
"use client";
import { useState } from "react";
import { company } from "@/lib/company";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  }

  return (
    <section className="py-16">
      <div className="container-section grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="text-3xl font-bold">Contato</h1>
          <p className="text-gray-700 mt-2">
            Fale com a {company.name}. Teremos prazer em ajudar.
          </p>
          <ul className="mt-6 space-y-2">
            <li><strong>Telefone:</strong> {company.phoneMain}</li>
            <li><strong>WhatsApp:</strong> {company.phoneMobile}</li>
            <li><strong>E-mail:</strong> <a className="underline" href={`mailto:${company.email}`}>{company.email}</a></li>
            <li><strong>Endereço:</strong> {company.address}</li>
          </ul>
          <div className="mt-6 p-4 rounded-xl bg-brand-50 border border-brand-100">
            Para integrar com seu backend (Resend/Forms), substitua o evento onSubmit por um fetch para sua API.
          </div>
        </div>
        <form onSubmit={submit} className="card p-6">
          <label className="block text-sm font-medium">Nome</label>
          <input required name="name" className="mt-1 w-full rounded-xl border px-3 py-2" />
          <label className="block text-sm font-medium mt-4">E-mail</label>
          <input required type="email" name="email" className="mt-1 w-full rounded-xl border px-3 py-2" />
          <label className="block text-sm font-medium mt-4">Empresa</label>
          <input name="company" className="mt-1 w-full rounded-xl border px-3 py-2" />
          <label className="block text-sm font-medium mt-4">Mensagem</label>
          <textarea required name="message" rows={5} className="mt-1 w-full rounded-xl border px-3 py-2" />
          <button className="mt-6 px-5 py-3 rounded-xl bg-brand-600 text-white hover:bg-brand-700" type="submit">
            Enviar
          </button>
          {sent && <div className="mt-4 text-green-700">Mensagem enviada (simulação). Integre sua API para envio real.</div>}
        </form>
      </div>
    </section>
  )
}
