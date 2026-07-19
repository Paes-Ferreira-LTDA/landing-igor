/**
 * Fonte da verdade da Cover Letter (EN/PT).
 * Edite `company`/`role` para personalizar por vaga (vazio = versão genérica),
 * ajuste os parágrafos se quiser, e rode `npm run letter` para regenerar os PDFs.
 */

export const letter = {
  en: {
    // Preencha por vaga, ex.: company: "Acme", role: "AI Product Manager".
    company: "",
    role: "",
    salutation: "Dear Hiring Team,",
    paragraphs: [
      "My focus today is one thing: making companies AI First. Not by adding a chatbot to a website, but by redesigning how a company operates when AI agents become part of the team — and that is exactly the experience I would bring to {company}.",
      "Over the last two years I shipped eXmesh to production: a mesh of generative-AI agents running autonomously and in coordination on Google Cloud. A central agent (MUTHUR) receives any demand and distributes work with no human intermediary; a strategist agent (Bishop) holds the organizational memory and detects drift before it becomes a problem; an executor agent (Walter) runs engineering end-to-end and was the first to autonomously merge code into production; specialized sub-swarms cover each business area. I specify, architect and govern — the agents execute.",
      "The most valuable lesson was not technical: autonomy without governance does not scale. Every agent action passes through a Governance Gateway that validates OKRs, mandates and decisions, with a human in the loop. I come from Brazil's regulated energy market (ANEEL/CCEE), where translating business challenges into auditable technical solutions is daily work.",
      "Behind this sit 19 years of building products end-to-end: 7 years at Volvo growing from engineer to product leadership, 8 years founding and operating B2B platforms (Beenx, eTradeflow, eFlowing), and three terms on an innovation advisory board. I combine product vision, an engineer's analytical depth and a founder's business sense — from discovery and strategy to code running in production.",
      "I would welcome the chance to discuss how this experience can accelerate {company}'s AI journey.",
    ],
    closing: "Best regards,",
    genericCompany: "your company",
    fileSuffix: "en",
  },
  pt: {
    company: "",
    role: "",
    salutation: "Prezado(a) recrutador(a),",
    paragraphs: [
      "Meu foco hoje é um só: tornar empresas AI First. Não adicionando um chatbot ao site, mas redesenhando como a empresa opera quando agentes de IA passam a fazer parte do time — e é exatamente essa experiência que posso trazer para {company}.",
      "Nos últimos dois anos coloquei em produção o eXmesh: uma malha de agentes de IA generativa rodando de forma autônoma e coordenada no Google Cloud. Um agente central (MUTHUR) recebe qualquer demanda e distribui o trabalho sem intermediário humano; um agente estrategista (Bishop) guarda a memória organizacional e detecta desvios antes que virem problema; um agente executor (Walter) realiza engenharia de ponta a ponta e foi o primeiro a fazer merge autônomo de código em produção; sub-swarms especializados cobrem cada área de negócio. Eu especifico, arquiteto e governo — os agentes executam.",
      "O aprendizado mais valioso não foi técnico: autonomia sem governança não escala. Cada ação dos agentes passa por um Governance Gateway que valida OKRs, mandatos e decisões, com humano no circuito. Venho do mercado regulado de energia (ANEEL/CCEE), onde traduzir desafios de negócio em soluções técnicas auditáveis é trabalho do dia a dia.",
      "Por trás disso há 19 anos desenvolvendo produtos de ponta a ponta: 7 anos na Volvo, de engenheiro a liderança de produto; 8 anos fundando e operando plataformas B2B (Beenx, eTradeflow, eFlowing); e três mandatos em conselho de inovação. Uno visão de produto, capacidade analítica de engenheiro e visão de negócios de founder — da descoberta e estratégia ao código rodando em produção.",
      "Terei prazer em conversar sobre como essa experiência pode acelerar a jornada de IA de {company}.",
    ],
    closing: "Atenciosamente,",
    genericCompany: "sua empresa",
    fileSuffix: "pt",
  },
};
