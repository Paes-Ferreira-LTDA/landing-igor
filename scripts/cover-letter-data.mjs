/**
 * Fonte da verdade da Cover Letter (EN/PT).
 * Edite `company`/`role` para personalizar por vaga (vazio = versão genérica),
 * ajuste os parágrafos se quiser, e rode `npm run letter` para regenerar os PDFs.
 */

export const letter = {
  en: {
    // Preencha por vaga, ex.: company: "Acme", role: "Product Manager".
    company: "",
    role: "",
    headerRole: "Product Manager · Tech Lead",
    salutation: "Dear Hiring Team,",
    paragraphs: [
      "I'm a Product Manager and Tech Lead with 19 years of multidisciplinary experience, bridging engineering and software product development — and that combination is exactly what I'd bring to {company}.",
      "I started as an engineer at Volvo: designing electrical wiring harnesses and vehicle systems at Volvo Bus, then leading quality engineering and field reliability on engine platforms at Volvo Group Trucks Technology — containing safety-critical failures and reporting results directly to directors and VPs.",
      "I carried that technical rigor into software by founding Fohat, where I built eTradeflow, a regulated trading platform for Brazil's energy sector, and ran two ANEEL R&D (P&D) projects from kickoff to delivery.",
      "Today I'm Product Manager and Tech Lead for eXmesh, a multi-agent AI system I specify and architect — combining product strategy, technical architecture (LangGraph, RAG, MCP) and end-to-end execution, always with governance and a human in the loop.",
      "I would welcome the chance to discuss how this combination of engineering, product and technical execution can contribute to {company}.",
    ],
    closing: "Best regards,",
    genericCompany: "your company",
    fileSuffix: "en",
  },
  pt: {
    company: "",
    role: "",
    headerRole: "Product Manager · Tech Lead",
    salutation: "Prezado(a) recrutador(a),",
    paragraphs: [
      "Sou Product Manager e Tech Lead com 19 anos de experiência multidisciplinar, unindo engenharia e desenvolvimento de produtos de software — e é exatamente essa combinação que posso trazer para {company}.",
      "Comecei como engenheiro na Volvo: projetei chicotes elétricos e sistemas veiculares na Volvo Bus, depois conduzi engenharia de qualidade e confiabilidade de campo em plataformas de motores na Volvo Group Trucks Technology — contendo falhas críticas de segurança e reportando resultados diretamente a diretores e vice-presidentes.",
      "Levei esse rigor técnico para o software ao fundar a Fohat, onde construí a eTradeflow, uma plataforma de trading regulamentada para o setor de energia do Brasil, e conduzi dois projetos de P&D ANEEL do início à entrega.",
      "Hoje sou Product Manager e Tech Lead do eXmesh, um sistema multiagente de inteligência artificial que especifico e arquiteto — combinando estratégia de produto, arquitetura técnica (LangGraph, RAG, MCP) e execução end-to-end, sempre com governança e humano no circuito.",
      "Terei prazer em conversar sobre como essa combinação de engenharia, produto e execução técnica pode contribuir para {company}.",
    ],
    closing: "Atenciosamente,",
    genericCompany: "sua empresa",
    fileSuffix: "pt",
  },
};
