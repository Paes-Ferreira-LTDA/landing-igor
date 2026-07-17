/**
 * Fonte da verdade do CV (EN/PT).
 * Edite aqui e rode `npm run cv` para regenerar os PDFs em public/.
 */

export const shared = {
  name: "Igor Ferreira",
  email: "igor.ferreira@fohat.com.br",
  linkedin: "linkedin.com/in/figor",
  site: "paesferreira.com.br",
  skills: [
    { group: "AI / Agents", items: "Multi-agent systems · AI governance · LangGraph · Claude (Anthropic) · Claude Agent SDK · Vertex AI · RAG · Langfuse · MCP · HITL" },
    { group: "Cloud / Infra", items: "GCP (GKE, Cloud Run, Cloud SQL, GCS) · Kubernetes · ArgoCD (GitOps) · Redis / Memorystore" },
    { group: "Software", items: "Python · TypeScript · Next.js · NestJS · GraphQL · Django · React · PostgreSQL · WebSockets" },
    { group: "Domain", items: "Energy trading (ETRM) · Mercado Livre de Energia · ANEEL / CCEE compliance · Renewable energy & microgrids · Blockchain settlement" },
  ],
};

export const cv = {
  en: {
    role: "AI Product Manager · Technical Product Manager",
    location: "Brazil · Remote / Hybrid · Open to international",
    summaryTitle: "Summary",
    summary:
      "Passionate about product development and innovation, with an engineer's analytical depth and a founder's business sense. 19 years building products end-to-end across heavy industry and B2B software: 7 years at Volvo growing from engineer to product leader; 8 years founding and building B2B platforms in Brazil's regulated energy market; now shipping multi-agent AI products that run autonomously in production on GCP — from discovery and strategy to production code. My focus: making companies AI First.",
    experienceTitle: "Experience",
    experience: [
      {
        period: "2024 — present",
        title: "AI Product Manager · Tech Lead",
        org: "Fohat Corporation · eXmesh",
        bullets: [
          "I lead eXmesh, a multi-agent AI mesh in production on GCP — I specify, architect and govern; the agents execute: MUTHUR (orchestrator that distributes work with no human intermediary), Bishop (organizational memory: reads ADRs/BRS/SPECs, detects drift), Walter (end-to-end engineering executor) and specialized sub-swarms per business area.",
          "Walter performed the company's first fully autonomous PR merge in production — receives task openers, runs tests, opens PRs and self-declares ready for merge.",
          "Governance Gateway enforcing OKRs and Mandates on every agent dispatch, with human-in-the-loop preserved; observability with Langfuse; 6 MCP servers as in-cluster tool interface.",
        ],
      },
      {
        period: "2022 — 2024",
        title: "Innovation Board Advisor",
        org: "OSINOVA Participações",
        bullets: [
          "Member of the Board of Advisors: corporate governance and management advisory, bringing combined traditional-corporate and startup experience to guide company strategy.",
        ],
      },
      {
        period: "2018 — present",
        title: "Founder · Platform Builder",
        org: "Beenx · eTradeflow · eFlowing (Fohat group)",
        bullets: [
          "Built Beenx, Brazil's first digital one-stop-shop for the free energy market, with two products — eTradeflow (trading environment: Broker/Home Broker terminals, real-time pricing, integrated contracts and compliance) and eFlowing (commercial engine: pipeline, onboarding and migration tracking) — plus blockchain settlement; eXmesh agents now operate on top of both.",
          "Every feature shipped under ANEEL regulation and CCEE compliance, serving traders in Brazil's free energy market.",
        ],
      },
      {
        period: "2018",
        title: "Founder",
        org: "Fohat Corporation",
        bullets: [
          "Founded a holding to operate B2B platforms in regulated markets: energy, fintech, blockchain.",
        ],
      },
      {
        period: "2010 — 2017",
        title: "Engineer → Product Leader",
        org: "Volvo do Brasil",
        bullets: [
          "7 years in heavy industry, growing from engineering to product leadership in one of Brazil's most demanding environments.",
        ],
      },
      {
        period: "2007",
        title: "R&D Internship (Stuttgart) · International Internship (China)",
        org: "Bosch",
        bullets: [
          "Industrial automation at scale in China; systems engineering in Bosch's R&D labs in Stuttgart.",
        ],
      },
    ],
    skillsTitle: "Skills",
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
    role: "AI Product Manager · Technical Product Manager",
    location: "Brasil · Remoto / Híbrido · Aberto a internacional",
    summaryTitle: "Resumo",
    summary:
      "Apaixonado por desenvolvimento de produtos e inovação, com a capacidade analítica de engenheiro e a visão de negócios de founder. 19 anos construindo produtos de ponta a ponta entre indústria pesada e software B2B: 7 anos na Volvo, de engenheiro a liderança de produto; 8 anos fundando e construindo plataformas B2B no mercado regulado de energia do Brasil; hoje colocando em produção produtos multi-agentes de AI rodando autonomamente no GCP — da descoberta e estratégia ao código em produção. Meu foco: tornar empresas AI First.",
    experienceTitle: "Experiência",
    experience: [
      {
        period: "2024 — presente",
        title: "AI Product Manager · Tech Lead",
        org: "Fohat Corporation · eXmesh",
        bullets: [
          "Lidero o eXmesh, malha multi-agentes de AI em produção no GCP — eu especifico, arquiteto e governo; os agentes executam: MUTHUR (orquestradora que distribui trabalho sem intermediário humano), Bishop (memória organizacional: lê ADRs/BRS/SPECs, detecta drift), Walter (executor de engenharia de ponta a ponta) e sub-swarms especializados por área de negócio.",
          "Walter fez o primeiro merge de PR totalmente autônomo da empresa em produção — recebe task openers, roda testes, abre PRs e se declara pronto para merge.",
          "Governance Gateway garantindo OKRs e Mandates em cada dispatch de agente, com human-in-the-loop preservado; observabilidade com Langfuse; 6 MCP servers como interface de ferramentas in-cluster.",
        ],
      },
      {
        period: "2022 — 2024",
        title: "Conselheiro de Inovação",
        org: "OSINOVA Participações",
        bullets: [
          "Membro do Board of Advisors: consultoria de governança corporativa e de gestão, unindo vivência no mundo corporativo tradicional e na criação de startups para orientar a estratégia da empresa.",
        ],
      },
      {
        period: "2018 — presente",
        title: "Founder · Platform Builder",
        org: "Beenx · eTradeflow · eFlowing (grupo Fohat)",
        bullets: [
          "Construí a Beenx, primeira one-stop-shop digital do Mercado Livre de Energia no Brasil, com dois produtos — eTradeflow (ambiente de trading: Terminal Broker/Home Broker, precificação em tempo real, contratos e compliance integrados) e eFlowing (motor comercial: pipeline, onboarding e acompanhamento da migração) — além de liquidação blockchain; os agentes do eXmesh hoje operam sobre os dois.",
          "Cada feature entregue sob regulação da ANEEL e conformidade CCEE, atendendo traders do Mercado Livre de Energia.",
        ],
      },
      {
        period: "2018",
        title: "Founder",
        org: "Fohat Corporation",
        bullets: [
          "Fundei uma holding para operar plataformas B2B em mercados regulados: energia, fintech, blockchain.",
        ],
      },
      {
        period: "2010 — 2017",
        title: "Engenheiro → Liderança de Produto",
        org: "Volvo do Brasil",
        bullets: [
          "7 anos na indústria pesada, crescendo de engenharia a liderança de produto em um dos ambientes mais exigentes do Brasil.",
        ],
      },
      {
        period: "2007",
        title: "Estágio em P&D (Stuttgart) · Estágio Internacional (China)",
        org: "Bosch",
        bullets: [
          "Automação industrial em escala na China; engenharia de sistemas nos laboratórios de P&D da Bosch em Stuttgart.",
        ],
      },
    ],
    skillsTitle: "Competências",
    educationTitle: "Formação",
    education: [
      "Engenharia Industrial Elétrica, ênfase Eletrotécnica — UTFPR (Universidade Tecnológica Federal do Paraná), 2011",
      "Especialização em Energias Renováveis, pós-graduação lato sensu (360h) — UTFPR, 2016–2017 · TCC: Microgrids como forma de integração da geração distribuída fotovoltaica",
      "MBA do Setor Elétrico — ISAE/FGV (FGV Management), 2016–2018 · disciplinas e TCC concluídos; curso não finalizado",
      "Certificação para Conselheiro de Inovação — Gonew.Community, 2021–2022",
    ],
    languagesTitle: "Idiomas",
    languages: "Português (nativo) · Inglês (fluente) · Espanhol (profissional) · Alemão (básico)",
    footer: "Gerado a partir de paesferreira.com.br",
    fileSuffix: "pt",
  },
};
