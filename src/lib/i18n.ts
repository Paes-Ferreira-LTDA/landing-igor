export type Lang = "en" | "pt";

export const t = {
  en: {
    nav: {
      journey: "Journey",
      projects: "Projects",
      cta: "Let's talk",
    },
    hero: {
      h1a: "Corporate × Investments",
      h1b: "× Innovation.",
      desc: "A career built across three worlds: engineering at scale at Volvo, evaluating the portfolio of OSINOVA's corporate venture fund, and leading product and software development in startups. That mix lets me read a business from the engineering bench, the product roadmap and the investor's table at once. Electrical engineer, 7 years at Volvo, 8 as a founder in the energy sector.",
      pillars: [
        { name: "Corporate", tagline: "engineering at scale at Volvo" },
        { name: "Investments", tagline: "OSINOVA corporate VC portfolio" },
        { name: "Innovation", tagline: "product and software in startups" },
      ],
      pillarLabel: "PILLAR",
      figure: "FIG. 01 — THREE PILLARS",
      result: "Product Manager · Tech Lead",
      ctaPrimary: "Let's talk",
      ctaSecondary: "See my journey",
      ctaCv: "Download CV",
    },
    timeline: {
      eyebrow: "The Journey",
      title: "From Bosch China to AI in production",
      subtitle: "19 years of building. 3 countries. One consistent thread.",
      hint: "Click any card to expand",
      pillars: ["corporate", "innovation", "investments", "R&D"],
      figure: "FIG. 02 — CAREER GRAPH · BRANCHES = PILLARS",
      lightboxClose: "Close",
    },
    projects: {
      intro: {
        h1a: "I build AI products",
        h1b: "that work in production.",
        desc: "From discovery to deploy: I combine product vision, analytical depth and business sense to turn complex problems into software that delivers value. Electrical engineer, 7 years at Volvo, 8 as a founder in the energy sector.",
        products: [
          { name: "eXmesh", tagline: "MAS · agentic intelligence layer" },
          { name: "eTradeflow", tagline: "ETRM · agile energy contracts" },
          { name: "eFlowing", tagline: "CRM · faster free-market migrations" },
        ],
      },
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
        desc: "Product Manager and Tech Lead since 2018: from B2B energy platforms to Fohat OS — energy processes completed end-to-end by teams of AI agents.",
        context: "Since 2018 I've owned the product vision, roadmap and portfolio strategy of Fohat's B2B platforms for the energy market. I led the build of eTradeflow — a trading environment with Terminal Broker and Home Broker, with integrated contracts and compliance — and ran two ANEEL R&D projects from kickoff to delivery. Today I lead Fohat OS (eXmesh + eFlowing): the company defines the process and what counts as done; teams of AI agents execute it on top of the systems already in place, with human approval at critical points and a full audit trail, and an independent verifier confirms the result against the external source. The unit we bill is one completed, verified process — not a seat, a token or a conversation.",
      },
      {
        desc: "Home Broker: ANEEL R&D project with AES Tietê, a Brazilian hydro generation company.",
        context: "Home Broker, ANEEL R&D project PD 0064-1059/2019 with AES Tietê, run as part of the work built at Fohat.",
      },
      {
        desc: "Selected for ACCIONA's first Open Innovation program in Chile, to develop a pilot with the company.",
        context: "Fohat was selected for the first edition in Chile of ACCIONA's Open Innovation program, which brings external startups in to contribute to innovation at the company. The program ran as a pilot built with ACCIONA, with agile methodology training, sprints, mentoring and a final Demo Day.",
      },
      {
        desc: "Broker Back Office: an integrated platform for trading energy contracts and managing the back office, an ANEEL R&D project with Eneva.",
        context: "ANEEL R&D project PD 08601-0320/2020 with Eneva, executed by Fohat and ACE. The goal was to build an integrated platform for trading energy contracts and managing the back office. The project created an electronic environment for bilateral contracting on the Organized Over-the-Counter Market, with potential to reduce back office work and financial risk. It raises trust between the parties, reduces contract informality and non-performance, and makes for a safer environment as the free energy market grows, in line with PLS 232/2016. Duration: 16 months, starting June 2020.",
      },
      {
        desc: "ANEEL R&D project PD-00068-0056/2022 with ISA CTEEP, a Brazilian power transmission company.",
        context: "ANEEL R&D project PD-00068-0056/2022 with ISA CTEEP, run as part of the work built at Fohat.",
      },
      {
        desc: "Interliga SP (P272.5): R&D project with Comgás to integrate the natural gas distributors of the state of São Paulo.",
        context: "Interliga SP (project P272.5) was an R&D project with Comgás, run as part of the work built at Fohat. Its goal was to integrate the natural gas distributors of the state of São Paulo through a feasibility study for interconnecting their distribution systems.",
      },
      {
        desc: "Board of Advisors member at OSINOVA, a corporate venture capital fund focused on mobility, smart cities and ag-tech.",
        context: "I served on the Board of Advisors of OSINOVA, a corporate venture capital fund focused on mobility, smart cities and ag-tech, bringing together traditional corporate-market experience and the startup builder's view.",
      },
      {
        desc: "The union of three pillars: Corporate × Investments × Innovation.",
        context: "• Corporate: large corporations, where I learned engineering at scale at Volvo — quality, reliability and process discipline.\n• Investments: evaluating portfolio companies of OSINOVA, a corporate venture capital fund.\n• Innovation: startups, where I led product and software development from zero to production in regulated markets.\nThat mix lets me read a business from the engineering bench, the product roadmap and the investor's table at once. I'm now open to bringing it to a role where I can make an immediate, measurable impact.",
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
      h1a: "Corporativo × Investimentos",
      h1b: "× Inovação.",
      desc: "Uma carreira construída entre três mundos: engenharia em escala na Volvo, avaliação do portfólio do fundo de venture capital corporativo da OSINOVA e liderança de desenvolvimento de produto e software em startups. Essa combinação me permite enxergar um negócio ao mesmo tempo da bancada de engenharia, do roadmap de produto e da mesa do investidor. Engenheiro eletricista, 7 anos na Volvo, 8 como founder no setor de energia.",
      pillars: [
        { name: "Corporativo", tagline: "engenharia em escala na Volvo" },
        { name: "Investimentos", tagline: "portfólio CVC da OSINOVA" },
        { name: "Inovação", tagline: "produto e software em startups" },
      ],
      pillarLabel: "PILAR",
      figure: "FIG. 01 — TRÊS PILARES",
      result: "Product Manager · Tech Lead",
      ctaPrimary: "Vamos conversar",
      ctaSecondary: "Ver minha jornada",
      ctaCv: "Baixar CV",
    },
    timeline: {
      eyebrow: "A Jornada",
      title: "Da Bosch China à AI em produção",
      subtitle: "19 anos construindo. 3 países. Um fio condutor.",
      hint: "Clique em qualquer card para expandir",
      pillars: ["corporativo", "inovação", "investimentos", "P&D"],
      figure: "FIG. 02 — GRAFO DE CARREIRA · BRANCHES = PILARES",
      lightboxClose: "Fechar",
    },
    projects: {
      intro: {
        h1a: "Construo produtos de AI",
        h1b: "que funcionam em produção.",
        desc: "Da descoberta ao deploy: uno visão de produto, capacidade analítica e negócios para transformar problemas complexos em software que gera valor. Engenheiro eletricista, 7 anos na Volvo, 8 como founder no setor de energia.",
        products: [
          { name: "eXmesh", tagline: "SMA · camada de inteligência agêntica" },
          { name: "eTradeflow", tagline: "ETRM · agilidade em contratos de energia" },
          { name: "eFlowing", tagline: "CRM · migração acelerada ao Mercado Livre" },
        ],
      },
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
        desc: "Product Manager e Tech Lead desde 2018: das plataformas B2B de energia ao Fohat OS — processos de energia concluídos ponta a ponta por times de agentes de IA.",
        context: "Desde 2018 sou responsável pela visão de produto, roadmap e estratégia de portfólio das plataformas B2B da Fohat para o mercado de energia. Liderei a construção da eTradeflow — ambiente de trading com Terminal Broker e Home Broker, com contratos e compliance integrados — e conduzi dois projetos de P&D ANEEL do início à entrega. Hoje lidero o Fohat OS (eXmesh + eFlowing): a companhia define o processo e o que conta como concluído; times de agentes de IA executam sobre os sistemas que já existem, com aprovação humana nos pontos críticos e trilha auditável, e um verificador independente confirma o resultado contra a fonte externa. A unidade que se cobra é um processo concluído e verificado — não assento, token ou conversa.",
      },
      {
        desc: "Home Broker: projeto de P&D ANEEL com a AES Tietê, geradora de energia.",
        context: "Home Broker, projeto de P&D ANEEL PD 0064-1059/2019 com a AES Tietê, conduzido como parte do trabalho construído na Fohat.",
      },
      {
        desc: "Selecionada para a primeira edição no Chile do programa de Open Innovation da ACCIONA, para desenvolver um piloto com a companhia.",
        context: "A Fohat foi selecionada para a primeira edição no Chile do programa de Open Innovation da ACCIONA, que traz startups externas para contribuir com a inovação na companhia. O programa foi um piloto construído com a ACCIONA, com capacitação em metodologias ágeis, sprints, mentoria e um Demo Day final.",
      },
      {
        desc: "Broker Back Office: plataforma integrada de comercialização de contratos de energia e gestão de backoffice, projeto de P&D ANEEL com a Eneva.",
        context: "Projeto de P&D ANEEL PD 08601-0320/2020 com a Eneva, executado pela Fohat e ACE. O objetivo foi desenvolver uma plataforma integrada de comercialização de contratos de energia e gestão de backoffice. O projeto criou um ambiente eletrônico de contratação bilateral no Mercado de Balcão Organizado, com potencial de reduzir backoffice e riscos financeiros. Aumenta a confiança entre as partes, diminui a informalidade dos contratos e a inadimplência na execução, e cria um ambiente mais seguro para o crescimento do mercado livre, em linha com o PLS 232/2016. Prazo: 16 meses, com início em junho de 2020.",
      },
      {
        desc: "Projeto de P&D ANEEL PD-00068-0056/2022 com a ISA CTEEP, transmissora de energia.",
        context: "Projeto de P&D ANEEL PD-00068-0056/2022 com a ISA CTEEP, conduzido como parte do trabalho construído na Fohat.",
      },
      {
        desc: "Interliga SP (P272.5): projeto de P&D com a Comgás para integrar as distribuidoras de gás natural do estado de São Paulo.",
        context: "O Interliga SP (projeto P272.5) foi um projeto de P&D com a Comgás, conduzido como parte do trabalho construído na Fohat. O objetivo era integrar as distribuidoras de gás natural do estado de São Paulo, por meio de um estudo de viabilidade para a interligação dos sistemas de distribuição.",
      },
      {
        desc: "Membro do Board of Advisors da OSINOVA, fundo de venture capital corporativo focado em mobilidade, smart cities e ag-tech.",
        context: "Fui membro do Board of Advisors da OSINOVA, fundo de venture capital corporativo focado em mobilidade, smart cities e ag-tech, unindo a experiência do mercado corporativo tradicional e a de startups.",
      },
      {
        desc: "União dos pilares Corporativo × Investimentos × Inovação.",
        context: "• Corporativo: grandes corporações, onde aprendi engenharia em escala na Volvo — qualidade, confiabilidade e disciplina de processo.\n• Investimentos: avaliação de empresas do portfólio da OSINOVA, fundo de venture capital corporativo.\n• Inovação: startups, onde liderei desenvolvimento de produto e software do zero à produção em mercados regulados.\nEssa combinação me permite enxergar um negócio ao mesmo tempo da bancada de engenharia, do roadmap de produto e da mesa do investidor. Agora estou aberto a levá-la para um papel onde posso ter impacto imediato e mensurável.",
      },
    ],
  },
} as const;
