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
        period: "2022 — 2024",
        title: "Innovation Board Advisor",
        org: "OSINOVA Participações",
        bullets: [
          "Member of the Board of Advisors: corporate governance and product strategy advisory, combining traditional-corporate and startup market experience.",
        ],
      },
      {
        period: "2018 — present",
        title: "Product Manager · Tech Lead",
        org: "Fohat",
        bullets: [
          "(2018–present) Owned product vision, roadmap and portfolio strategy for Fohat's B2B platforms in the energy market, since the company's founding.",
          "(2020–2022 · eTradeflow) Led the build of eTradeflow, a trading environment with Broker and Home Broker terminals — real-time pricing, integrated contracts and compliance — and ran two ANEEL R&D (P&D) projects from kickoff to delivery, one for the Home Broker and one for the Terminal Broker.",
          "(2024–present · eXmesh) Lead product strategy and architecture for a generative multi-agent AI system in production for the energy sector — autonomous agents via LangGraph, MCP interoperability, a RAG pipeline and Langfuse observability with human-in-the-loop governance by OKRs — end-to-end owner of prioritization, AI architecture decisions and infrastructure trade-offs (GCP: GKE, Vertex AI).",
        ],
      },
      {
        period: "2014 — 2017",
        title: "Quality Engineer · Q&CS",
        org: "Volvo Group Trucks Technology (GTT)",
        bullets: [
          "Centralized critical field complaints, dealer reports (DQRs) and chronic failures in the ARGUS platform, opening and driving QJs (Quality Journey) — tracking each case from field containment through root-cause closure.",
          "Applied problem-solving methodologies (8D, Ishikawa, 5 Whys, FTA) to contain and root-cause field failures on the D7E, DH12E and D11R engine platforms.",
          "Used FMEA/DFMEA/PFMEA, SPC (statistical process control) and Weibull reliability analysis in SAS for failure prediction, within IATF 16949, APQP and PPAP processes for technical change management and component release.",
          "Monitored fleet operator and dealer complaints through Volvo's warranty systems, defining fleet containment actions (service campaigns and recalls) for safety or high-financial-impact failures, working with metallurgy, metrology and electronics labs.",
          "Acted as the technical focal point between Latin America aftersales and engineering centers in Sweden, France and the US, translating complex technical issues into executive reports for directors and VPs.",
        ],
      },
      {
        period: "2010 — 2014",
        title: "Product Development Engineer",
        org: "Volvo Bus",
        bullets: [
          "Managed variants and product structure in Volvo Kola — part numbers, engineering drawing release and electrical variant restriction rules — for Volvo Bus portfolio modularity.",
          "Developed and validated functional circuit diagrams in Synopsys Saber (voltage drop, current capacity, wire-gauge-to-fuse/relay coordination) and ran electrical harness tests with CANalyzer.",
          "Modeled 3D harness routing in Catia V5 (EHI module) along the chassis — bend radius, high-temperature zones and dynamic articulation areas — interfacing with structural and powertrain designers to ensure robustness against water ingress, chafing short-circuits and flex fatigue.",
          "Adapted the multiplexed cabin/chassis electrical architecture across the full Volvo Bus portfolio (urban, coach, articulated and bi-articulated, front- or rear-engine) and took part in Design Reviews with the Sweden headquarters and build-to-print validation with global harness suppliers (APQP/PPAP) for new components and Wiring Standards.",
          "Completed specialized technical training in electronic braking (EBS) and suspension (ECS) systems for heavy vehicles, deepening expertise in advanced vehicle engineering.",
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
        period: "2022 — 2024",
        title: "Conselheiro de Inovação",
        org: "OSINOVA Participações",
        bullets: [
          "Membro do Board of Advisors: assessoria de governança corporativa e estratégia de produto, unindo experiência de mercado corporativo tradicional e de startups.",
        ],
      },
      {
        period: "2018 — presente",
        title: "Product Manager · Tech Lead",
        org: "Fohat",
        bullets: [
          "(2018–presente) Responsável pela visão de produto, roadmap e estratégia de portfólio das plataformas B2B da Fohat no mercado de energia, desde a concepção da empresa.",
          "(2020–2022 · eTradeflow) Liderei a construção da eTradeflow, ambiente de trading com Terminal Broker e Home Broker — precificação em tempo real, contratos e compliance integrados —, e conduzi dois projetos de P&D ANEEL do início à entrega, um para o Home Broker e outro para o Terminal Broker.",
          "(2024–presente · eXmesh) Lidero a estratégia de produto e a arquitetura de um sistema multiagente de IA generativa em produção para o setor de energia — agentes autônomos via LangGraph, interoperabilidade via MCP, pipeline de RAG e observabilidade com Langfuse com governança por OKRs e human-in-the-loop —, responsável end-to-end por priorização, decisões de arquitetura de IA e trade-offs de infraestrutura (GCP: GKE, Vertex AI).",
        ],
      },
      {
        period: "2014 — 2017",
        title: "Engenheiro de Qualidade · Q&CS",
        org: "Volvo Group Trucks Technology (GTT)",
        bullets: [
          "Centralizei reclamações críticas de campo, relatórios de concessionárias (DQRs) e falhas crônicas na plataforma ARGUS, abrindo e conduzindo QJs (Quality Journey) — do rastreamento e contenção em campo até o encerramento do caso pela causa-raiz.",
          "Apliquei metodologias de solução de problemas (8D, Ishikawa, 5 Porquês, FTA) para conter e investigar a causa-raiz de falhas de campo nas plataformas de motores D7E, DH12E e D11R.",
          "Utilizei FMEA/DFMEA/PFMEA, CEP (controle estatístico de processo) e análise de Weibull em SAS para previsão de falhas, dentro dos processos de IATF 16949, APQP e PPAP para gestão de mudanças técnicas e liberação de componentes.",
          "Monitorei reclamações de frotistas e concessionárias via sistemas de garantia da Volvo, definindo ações de contenção de frota (campanhas de serviço e recalls) em falhas de segurança ou alto impacto financeiro, com apoio de laboratórios de metalurgia, metrologia e eletrônica.",
          "Atuei como ponto focal técnico entre o pós-vendas da América Latina e os centros de engenharia na Suécia, França e EUA, traduzindo problemas técnicos complexos em relatórios executivos para diretores e vice-presidentes.",
        ],
      },
      {
        period: "2010 — 2014",
        title: "Engenheiro de Desenvolvimento de Produto",
        org: "Volvo Bus",
        bullets: [
          "Gerenciei variantes e estrutura de produto no Volvo Kola — part numbers, liberação de desenhos de engenharia e regras de restrição de variantes elétricas — para a modularidade do portfólio Volvo Bus.",
          "Desenvolvi e validei diagramas funcionais de circuitos elétricos no Synopsys Saber (queda de tensão, capacidade de corrente, coordenação bitola de cabo x fusível/relé) e conduzi testes de chicotes elétricos com CANalyzer.",
          "Modelei o roteamento 3D de chicotes no Catia V5 (módulo EHI) ao longo do chassi — raios de curvatura, zonas de alta temperatura e áreas de articulação dinâmica —, em interface com projetistas de estrutura e trem de força, garantindo robustez contra infiltração de água, curto por atrito e fadiga de flexão.",
          "Adaptei a arquitetura elétrica multiplexada da cabine/chassi para toda a variedade do portfólio Volvo Bus (urbanos, rodoviários, articulados e biarticulados, motor dianteiro ou traseiro) e participei de Design Reviews com a matriz na Suécia e de validação build-to-print com fornecedores globais de chicotes (APQP/PPAP) para novos componentes e Wiring Standards.",
          "Formação técnica especializada em sistemas eletrônicos de freio (EBS) e suspensão (ECS) para veículos pesados, aprofundando o domínio em engenharia veicular avançada.",
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
