# Instruções para Adicionar Vídeo de Fundo

## 📹 Vídeo Necessário

Você precisa adicionar um vídeo na pasta `public/` com o nome `hero-video.mp4`.

## 🎬 Recomendações para o Vídeo

### Características Ideais:
- **Tema**: Tecnologia, servidores, data center, cabos de rede, pessoas trabalhando em TI
- **Duração**: 10-30 segundos (loop)
- **Resolução**: 1920x1080 (Full HD) ou superior
- **Formato**: MP4 (H.264)
- **Tamanho**: Máximo 5-10MB (otimizado para web)
- **Estilo**: Profissional, clean, moderno
- **Movimento**: Suave, não muito agitado

### Onde Encontrar Vídeos Gratuitos:

1. **Pexels Videos** - https://www.pexels.com/videos/
   - Busque por: "technology", "data center", "IT support", "network cables"

2. **Pixabay Videos** - https://pixabay.com/videos/
   - Busque por: "server room", "technology", "computer network"

3. **Coverr** - https://coverr.co/
   - Categoria: Technology

4. **Videvo** - https://www.videvo.net/
   - Busque por: "technology background"

## 📁 Como Adicionar

1. Baixe o vídeo desejado
2. Renomeie para `hero-video.mp4`
3. Coloque na pasta `c:\app-magpass\public\`
4. O vídeo aparecerá automaticamente no Hero

## 🎨 Ajustes de Opacidade

Se quiser ajustar a intensidade do vídeo, edite a linha 16 em `components/Hero.tsx`:

```tsx
className="absolute inset-0 w-full h-full object-cover opacity-20"
```

- `opacity-10` = Muito sutil (10%)
- `opacity-20` = Sutil (20%) ← **Atual**
- `opacity-30` = Moderado (30%)
- `opacity-40` = Visível (40%)

## 🔄 Alternativa: Usar URL Externa

Se preferir usar um vídeo hospedado externamente:

```tsx
<video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover opacity-20"
>
  <source src="https://seu-cdn.com/video.mp4" type="video/mp4" />
</video>
```

## ⚡ Performance

O vídeo está configurado para:
- ✅ Autoplay (inicia automaticamente)
- ✅ Loop (repete infinitamente)
- ✅ Muted (sem som, necessário para autoplay)
- ✅ PlaysInline (funciona em mobile)
- ✅ Opacidade reduzida (não interfere na legibilidade)
- ✅ Overlay gradiente (garante contraste do texto)

## 🎯 Sugestões de Busca

Termos para buscar vídeos perfeitos:
- "technology background loop"
- "data center servers"
- "network infrastructure"
- "IT support office"
- "modern technology"
- "digital transformation"
- "cloud computing"
- "server room blue"
