"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { AISystemsDiagram } from "./AISystemsDiagram";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";

const SwarmCanvas = dynamic(
  () => import("./SwarmCanvas").then(m => ({ default: m.SwarmCanvas })),
  { ssr: false }
);

const agentsBase = [
  { name: "MUTHUR",               tags: ["Claude", "Cloud Run", "GCS", "Vertex Search"],                    icon: "◎" },
  { name: "Bishop",               tags: ["LangGraph", "Claude · Vertex AI", "PostgreSQL HITL", "Langfuse"], icon: "◈" },
  { name: "Walter",               tags: ["LangGraph", "Dual-model", "Bitbucket API", "Cloud Run Jobs"],     icon: "◆" },
  { name: "Synthetic Workers ×4", tags: ["Claude Agent SDK", "Cloud Run", "GCS", "GKE"],                    icon: "◇" },
];

const platformsBase = [
  { name: "eXmesh",       stack: "Claude SDK · LangGraph · GKE · Redis Streams", screenshot: "/eXmesh.png",     logo: "/exmesh-logo-tagline-800.png"  },
  { name: "eFlowing CRM", stack: "NestJS · Next.js · GraphQL · Cloud SQL (GCP)",   screenshot: "/eFlowing.png",   logo: "/eflowing-logo-tagline.png"    },
  { name: "eTradeflow",   stack: "React · WebSockets · Ant Design · Django",       screenshot: "/eTradeflow.png", logo: "/etradeflow-logo-tagline.png"  },
];

export function AIProjects() {
  const { lang } = useLanguage();
  const tx = t[lang].projects;
  const [lightbox, setLightbox] = useState<number | null>(null);

  const agents = agentsBase.map((base, i) => ({
    ...base,
    subtitle: t[lang].agents[i].subtitle,
    desc: t[lang].agents[i].desc,
    milestone: (t[lang].agents[i] as { milestone?: string }).milestone,
  }));

  const platforms = platformsBase.map((base, i) => ({
    ...base,
    desc: t[lang].platforms[i].desc,
  }));

  // Fechar lightbox com Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setLightbox(null);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const active = lightbox !== null ? platforms[lightbox] : null;

  return (
    <section id="projects" className="bg-[var(--color-surface)] py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* AI Agents */}
        <div className="mb-16 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-400)]">
            {tx.eyebrow}
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {tx.title}
          </h2>
          <p className="mt-4 text-white/50">{tx.subtitle}</p>
        </div>

        {/* Swarm visualization */}
        <div className="mb-12">
          <SwarmCanvas height={400} />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {agents.map((agent) => (
            <div
              key={agent.name}
              className="relative overflow-hidden rounded-2xl border border-white/8 bg-[var(--color-navy)] p-6 transition hover:border-[var(--color-brand)]/20"
            >
              {agent.milestone && (
                <div className="absolute top-4 right-4 rounded-full border border-[var(--color-gold)]/30 bg-[var(--color-gold)]/10 px-2.5 py-1 text-[10px] font-medium text-[var(--color-gold)]">
                  🏆 {agent.milestone}
                </div>
              )}
              <div className="flex items-start gap-4">
                <span className="flex-shrink-0 text-2xl text-[var(--color-brand)]">{agent.icon}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="font-bold text-white">{agent.name}</h3>
                    <span className="text-xs text-[var(--color-brand-400)]">{agent.subtitle}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">{agent.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {agent.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/8 bg-white/4 px-2.5 py-0.5 text-xs text-white/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture Diagram */}
        <div className="mt-16 text-center">
          <h3 className="mb-3 text-xl font-bold tracking-tight text-white sm:text-2xl">
            {tx.diagramTitle}
          </h3>
          <p className="mb-8 text-sm text-white/50 max-w-2xl mx-auto">{tx.diagramDesc}</p>
          <AISystemsDiagram />
          <p className="mt-3 text-xs text-white/30 md:hidden">{tx.diagramScrollHint}</p>
        </div>

        {/* Platforms */}
        <div className="mt-20">
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {tx.platformsTitle}
            </h3>
            <p className="mt-2 text-sm text-white/40">{tx.platformsSubtitle}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {platforms.map((p, i) => (
              <button
                key={p.name}
                onClick={() => setLightbox(i)}
                className="group overflow-hidden rounded-2xl border border-[var(--color-brand)]/20 bg-[var(--color-navy-800)] text-left shadow-lg shadow-black/30 transition hover:border-[var(--color-brand)]/50 hover:shadow-[var(--color-brand)]/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand)]"
              >
                {/* Accent bar */}
                <div className="h-0.5 w-full bg-gradient-to-r from-[var(--color-brand)] via-[var(--color-brand-400)] to-transparent" />
                {/* Screenshot — aspect ratio matches real screens (2542×1018 ≈ 5:2) */}
                <div className="relative overflow-hidden bg-[#0B0E14]" style={{ aspectRatio: "5/2" }}>
                  <Image
                    src={p.screenshot}
                    alt={p.name}
                    fill
                    className="object-contain object-top transition duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 400px"
                  />
                  {/* Expand hint */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/20">
                    <span className="scale-0 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition duration-300 group-hover:scale-100">
                      {tx.expandHint}
                    </span>
                  </div>
                </div>
                {/* Logo strip */}
                <div className="flex items-center border-y border-white/5 bg-white px-5 py-4">
                  <div className="relative h-10 w-64">
                    <Image
                      src={p.logo}
                      alt={`${p.name} logo`}
                      fill
                      className="object-contain object-left"
                      sizes="256px"
                    />
                  </div>
                </div>
                {/* Info */}
                <div className="p-5">
                  <p className="text-sm leading-relaxed text-white/55">{p.desc}</p>
                  <p className="mt-3 font-mono text-[10px] text-[var(--color-brand-400)]/70">{p.stack}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
          onClick={() => setLightbox(null)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Panel */}
          <div
            className="relative z-10 w-full max-w-5xl overflow-hidden rounded-2xl border border-white/10 bg-[var(--color-navy)] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setLightbox(null)}
              className="absolute right-4 top-4 z-10 rounded-full bg-black/40 p-2 text-white/60 backdrop-blur-sm transition hover:text-white"
              aria-label="Fechar"
            >
              ✕
            </button>

            {/* Full screenshot — object-contain mostra a imagem inteira sem corte */}
            <div className="relative w-full bg-[#0B0E14]" style={{ aspectRatio: "5/2" }}>
              <Image
                src={active.screenshot}
                alt={active.name}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Logo + info bar */}
            <div className="flex flex-col gap-3 border-t border-white/5 bg-white/5 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative h-12 w-72 flex-shrink-0 rounded bg-white px-3 py-1">
                <Image
                  src={active.logo}
                  alt={`${active.name} logo`}
                  fill
                  className="object-contain object-left p-1"
                  sizes="288px"
                />
              </div>
              <div className="flex flex-col gap-1 sm:items-end">
                <p className="text-xs leading-relaxed text-white/50">{active.desc}</p>
                <p className="font-mono text-[10px] text-[var(--color-brand-400)]/70">{active.stack}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
