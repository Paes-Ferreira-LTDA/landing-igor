export type Lang = "en" | "pt";

export const t = {
  en: {
    nav: {
      journey: "Journey",
      projects: "Projects",
      cta: "Let's talk",
    },
    hero: {
      badge: "Open to AI roles · Remote · Hybrid",
      h1a: "I build AI products",
      h1b: "that work in production.",
      desc: "From discovery to deploy: I combine product vision, analytical depth and business sense to turn complex problems into software that delivers value. Electrical engineer, 7 years at Volvo, 8 as a founder in the energy sector.",
      products: [
        { name: "eXmesh", tagline: "MAS · agentic intelligence layer" },
        { name: "eTradeflow", tagline: "ETRM · agile energy contracts" },
        { name: "eFlowing", tagline: "CRM · faster free-market migrations" },
      ],
      ctaPrimary: "Let's talk",
      ctaSecondary: "See my journey",
      ctaCv: "Download CV",
    },
    timeline: {
      eyebrow: "The Journey",
      title: "From Bosch China to AI in production",
      subtitle: "19 years of building. 3 countries. One consistent thread.",
      hint: "Click any card to expand",
      lightboxClose: "Close",
    },
    projects: {
      eyebrow: "AI Systems · Production",
      title: "eXmesh — Multi-Agent System, a mesh of coordinated agents running in production on GCP.",
      subtitle: "MUTHUR orchestrates. Bishop strategizes. Walter executes. 4 Synthetics monitor. Human-in-the-loop preserved.",
      diagramTitle: "Architecture · eXmesh Platform",
      diagramDesc:
        "Real control flow — from human to GCP substrate. Governance Gateway ensures every dispatch respects OKRs and Mandates before reaching agents.",
      platformsTitle: "Platforms Built",
      platformsSubtitle: "Production software used by real companies.",
      expandHint: "⤢ Expand",
      diagramScrollHint: "← swipe to see the full diagram →",
      footerBuilt: "Built with Next.js · Deployed on Vercel",
    },
    contact: {
      title: "Let's build something.",
      subtitle:
        "Available for AI Product Manager and Technical Product Manager roles. Remote/Hybrid. Brazil and international.",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      messagePlaceholder: "Tell me about the role or project (optional)",
      submit: "Send",
      sending: "Sending...",
      success: "Received! I'll be in touch soon. ✅",
    },
    footer: {
      rights: "All rights reserved.",
    },
    agents: [
      {
        subtitle: "Mother OS · Orchestration Layer",
        desc: "Activated by chat. Routes to specialized manager agents, extracts memory from conversations and keeps everyone aligned to OKR-based governance.",
      },
      {
        subtitle: "Strategy-Ops AI",
        desc: "Reads ADRs, BRS, and SPECs, detects architectural drift, analyzes strategy documents. Bilateral conversation via chat HITL.",
      },
      {
        subtitle: "Surgical Executor",
        desc: "Our first agent to autonomously merge a PR in production. Receives task openers, runs tests, opens PRs and self-declares ready for merge.",
        milestone: "1st autonomous PR merge in production",
      },
      {
        subtitle: "Infra Monitors per Squad",
        desc: "Four autonomous agents — one per product squad. Each runs headless on Cloud Run, commits audit trail, and posts status to the FIPA Bus.",
      },
    ],
    platforms: [
      {
        desc: "eXmesh — Multi-Agent System, a mesh of coordinated agents. Real-time swarm orchestration with HITL and Governance.",
      },
      {
        desc: "Beenx's commercial engine: opportunity pipeline, onboarding and step-by-step tracking of each client's migration to Brazil's free energy market.",
      },
      {
        desc: "Beenx's trading environment: Broker and Home Broker terminals, real-time pricing, contracts and compliance integrated for energy commercializers.",
      },
    ],
    events: [
      {
        desc: "Industrial automation at scale. First exposure to global manufacturing systems.",
        context: "Living and working in China at 21 — immersed in a completely different culture while engineering production automation systems alongside Chinese teams. The scale of everything was humbling. The seed of thinking beyond borders was planted.",
      },
      {
        desc: "Systems engineering at the source. Built the mindset for precision and process.",
        context: "Stuttgart, the birthplace of the automobile. Working inside Bosch's R&D labs taught me what it means to engineer for reliability — no shortcuts, no approximations. German precision became a personal standard I still hold.",
      },
      {
        desc: "7 years in heavy industry: from electrical product development at Volvo Bus to field quality and reliability engineering on engine platforms.",
        context: "I started at Volvo Bus on multiplexed electrical architecture, 3D harness routing in Catia, Saber circuit design and product variant management. In 2014 I moved to Volvo Group Trucks Technology, leading critical field-failure cases on D7E, DH12E and D11R engines. I used 8D, FMEA, Weibull and IATF 16949, defined service campaigns and recalls, and was the technical focal point between Latin America and engineering centers in Sweden, France and the US. Seven years that shaped how I think about systems, reliability and accountability.",
      },
      {
        desc: "Foundation in systems, control theory, and analytical thinking.",
        context: "An electrical engineering degree is fundamentally about modeling systems — inputs, outputs, feedback loops, failure modes. That mental model still drives how I architect software, teams, and companies.",
      },
      {
        desc: "A visit that changed everything — from operator to builder.",
        context: "December 2017. Stanford, Google, YC — meeting founders who were actually shipping world-changing products. I flew back to Brazil with one clear thought: I'm going to build something. That trip didn't inspire me — it decided me.",
      },
      {
        desc: "Product vision, roadmap and portfolio strategy for B2B platforms in Brazil's energy market — from day one.",
        context: "Since 2018 I've owned the product vision, roadmap and portfolio strategy of Fohat's B2B platforms for the energy market. I led the build of eTradeflow — a trading environment with Terminal Broker and Home Broker, with integrated contracts and compliance — and ran two ANEEL R&D projects from kickoff to delivery, one for the Home Broker and one for the Terminal Broker. Every feature had to survive ANEEL regulation and CCEE compliance.",
      },
      {
        desc: "Board of Advisors member at OSINOVA, a corporate venture capital fund focused on mobility, smart cities and ag-tech.",
        context: "I served on the Board of Advisors of OSINOVA, a corporate venture capital fund focused on mobility, smart cities and ag-tech, bringing together traditional corporate-market experience and the startup builder's view.",
      },
      {
        desc: "I lead eXmesh: a mesh of AI agents running autonomously and coordinated in production on GCP. I specify, architect and govern; the agents execute.",
        context: "MUTHUR receives any demand and distributes work with no human intermediary. Bishop holds the organizational memory — it reads our documentation and historical decisions and detects drift before it becomes a problem. Walter runs engineering end-to-end and was the first to autonomously merge code into production. Each area has its own specialized sub-swarm, coordinated through the central mesh — and every action passes a Governance Gateway that validates OKRs, mandates and decisions, human in the loop. What we built internally is being shaped into a product.",
      },
      {
        desc: "Bringing this rare combination — product passion, innovation, analytical depth and business sense, with AI at scale — to your company.",
        context: "The companies I founded are in GTM and being prepared to become AI First. I'm now open to channeling everything I've built — the AI systems, the product sense, the execution discipline — into a role where I can make an immediate, measurable impact. Remote. Hybrid. Brazil and international.",
      },
    ],
  },
  pt: {
    nav: {
      journey: "Jornada",
      projects: "Projetos",
      cta: "Vamos conversar",
    },
    hero: {
      badge: "Disponível para vagas em AI · Remoto · Híbrido",
      h1a: "Construo produtos de AI",
      h1b: "que funcionam em produção.",
      desc: "Da descoberta ao deploy: uno visão de produto, capacidade analítica e negócios para transformar problemas complexos em software que gera valor. Engenheiro eletricista, 7 anos na Volvo, 8 como founder no setor de energia.",
      products: [
        { name: "eXmesh", tagline: "SMA · camada de inteligência agêntica" },
        { name: "eTradeflow", tagline: "ETRM · agilidade em contratos de energia" },
        { name: "eFlowing", tagline: "CRM · migração acelerada ao Mercado Livre" },
      ],
      ctaPrimary: "Vamos conversar",
      ctaSecondary: "Ver minha jornada",
      ctaCv: "Baixar CV",
    },
    timeline: {
      eyebrow: "A Jornada",
      title: "Da Bosch China à AI em produção",
      subtitle: "19 anos construindo. 3 países. Um fio condutor.",
      hint: "Clique em qualquer card para expandir",
      lightboxClose: "Fechar",
    },
    projects: {
      eyebrow: "Sistemas de AI · Produção",
      title: "eXmesh — Sistema Multi-Agentes, uma malha de agentes coordenados rodando no GCP.",
      subtitle: "MUTHUR orquestra. Bishop planeja. Walter executa. 4 Synthetics monitoram. HITL preservado.",
      diagramTitle: "Arquitetura · Plataforma eXmesh",
      diagramDesc:
        "Fluxo real de controle — do humano ao substrato GCP. O Governance Gateway garante que todo dispatch respeita OKRs e Mandates antes de chegar aos agentes.",
      platformsTitle: "Plataformas Construídas",
      platformsSubtitle: "Software em produção usado por empresas reais.",
      expandHint: "⤢ Ampliar",
      diagramScrollHint: "← deslize para ver o diagrama completo →",
      footerBuilt: "Desenvolvido com Next.js · Deploy no Vercel",
    },
    contact: {
      title: "Vamos construir algo.",
      subtitle:
        "Disponível para vagas de AI Product Manager e Technical Product Manager. Remoto/Híbrido. Brasil e mercado internacional.",
      namePlaceholder: "Seu nome",
      emailPlaceholder: "Seu e-mail",
      messagePlaceholder: "Conte sobre a vaga ou projeto (opcional)",
      submit: "Enviar",
      sending: "Enviando...",
      success: "Recebido! Retorno em breve. ✅",
    },
    footer: {
      rights: "Todos os direitos reservados.",
    },
    agents: [
      {
        subtitle: "Mother OS · Camada de Orquestração",
        desc: "Ativada por chat. Roteia para agentes managers especializados, extrai memória das conversas e mantém todos alinhados a governança por OKRs.",
      },
      {
        subtitle: "AI de Strategy-Ops",
        desc: "Lê ADRs, BRS, e SPECs, detecta drift arquitetural, analisa documentos de estratégia. Conversa bilateral via chat HITL.",
      },
      {
        subtitle: "Executor Cirúrgico",
        desc: "Nosso primeiro agente a fazer merge autônomo de PR em produção. Recebe task openers, roda testes, abre PRs e se declara pronto para merge.",
        milestone: "1º merge autônomo de PR em produção",
      },
      {
        subtitle: "Monitores de Infra por Squad",
        desc: "Quatro agentes autônomos — um por squad de produto. Cada um roda headless no Cloud Run, commita audit trail e posta status no FIPA Bus.",
      },
    ],
    platforms: [
      {
        desc: "eXmesh — Sistema Multi-Agentes, uma malha de agentes coordenados. Orquestração de swarms em tempo real com HITL e Governança.",
      },
      {
        desc: "Motor comercial da Beenx: pipeline de oportunidades, onboarding e acompanhamento de cada etapa da migração dos clientes ao Mercado Livre de Energia.",
      },
      {
        desc: "Ambiente de trading da Beenx: Terminal Broker e Home Broker, precificação em tempo real, contratos e compliance integrados para Comercializadoras.",
      },
    ],
    events: [
      {
        desc: "Automação industrial em escala. Primeira exposição a sistemas globais de manufatura.",
        context: "Vivendo e trabalhando na China aos 21 anos — imerso em uma cultura completamente diferente enquanto desenvolvia sistemas de automação de produção ao lado de equipes chinesas. A escala de tudo era impressionante. Plantada a semente de pensar além das fronteiras.",
      },
      {
        desc: "Engenharia de sistemas na fonte. Construí a mentalidade de precisão e processo.",
        context: "Stuttgart, o berço do automóvel. Trabalhar nos laboratórios de P&D da Bosch me ensinou o que significa engenheirar para confiabilidade — sem atalhos, sem aproximações. A precisão alemã virou um padrão pessoal que mantenho até hoje.",
      },
      {
        desc: "7 anos na indústria pesada: do desenvolvimento de produto elétrico no Volvo Bus à engenharia de qualidade e confiabilidade de campo em motores.",
        context: "Comecei no Volvo Bus, com arquitetura elétrica multiplexada, chicotes em 3D no Catia, circuitos no Saber e gestão de variantes de produto. Em 2014 fui para a Volvo Group Trucks Technology, onde conduzi reclamações críticas de campo em motores D7E, DH12E e D11R. Usei 8D, FMEA, Weibull e IATF 16949, defini campanhas de serviço e recalls e fui o ponto focal entre a América Latina e os centros de engenharia na Suécia, França e EUA. Foram sete anos que moldaram como penso sobre sistemas, confiabilidade e responsabilidade.",
      },
      {
        desc: "Base em sistemas, teoria de controle e pensamento analítico.",
        context: "Um diploma de engenharia elétrica é fundamentalmente sobre modelar sistemas — entradas, saídas, loops de feedback, modos de falha. Esse modelo mental ainda guia como arquiteto software, times e empresas.",
      },
      {
        desc: "Uma visita que mudou tudo — de operador a construtor.",
        context: "Dezembro de 2017. Stanford, Google, YC — conhecendo founders que estavam realmente entregando produtos que mudam o mundo. Voltei ao Brasil com um pensamento claro: vou construir algo. Essa viagem não me inspirou — ela me decidiu.",
      },
      {
        desc: "Visão de produto, roadmap e estratégia de portfólio das plataformas B2B no mercado de energia — desde o primeiro dia.",
        context: "Desde 2018 sou responsável pela visão de produto, roadmap e estratégia de portfólio das plataformas B2B da Fohat para o mercado de energia. Liderei a construção da eTradeflow — ambiente de trading com Terminal Broker e Home Broker, com contratos e compliance integrados — e conduzi dois projetos de P&D ANEEL do início à entrega, um para o Home Broker e outro para o Terminal Broker. Cada feature teve que sobreviver à regulação da ANEEL e à conformidade da CCEE.",
      },
      {
        desc: "Membro do Board of Advisors da OSINOVA, fundo de venture capital corporativo focado em mobilidade, smart cities e ag-tech.",
        context: "Fui membro do Board of Advisors da OSINOVA, fundo de venture capital corporativo focado em mobilidade, smart cities e ag-tech, unindo a experiência do mercado corporativo tradicional e a de startups.",
      },
      {
        desc: "Lidero o eXmesh: malha de agentes de IA rodando de forma autônoma e coordenada em produção no GCP. Eu especifico, arquiteto e governo; os agentes executam.",
        context: "A MUTHUR recebe qualquer demanda e distribui o trabalho sem intermediário humano. O Bishop guarda a memória organizacional — lê nossa documentação e decisões históricas e detecta desvios antes que virem problema. O Walter realiza engenharia de ponta a ponta e foi o primeiro a fazer merge autônomo de código em produção. Cada área tem seu sub-swarm especializado, coordenado pela malha central — e cada ação passa por um Governance Gateway que valida OKRs, mandatos e decisões, com humano no circuito. O que construímos internamente está sendo formatado como produto.",
      },
      {
        desc: "Trazendo essa combinação rara — paixão por produto, inovação, capacidade analítica e visão de negócios, com AI em escala — para a sua empresa.",
        context: "As empresas que fundei estão em GTM e sendo preparadas para serem \"AI First\". Agora estou aberto a canalizar tudo que construí — os sistemas de AI, o senso de produto, a disciplina de execução — em um papel onde posso ter impacto imediato e mensurável. Remoto. Híbrido. Brasil e mercado internacional.",
      },
    ],
  },
} as const;
