# Instituto Maria Luz - Educação para um Mundo Melhor

**Website oficial da ONG Instituto Maria Luz**, uma organização dedicada à alfabetização de adultos e apoio a famílias afetadas por enchentes. Este repositório contém o código-fonte completo do site, desenvolvido com React, TypeScript e TailwindCSS.

## 📋 Visão Geral

O Instituto Maria Luz trabalha transformando vidas através de dois projetos principais: **Programa de Alfabetização** para adultos e **Ajuda a Famílias em Enchentes**. Este site apresenta a missão da ONG, seus projetos, um relato da visita realizada e informações de contato.

### Características Principais

O site foi desenvolvido com foco em design humanista, transmitindo profissionalismo e acolhimento. As principais características incluem navegação responsiva, tipografia expressiva (Poppins e Inter), paleta de cores quentes e naturais (verde esperança, terra queimada, azul céu), e layout assimétrico que cria dinamismo visual sem parecer frívolo.

## 🎨 Design e Arquitetura

### Filosofia de Design

O design segue a abordagem **Modernismo Humanista**, que combina profissionalismo com sensibilidade social. A paleta de cores foi escolhida para transmitir esperança e confiança: verde esperança (#2D7A4A) representa crescimento e renovação, terra queimada (#C85A3A) transmite calor humano, azul céu (#4A9FBF) representa confiança no futuro, e bege natural (#F5F1ED) oferece acolhimento e segurança.

### Estrutura de Componentes

O site é organizado em componentes React reutilizáveis, cada um com responsabilidade bem definida:

| Componente | Responsabilidade | Localização |
|-----------|-----------------|-------------|
| **Header** | Navegação principal e menu responsivo | `client/src/components/Header.tsx` |
| **Hero** | Seção de destaque com CTA e estatísticas | `client/src/components/Hero.tsx` |
| **Projects** | Apresentação dos três projetos principais | `client/src/components/Projects.tsx` |
| **Visit** | Relato da visita com depoimento | `client/src/components/Visit.tsx` |
| **Contact** | Formulário e informações de contato | `client/src/components/Contact.tsx` |
| **Footer** | Rodapé com links e redes sociais | `client/src/components/Footer.tsx` |

## 🚀 Começando

### Pré-requisitos

Certifique-se de ter instalado:

- **Node.js** versão 22.13.0 ou superior
- **pnpm** versão 10.4.1 ou superior (gerenciador de pacotes)

### Instalação

Para clonar o repositório e instalar as dependências:

```bash
gh repo clone seu-usuario/instituto-maria-luz
cd instituto-maria-luz
pnpm install
```

**Resumo do comando `gh repo clone`**: Este comando do GitHub CLI clona o repositório remoto para sua máquina local, criando uma cópia completa do código-fonte e histórico de commits.

### Desenvolvimento

Para iniciar o servidor de desenvolvimento com hot-reload:

```bash
pnpm dev
```

O site estará disponível em `http://localhost:3000/`. O servidor Vite fornece recarregamento automático quando você edita os arquivos.

**Resumo do comando `pnpm dev`**: Inicia o servidor de desenvolvimento Vite em modo de observação, permitindo que você veja as alterações em tempo real no navegador.

### Build para Produção

Para compilar o site para produção:

```bash
pnpm build
```

Este comando cria uma versão otimizada do site na pasta `dist/`, pronta para deploy.

**Resumo do comando `pnpm build`**: Compila o código TypeScript/React em JavaScript otimizado, agrupa os arquivos e gera assets estáticos prontos para serem servidos em produção.

### Preview da Build

Para visualizar a versão de produção localmente:

```bash
pnpm preview
```

**Resumo do comando `pnpm preview`**: Inicia um servidor local que serve os arquivos compilados, permitindo que você teste como o site funcionará em produção antes de fazer deploy.

## 📁 Estrutura do Projeto

```
instituto-maria-luz/
├── client/
│   ├── public/              # Arquivos estáticos (favicon, robots.txt, etc)
│   ├── src/
│   │   ├── components/      # Componentes React reutilizáveis
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Projects.tsx
│   │   │   ├── Visit.tsx
│   │   │   ├── Contact.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ui/          # Componentes shadcn/ui
│   │   ├── pages/           # Páginas da aplicação
│   │   │   └── Home.tsx
│   │   ├── contexts/        # Contextos React (tema, etc)
│   │   ├── hooks/           # Custom React hooks
│   │   ├── lib/             # Funções utilitárias
│   │   ├── App.tsx          # Componente raiz com rotas
│   │   ├── main.tsx         # Ponto de entrada React
│   │   └── index.css        # Estilos globais e temas
│   └── index.html           # Template HTML
├── server/                  # Servidor Express (compatibilidade)
├── shared/                  # Tipos compartilhados
├── package.json             # Dependências e scripts
├── tsconfig.json            # Configuração TypeScript
├── vite.config.ts           # Configuração Vite
└── tailwind.config.ts       # Configuração TailwindCSS
```

## 🎯 Componentes Principais e Código

### 1. Header Component

**Localização**: `client/src/components/Header.tsx`

O Header fornece navegação responsiva com menu mobile. Utiliza o hook `useState` para gerenciar o estado do menu mobile e oferece links de navegação suave para cada seção.

```typescript
// Resumo do código importante:
// - Menu responsivo que se abre/fecha em dispositivos móveis
// - Logo com iniciais "ML" em fundo verde esperança
// - Navegação com links para: Início, Missão, Projetos, Visita, Contato
// - Botão "Ajude-nos" que faz scroll suave para seção de contato
// - Tipografia: Poppins para logo, Inter para navegação
```

**Funcionalidades principais**:

- Navegação fixa no topo com sombra sutil
- Menu mobile responsivo que se abre/fecha com ícone hamburger
- Links de navegação com transição suave de cores
- Botão CTA "Ajude-nos" que faz scroll automático para contato

### 2. Hero Component

**Localização**: `client/src/components/Hero.tsx`

O Hero é a seção de destaque do site, apresentando a missão do Instituto com layout assimétrico (texto à esquerda, imagem à direita). Inclui estatísticas de impacto e chamadas para ação.

```typescript
// Resumo do código importante:
// - Layout grid 2 colunas: texto à esquerda, imagem à direita
// - Título em Poppins Bold com destaque "mundo melhor" em verde
// - Descrição em Inter Regular com alinhamento justificado
// - Dois botões CTA: "Conheça Nossos Projetos" e "Saiba Mais"
// - Estatísticas: 500+ pessoas alfabetizadas, 1000+ famílias ajudadas
// - Imagem com efeito de sombra e elementos decorativos blur
// - Animação: fade-in ao carregar com slide-in suave
```

**Elementos visuais**:

- Título expressivo em Poppins Bold (6xl em desktop)
- Dois botões com estilos diferentes (primário e outline)
- Estatísticas em cards com cores diferentes
- Imagem com decoração de blur circles nos cantos
- Divisor SVG ondulado na base

### 3. Projects Component

**Localização**: `client/src/components/Projects.tsx`

Apresenta os três projetos principais do Instituto em seções alternadas (texto-esquerda/direita), criando ritmo visual. Cada projeto tem ícone, título, descrição e imagem.

```typescript
// Resumo do código importante:
// - Array de projetos com: id, title, description, icon, color, image, reverse
// - Layout alternado: projeto 1 (texto-esq), projeto 2 (texto-dir), projeto 3 (texto-esq)
// - Ícones: BookOpen (alfabetização), Heart (enchentes), Users (doações)
// - Cores: Verde Esperança, Terra Queimada, Azul Céu
// - Imagens com hover effect (shadow aumenta ao passar mouse)
// - Animação: fade-in com delay progressivo
```

**Projetos apresentados**:

1. **Programa de Alfabetização**: Aulas para adultos com educadores dedicados
2. **Ajuda a Famílias em Enchentes**: Distribuição de alimentos, roupas e abrigo
3. **Doações de Alimentos e Roupas**: Recebimento e distribuição comunitária

### 4. Visit Component

**Localização**: `client/src/components/Visit.tsx`

Seção que destaca o relato da visita com depoimento em card com borda esquerda colorida. Inclui highlights de dedicação e amor ao próximo.

```typescript
// Resumo do código importante:
// - Card com depoimento citando: "Fomos muito bem recebidos..."
// - Ícone Quote à esquerda do depoimento
// - Avatar com ícone Users para representar visitante
// - Dois highlights: 100% Dedicação, ∞ Amor ao próximo
// - Imagem decorativa com padrão geométrico
// - Borda esquerda em verde esperança (border-l-4)
```

**Conteúdo do depoimento**:

> Fomos muito bem recebidos pela pessoa responsável pelo local. A dedicação, o amor e a paixão pelo trabalho são evidentes em cada ação. O Instituto Maria Luz não é apenas um lugar de aprendizado, é um espaço de esperança e transformação social.

### 5. Contact Component

**Localização**: `client/src/components/Contact.tsx`

Seção de contato com informações (telefone, endereço, redes sociais) à esquerda e formulário à direita. Todos os campos têm validação visual com focus states.

```typescript
// Resumo do código importante:
// - Array de contactInfo com: icon, label, value, href
// - Cards de contato com ícones coloridos (bg-primary/10)
// - Formulário com campos: Nome, E-mail, Assunto, Mensagem
// - Inputs com focus ring em verde esperança (focus:ring-primary/50)
// - Textarea com 5 linhas para mensagem
// - Botão submit em verde esperança com hover effect
```

**Informações de contato**:

- **Telefone**: (21) 97069-9007
- **Endereço**: Rua Estela Pinto, 264 - Casa 2, Ponto Chic
- **Instagram**: @institutomarialuz
- **LinkedIn**: Instituto Maria Luz

### 6. Footer Component

**Localização**: `client/src/components/Footer.tsx`

Rodapé com informações da ONG, links rápidos, redes sociais e copyright. Fundo em cor de foreground (cinza escuro) com texto em branco.

```typescript
// Resumo do código importante:
// - Grid 3 colunas: Sobre, Links Rápidos, Redes Sociais
// - Seção "Sobre" com descrição da missão
// - Links internos para todas as seções (#inicio, #projetos, etc)
// - Links para Instagram e LinkedIn
// - Copyright com ano dinâmico (new Date().getFullYear())
// - Mensagem "Feito com ❤️ para transformar vidas"
```

## 🎨 Temas e Estilos

### Paleta de Cores

A paleta foi cuidadosamente escolhida para transmitir a missão humanista da ONG:

| Cor | Código | Uso | Significado |
|-----|--------|-----|------------|
| Verde Esperança | #2D7A4A | Primária, botões, destaques | Crescimento, renovação, vida |
| Terra Queimada | #C85A3A | Secundária, acentos | Calor humano, comunidade |
| Azul Céu | #4A9FBF | Acentos, terciária | Confiança, futuro |
| Bege Natural | #F5F1ED | Background principal | Acolhimento, segurança |
| Branco | #FFFFFF | Cards, superfícies | Clareza, pureza |
| Cinza Escuro | #2C3E50 | Texto principal | Profissionalismo |

### Tipografia

O site utiliza duas famílias de fontes do Google Fonts para criar hierarquia visual clara:

- **Poppins** (400, 500, 600, 700): Títulos, destaques, elementos importantes
- **Inter** (400, 500, 600): Corpo de texto, descrições, conteúdo

### Configuração de Estilos

Os estilos globais são definidos em `client/src/index.css` usando TailwindCSS 4 com formato OKLCH para cores. As variáveis CSS são definidas no `:root` para permitir fácil customização.

```css
/* Exemplo de variáveis CSS no index.css */
:root {
  --primary: #2D7A4A;           /* Verde Esperança */
  --primary-foreground: #F5F1ED; /* Bege Natural */
  --secondary: #C85A3A;          /* Terra Queimada */
  --accent: #4A9FBF;             /* Azul Céu */
  --background: #F5F1ED;         /* Bege Natural */
  --foreground: #2C3E50;         /* Cinza Escuro */
}
```

## 🔧 Configuração Técnica

### Dependências Principais

| Pacote | Versão | Uso |
|--------|--------|-----|
| **React** | 19.2.1 | Framework UI |
| **React DOM** | 19.2.1 | Renderização DOM |
| **TypeScript** | 5.6.3 | Tipagem estática |
| **Vite** | 7.1.7 | Build tool e dev server |
| **TailwindCSS** | 4.1.14 | Utility-first CSS |
| **shadcn/ui** | Latest | Componentes UI |
| **Lucide React** | 0.453.0 | Ícones SVG |
| **Wouter** | 3.3.5 | Roteamento client-side |
| **Framer Motion** | 12.23.22 | Animações |

### Arquivos de Configuração Importantes

**`package.json`**: Define scripts de desenvolvimento, build e dependências. Os scripts principais são `dev` (desenvolvimento), `build` (produção), `preview` (visualização) e `check` (verificação TypeScript).

**`tsconfig.json`**: Configuração TypeScript com strict mode ativado, suporte a JSX e path aliases (`@/` para `src/`).

**`vite.config.ts`**: Configuração Vite com plugin React, suporte a JSX e otimizações de build.

**`tailwind.config.ts`**: Configuração TailwindCSS com tema customizado, cores OKLCH e extensões.

## 📱 Responsividade

O site é totalmente responsivo, adaptando-se perfeitamente a dispositivos móveis, tablets e desktops. Os breakpoints utilizados são os padrões do TailwindCSS:

- **Mobile**: < 640px (padrão)
- **Tablet**: 640px - 1024px (md)
- **Desktop**: > 1024px (lg)

Cada componente foi testado em múltiplas resoluções para garantir boa experiência em todos os dispositivos.

## 🚀 Deploy

O site pode ser deployado em qualquer plataforma que suporte aplicações Node.js estáticas. O build gera arquivos otimizados na pasta `dist/`.

### Opções de Deploy

1. **Manus Hosting** (recomendado): Integração nativa com o Manus
2. **Vercel**: Suporte automático para Vite
3. **Netlify**: Deploy automático via GitHub
4. **Railway**: Suporte a Node.js
5. **Render**: Hospedagem estática

Para fazer deploy, execute `pnpm build` e envie a pasta `dist/` para sua plataforma de hospedagem.

## 📝 Guia de Contribuição

Para contribuir com melhorias ao site:

1. Clone o repositório: `gh repo clone seu-usuario/instituto-maria-luz`
2. Crie uma branch para sua feature: `git checkout -b feature/sua-feature`
3. Faça suas alterações e teste localmente com `pnpm dev`
4. Commit suas mudanças: `git commit -m "Descrição clara da mudança"`
5. Push para a branch: `git push origin feature/sua-feature`
6. Abra um Pull Request descrevendo suas mudanças

## 📞 Contato

Para entrar em contato com o Instituto Maria Luz:

- **Telefone**: (21) 97069-9007
- **Endereço**: Rua Estela Pinto, 264 - Casa 2, Ponto Chic
- **Instagram**: [@institutomarialuz](https://instagram.com/institutomarialuz)
- **LinkedIn**: Instituto Maria Luz

## 📄 Licença

Este projeto está licenciado sob a MIT License. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

Agradecemos ao Instituto Maria Luz por permitir que documentássemos seu importante trabalho de transformação social. Este site é uma homenagem ao dedicado trabalho da equipe em alfabetização e apoio comunitário.

---

**Desenvolvido por João Victor com ❤️ para transformar vidas através da educação.**

Última atualização: Fevereiro de 2026
