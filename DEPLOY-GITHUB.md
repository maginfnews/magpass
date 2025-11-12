# 🚀 Deploy no GitHub Pages

## Passo a Passo

### 1. Criar Repositório no GitHub

1. Acesse https://github.com/new
2. Nome do repositório: `magpass-site` (ou outro nome)
3. Deixe como **Public**
4. **NÃO** inicialize com README
5. Clique em **Create repository**

### 2. Configurar Git Local

Abra o terminal no diretório do projeto e execute:

```bash
# Inicializar repositório Git
git init

# Adicionar todos os arquivos
git add .

# Fazer o primeiro commit
git commit -m "Initial commit - Magpass landing page com tema de Natal"

# Renomear branch para main
git branch -M main

# Adicionar repositório remoto (substitua SEU-USUARIO pelo seu username do GitHub)
git remote add origin https://github.com/SEU-USUARIO/magpass-site.git

# Enviar para o GitHub
git push -u origin main
```

### 3. Configurar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em **Source**, selecione:
   - **GitHub Actions**
5. Salve as configurações

### 4. Deploy Automático

O deploy acontecerá automaticamente quando você fizer push para a branch `main`.

O workflow já está configurado em `.github/workflows/deploy.yml`

### 5. Acessar o Site

Após alguns minutos, seu site estará disponível em:

```
https://SEU-USUARIO.github.io/magpass-site/
```

## 🔄 Atualizações Futuras

Para atualizar o site, basta fazer:

```bash
git add .
git commit -m "Descrição das alterações"
git push
```

O deploy será automático!

## ⚙️ Configurações Importantes

### next.config.js
- ✅ `output: 'export'` - Gera site estático
- ✅ `images: { unoptimized: true }` - Imagens sem otimização (necessário para GitHub Pages)
- ✅ `trailingSlash: true` - URLs com barra final

### Variáveis de Ambiente
Já configuradas no workflow:
- NEXT_PUBLIC_COMPANY_NAME
- NEXT_PUBLIC_PHONE_MAIN
- NEXT_PUBLIC_PHONE_MOBILE
- NEXT_PUBLIC_EMAIL
- NEXT_PUBLIC_SITE_URL
- NEXT_PUBLIC_ADDRESS

## 🎯 Domínio Personalizado (Opcional)

Se quiser usar um domínio próprio (ex: www.magpass.com.br):

1. Crie um arquivo `CNAME` na raiz com o domínio:
```
www.magpass.com.br
```

2. Configure o DNS do seu domínio:
```
Type: CNAME
Name: www
Value: SEU-USUARIO.github.io
```

## 📝 Comandos Úteis

```bash
# Ver status do repositório
git status

# Ver histórico de commits
git log --oneline

# Criar nova branch
git checkout -b nova-feature

# Voltar para main
git checkout main

# Atualizar do GitHub
git pull
```

## 🎄 Features Implementadas

- ✅ Design premium Awwwards-worthy
- ✅ Tema de Natal completo
- ✅ Neve animada
- ✅ Banner promocional
- ✅ Vídeo de fundo no Hero
- ✅ Microinterações elegantes
- ✅ Responsivo (mobile, tablet, desktop)
- ✅ SEO otimizado
- ✅ Performance otimizada

## 🐛 Troubleshooting

### Erro: "failed to push some refs"
```bash
git pull origin main --rebase
git push
```

### Erro no build
Verifique os logs em **Actions** no GitHub

### Site não atualiza
- Aguarde 2-5 minutos após o push
- Limpe o cache do navegador (Ctrl + Shift + R)
- Verifique se o workflow completou em **Actions**

## 📞 Suporte

Para dúvidas sobre o deploy, verifique:
- https://docs.github.com/pages
- https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
