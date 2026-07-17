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
    { group: "AI / Agents", items: "LangGraph · Claude (Anthropic) · Claude Agent SDK · Vertex AI · Langfuse · MCP · HITL" },
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
      "Passionate about product development and innovation, with an engineer's analytical depth and a founder's business sense. 19 years building products end-to-end across heavy industry and B2B software: 7 years at Volvo growing from engineer to product leader; 8 years founding and building B2B platforms in Brazil's regulated energy market; now shipping multi-agent AI products that run autonomously in production on GCP — from discovery and strategy to production code.",
    experienceTitle: "Experience",
    experience: [
      {
        period: "2024 — 2025",
        title: "AI Systems Builder",
        org: "Fohat eTech · eXmesh",
        bullets: [
          "Designed and shipped eXmesh, a multi-agent AI mesh in production on GCP: MUTHUR (chat-activated orchestrator), Bishop (strategy-ops: reads ADRs/BRS/SPECs, detects architectural drift), Walter (surgical executor) and 4 Synthetic Workers (headless infra monitors, one per squad).",
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
        period: "2018 — 2023",
        title: "Founder · Platform Builder",
        org: "Beenx · eTradeflow · eFlowing (Fohat group)",
        bullets: [
          "Built energy marketplace, ETRM trading terminal (eTradeflow), agentic CRM for free-energy-market migration (eFlowing) and blockchain settlement — from zero to production, used by real energy trading companies.",
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
      "MBA, Brazilian Electric Sector — ISAE/FGV (FGV Management), started 2016 · coursework and capstone (TCC) completed; program not concluded",
    ],
    languagesTitle: "Languages",
    languages: "Portuguese (native) · English (fluent)",
    footer: "Generated from paesferreira.com.br",
    fileSuffix: "en",
  },
  pt: {
    role: "AI Product Manager · Technical Product Manager",
    location: "Brasil · Remoto / Híbrido · Aberto a internacional",
    summaryTitle: "Resumo",
    summary:
      "Apaixonado por desenvolvimento de produtos e inovação, com a capacidade analítica de engenheiro e a visão de negócios de founder. 19 anos construindo produtos de ponta a ponta entre indústria pesada e software B2B: 7 anos na Volvo, de engenheiro a liderança de produto; 8 anos fundando e construindo plataformas B2B no mercado regulado de energia do Brasil; hoje colocando em produção produtos multi-agentes de AI rodando autonomamente no GCP — da descoberta e estratégia ao código em produção.",
    experienceTitle: "Experiência",
    experience: [
      {
        period: "2024 — 2025",
        title: "AI Systems Builder",
        org: "Fohat eTech · eXmesh",
        bullets: [
          "Projetei e entreguei o eXmesh, malha multi-agentes de AI em produção no GCP: MUTHUR (orquestradora ativada por chat), Bishop (strategy-ops: lê ADRs/BRS/SPECs, detecta drift arquitetural), Walter (executor cirúrgico) e 4 Synthetic Workers (monitores de infra headless, um por squad).",
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
        period: "2018 — 2023",
        title: "Founder · Platform Builder",
        org: "Beenx · eTradeflow · eFlowing (grupo Fohat)",
        bullets: [
          "Construí marketplace de energia, terminal ETRM de trading (eTradeflow), CRM agêntico para migração ao Mercado Livre de Energia (eFlowing) e liquidação blockchain — do zero à produção, usados por comercializadoras reais.",
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
      "MBA do Setor Elétrico — ISAE/FGV (FGV Management), iniciado em 2016 · disciplinas e TCC concluídos; curso não finalizado",
    ],
    languagesTitle: "Idiomas",
    languages: "Português (nativo) · Inglês (fluente)",
    footer: "Gerado a partir de paesferreira.com.br",
    fileSuffix: "pt",
  },
};
