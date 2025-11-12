
# Site Magpass (Next.js 14 + Tailwind)

Integradora de infraestrutura e suporte de TI — **Magpass**.

## Como rodar

```bash
# 1) Copie o .env.example
cp .env.example .env.local

# 2) Instale dependências
npm install

# 3) Rode em dev
npm run dev
```

## Build e deploy
```bash
npm run build
npm start
```

Ideal para deploy na **Vercel** (zero config).

## Estrutura
- `app/` (App Router)
- `components/` (componentes reutilizáveis)
- `lib/company.ts` (dados da empresa via variáveis de ambiente)
- `tailwind.config.ts` (tema)
- `app/(legal)/privacidade` (LGPD de exemplo)

## Personalização rápida
- Altere `icon.svg` (logo).
- Ajuste textos em `Hero`, `Serviços` e `Sobre`.
- Configure números/contatos no `.env.local`.
- Substitua o formulário de contato com um `fetch()` para sua API (Resend/Forms).
