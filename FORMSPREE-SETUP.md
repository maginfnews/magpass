# 📧 Configuração do Formspree

## Passo a Passo (5 minutos)

### 1️⃣ Criar Conta no Formspree

1. Acesse: **https://formspree.io/register**
2. Crie uma conta gratuita (pode usar Google/GitHub)
3. Confirme seu email

### 2️⃣ Criar Novo Formulário

1. No dashboard, clique em **"+ New Form"**
2. Preencha:
   - **Form Name**: Contato Magpass
   - **Email**: comercial@magpass.com.br (email que receberá as mensagens)
3. Clique em **"Create Form"**

### 3️⃣ Copiar o Form ID

Após criar, você verá algo como:

```
https://formspree.io/f/xyzabc123
```

O **Form ID** é: `xyzabc123`

### 4️⃣ Atualizar o Código

Abra o arquivo: `app/contato/page.tsx`

Na linha 18, substitua `YOUR_FORM_ID` pelo seu Form ID:

**ANTES:**
```typescript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

**DEPOIS:**
```typescript
const response = await fetch('https://formspree.io/f/xyzabc123', {
```

### 5️⃣ Fazer Commit e Push

```bash
git add app/contato/page.tsx
git commit -m "Configurar Formspree no formulário de contato"
git push
```

A Vercel vai fazer o deploy automaticamente!

## ✅ Pronto!

Agora quando alguém enviar o formulário:
- ✅ Você receberá um email em **comercial@magpass.com.br**
- ✅ O usuário verá mensagem de sucesso
- ✅ O formulário será limpo automaticamente

## 📊 Plano Gratuito

- ✅ **50 envios/mês** grátis
- ✅ Notificações por email
- ✅ Spam protection
- ✅ Sem limite de formulários

## 🎯 Campos do Formulário

O formulário envia:
- **name**: Nome completo
- **email**: Email do contato
- **phone**: Telefone (opcional)
- **company**: Empresa (opcional)
- **message**: Mensagem

## 🔧 Configurações Avançadas (Opcional)

No dashboard do Formspree, você pode:

1. **Adicionar mais emails** para receber notificações
2. **Customizar mensagem de confirmação**
3. **Adicionar reCAPTCHA** para proteção extra
4. **Integrar com Slack/Discord**
5. **Exportar submissions para CSV**

## 📱 Alternativas de Contato

Mesmo sem o formulário configurado, os visitantes podem:
- ✅ Clicar no card de **Telefone** → Liga direto
- ✅ Clicar no card de **WhatsApp** → Abre conversa
- ✅ Clicar no card de **Email** → Abre cliente de email

## 🐛 Troubleshooting

### Erro 403 Forbidden
- Verifique se o Form ID está correto
- Confirme que o formulário está ativo no Formspree

### Email não chega
- Verifique a caixa de spam
- Confirme o email no dashboard do Formspree
- Aguarde alguns minutos (pode ter delay)

### Erro de CORS
- O Formspree já tem CORS configurado
- Se persistir, verifique se está usando HTTPS

## 📞 Suporte

- Documentação: https://help.formspree.io/
- Status: https://status.formspree.io/

---

**Tempo total de configuração: ~5 minutos** ⚡
