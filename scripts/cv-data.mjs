/**
 * Fonte da verdade do CV (EN/PT).
 * Edite aqui e rode `npm run cv` para regenerar os PDFs em public/.
 */

export const shared = {
  name: "Igor Ferreira",
  email: "igor.ferreira@fohat.com.br",
  linkedin: "linkedin.com/in/figor",
  site: "paesferreira.com.br",
};

export const cv = {
  en: {
    role: "Product Manager",
    location: "Curitiba, Brazil · Hybrid / On-site",
    summaryTitle: "Summary",
    summary:
      "Product Manager with 19 years of experience building products end-to-end — from industrial engineering at Volvo to founding and leading my own technology company (Fohat). Consistent track record of driving products from strategy to production: I led the development of a regulated trading platform for the energy sector, ran two ANEEL R&D (P&D) projects from kickoff to delivery, and currently lead the strategy and roadmap for a multi-agent AI system in production. I combine business vision, engineering rigor and technical execution.",
    experienceTitle: "Experience",
    experience: [
      {
        period: "2024 — present",
        title: "Product Manager · Tech Lead",
        org: "eXmesh · Fohat",
        bullets: [
          "I lead product strategy and architecture for a generative multi-agent AI system in production for the energy sector, with autonomous agents orchestrated via LangGraph and interoperability through MCP (Model Context Protocol).",
          "Built the RAG (Retrieval Augmented Generation) pipeline powering the agents' knowledge base, including context curation and prompt engineering for specialized tasks.",
          "Implemented observability and monitoring for LLMs and agents (Langfuse), covering tracing and response quality, with a human-in-the-loop (HITL) layer in the system's governance.",
          "Defined the product's governance model based on OKRs, with an orchestrator agent responsible for routing and prioritizing demands — one of the agents was the first in the operation to autonomously merge a PR in production.",
          "End-to-end owner of prioritization, AI architecture decisions and infrastructure trade-offs (GCP: GKE, Vertex AI), with a consultative role presenting results to stakeholders and the company's advisory board.",
        ],
      },
      {
        period: "2022 — 2024",
        title: "Innovation Board Advisor",
        org: "OSINOVA Participações",
        bullets: [
          "Member of the Board of Advisors: corporate governance and product strategy advisory, combining traditional-corporate and startup market experience.",
        ],
      },
      {
        period: "2020 — 2022",
        title: "Product Lead",
        org: "eTradeflow · Fohat",
        bullets: [
          "Led the build of eTradeflow, a trading environment with Broker and Home Broker terminals: real-time pricing, integrated contracts and compliance.",
          "Ran two ANEEL R&D (P&D) projects from kickoff to delivery — one for the Home Broker and one for the Terminal Broker — including regulatory scope management and reporting to the agency.",
        ],
      },
      {
        period: "2018 — present",
        title: "Product Manager",
        org: "Fohat",
        bullets: [
          "Owned product vision, roadmap and portfolio strategy for Fohat's B2B platforms in the energy market, since the company's founding.",
        ],
      },
      {
        period: "2010 — 2017",
        title: "Engineer → Product Leader",
        org: "Volvo do Brasil",
        bullets: [
          "7 years growing from engineering to product leadership in one of Brazil's most demanding industrial environments, within the brand's global industrial system.",
        ],
      },
      {
        period: "2007",
        title: "R&D Internship (Stuttgart) · International Internship (China)",
        org: "Bosch",
        bullets: [
          "Systems engineering in Bosch's R&D labs in Stuttgart; industrial automation at scale in China.",
        ],
      },
    ],
    skillsTitle: "Skills",
    skills: [
      { group: "AI / Agents", items: "Multi-agent systems · LangGraph · RAG · MCP (Model Context Protocol) · HITL · Prompt Engineering · Claude (Anthropic) · Claude Agent SDK · Vertex AI · Langfuse (observability)" },
      { group: "Cloud / Infra", items: "GCP (GKE, Cloud Run, Cloud SQL, GCS) · Kubernetes · ArgoCD (GitOps) · Redis / Memorystore" },
      { group: "Software", items: "Python · TypeScript · Next.js · NestJS · GraphQL · Django · React · PostgreSQL · WebSockets" },
      { group: "Product", items: "Product Discovery · Roadmapping · Prioritization · OKRs · Stakeholder Management · Regulatory Governance (ANEEL/CCEE)" },
      { group: "Domain", items: "Energy trading (ETRM) · Brazil's free energy market · Renewable energy & microgrids" },
    ],
    educationTitle: "Education",
    education: [
      "B.Sc. Industrial Electrical Engineering, Electrotechnics — UTFPR (Federal University of Technology – Paraná), 2011",
      "Postgraduate Specialization in Renewable Energy (360h) — UTFPR, 2016–2017 · Capstone: microgrids as integration of distributed photovoltaic generation",
      "MBA, Brazilian Electric Sector — ISAE/FGV (FGV Management), 2016–2018 · coursework and capstone (TCC) completed; program not concluded",
      "Innovation Board Member Certification — Gonew.Community, 2021–2022",
    ],
    languagesTitle: "Languages",
    languages: "Portuguese (native) · English (fluent) · Spanish (professional) · German (basic)",
    footer: "Generated from paesferreira.com.br",
    fileSuffix: "en",
  },
  pt: {
    role: "Product Manager",
    location: "Curitiba, PR · Híbrido / Presencial",
    summaryTitle: "Resumo",
    summary:
      "Product Manager com 19 anos de experiência na construção de produtos de ponta a ponta — da engenharia industrial na Volvo à fundação e liderança de uma empresa de tecnologia própria (Fohat). Histórico consistente de condução de produtos da estratégia à produção: liderei o desenvolvimento de uma plataforma de trading regulamentada para o setor de energia, conduzi dois projetos de P&D ANEEL do início à entrega e, atualmente, lidero a estratégia e o roadmap de um sistema multiagente de inteligência artificial em produção. Combino visão de negócio, rigor de engenharia e execução técnica.",
    experienceTitle: "Experiência",
    experience: [
      {
        period: "2024 — presente",
        title: "Product Manager · Tech Lead",
        org: "eXmesh · Fohat",
        bullets: [
          "Lidero a estratégia de produto e a arquitetura de um sistema multiagente de IA generativa em produção para o setor de energia, com agentes autônomos orquestrados via LangGraph e interoperabilidade via MCP (Model Context Protocol).",
          "Estruturei o pipeline de RAG (Retrieval Augmented Generation) que sustenta a base de conhecimento dos agentes, incluindo curadoria de contexto e engenharia de prompt para tarefas especializadas.",
          "Implementei observabilidade e monitoramento de LLMs e agentes (Langfuse), cobrindo tracing e qualidade de resposta, com camada de human-in-the-loop (HITL) na governança do sistema.",
          "Defini o modelo de governança do produto baseado em OKRs, com um agente orquestrador responsável por rotear e priorizar demandas — um dos agentes foi o primeiro, na operação, a executar de forma autônoma o merge de um PR em produção.",
          "Responsável end-to-end por priorização, decisões de arquitetura de IA e trade-offs de infraestrutura (GCP: GKE, Vertex AI), com atuação consultiva na apresentação de resultados a stakeholders e ao conselho consultivo da empresa.",
        ],
      },
      {
        period: "2022 — 2024",
        title: "Conselheiro de Inovação",
        org: "OSINOVA Participações",
        bullets: [
          "Membro do Board of Advisors: assessoria de governança corporativa e estratégia de produto, unindo experiência de mercado corporativo tradicional e de startups.",
        ],
      },
      {
        period: "2020 — 2022",
        title: "Product Lead",
        org: "eTradeflow · Fohat",
        bullets: [
          "Liderei a construção da eTradeflow, ambiente de trading com Terminal Broker e Home Broker: precificação em tempo real, contratos e compliance integrados.",
          "Conduzi dois projetos de P&D ANEEL do início à entrega — um para o Home Broker e outro para o Terminal Broker —, incluindo gestão de escopo regulatório e prestação de contas à agência.",
        ],
      },
      {
        period: "2018 — presente",
        title: "Product Manager",
        org: "Fohat",
        bullets: [
          "Responsável pela visão de produto, roadmap e estratégia de portfólio das plataformas B2B da Fohat no mercado de energia, desde a concepção da empresa.",
        ],
      },
      {
        period: "2010 — 2017",
        title: "Engenheiro → Líder de Produto",
        org: "Volvo do Brasil",
        bullets: [
          "7 anos evoluindo de engenharia a liderança de produto em um dos ambientes industriais mais exigentes do Brasil, dentro do sistema industrial global da marca.",
        ],
      },
      {
        period: "2007",
        title: "Estágio em P&D (Stuttgart) · Estágio Internacional (China)",
        org: "Bosch",
        bullets: [
          "Engenharia de sistemas nos laboratórios de P&D da Bosch em Stuttgart; automação industrial em escala na China.",
        ],
      },
    ],
    skillsTitle: "Competências",
    skills: [
      { group: "IA / Agentes", items: "Multi-agent systems · LangGraph · RAG · MCP (Model Context Protocol) · HITL · Prompt Engineering · Claude (Anthropic) · Claude Agent SDK · Vertex AI · Langfuse (observabilidade)" },
      { group: "Cloud / Infra", items: "GCP (GKE, Cloud Run, Cloud SQL, GCS) · Kubernetes · ArgoCD (GitOps) · Redis / Memorystore" },
      { group: "Software", items: "Python · TypeScript · Next.js · NestJS · GraphQL · Django · React · PostgreSQL · WebSockets" },
      { group: "Produto", items: "Product Discovery · Roadmapping · Priorização · OKRs · Gestão de Stakeholders · Governança Regulatória (ANEEL/CCEE)" },
      { group: "Domínio", items: "Energy trading (ETRM) · Mercado Livre de Energia · Renewable energy & microgrids" },
    ],
    educationTitle: "Formação",
    education: [
      "Bacharelado em Engenharia Industrial Elétrica, ênfase Eletrotécnica — UTFPR (Universidade Tecnológica Federal do Paraná), 2011",
      "Especialização em Energias Renováveis (360h) — UTFPR, 2016–2017 · TCC: Microgrids como forma de integração da geração distribuída fotovoltaica",
      "MBA do Setor Elétrico — ISAE/FGV (FGV Management), 2016–2018 · disciplinas e TCC concluídos; programa não finalizado",
      "Certificação para Conselheiro de Inovação — Gonew.Community, 2021–2022",
    ],
    languagesTitle: "Idiomas",
    languages: "Português (nativo) · Inglês (fluente) · Espanhol (profissional) · Alemão (básico)",
    footer: "Gerado a partir de paesferreira.com.br",
    fileSuffix: "pt",
  },
};
