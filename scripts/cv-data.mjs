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
      "Passionate about product research, development and innovation, with an engineer's analytical depth and a founder's business sense. 15 years building products end-to-end across heavy industry and B2B software: 7 years at Volvo growing from engineer to product leader; 8 years developing products through ANEEL R&D (P&D) projects. My current focus: making companies AI First through research and development.",
    experienceTitle: "Experience",
    experience: [
      {
        period: "2024 — present",
        title: "AI Product Manager · Tech Lead",
        org: "Fohat · eXmesh",
        bullets: [
          "I lead eXmesh, a multi-agent AI mesh for the energy sector.",
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
        period: "2020 — 2022",
        title: "Researcher · Platform Builder",
        org: "eTradeflow",
        bullets: [
          "Built eTradeflow, a trading environment with Broker and Home Broker terminals — real-time pricing, integrated contracts and compliance.",
          "Led an ANEEL R&D (P&D) project for the Home Broker and a separate ANEEL R&D (P&D) project for the Terminal Broker.",
        ],
      },
      {
        period: "2018 — present",
        title: "Founder",
        org: "Fohat",
        bullets: [
          "Founded a product research and development company to operate B2B platforms in the energy market.",
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
      "Apaixonado por pesquisa e desenvolvimento de produtos e inovação, com a capacidade analítica de engenheiro e a visão de negócios de fundador. 15 anos construindo produtos de ponta a ponta entre indústria pesada e software B2B: 7 anos na Volvo, de engenheiro a liderança de produto; 8 anos desenvolvendo produtos através de projetos de PeD ANEEL. Meu foco atual: tornar empresas AI First através de pesquisa e desenvolvimento.",
    experienceTitle: "Experiência",
    experience: [
      {
        period: "2024 — presente",
        title: "AI Product Manager · Tech Lead",
        org: "Fohat · eXmesh",
        bullets: [
          "Lidero o eXmesh, malha multi-agentes de AI para o setor de energia.",
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
        period: "2020 — 2022",
        title: "Pesquisador · Platform Builder",
        org: "eTradeflow",
        bullets: [
          "Construí a eTradeflow, ambiente de trading com Terminal Broker e Home Broker — precificação em tempo real, contratos e compliance integrados.",
          "Liderei um projeto de P&D ANEEL para o Home Broker e outro projeto de P&D ANEEL para o Terminal Broker.",
        ],
      },
      {
        period: "2018 — presente",
        title: "Fundador",
        org: "Fohat",
        bullets: [
          "Fundei uma empresa de pesquisa e desenvolvimento de produtos para operar plataformas B2B no mercado de energia.",
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
