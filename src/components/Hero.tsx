"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";
import { links } from "@/lib/links";

/* Cores = faixas do grafo da Jornada: corporativo (azul), investimentos (verde), inovação (dourado) */
const PILLAR_COLORS = ["#60A5FA", "#34D399", "#C9A227"];

function PillarsBlueprint({
  pillars,
  label,
  result,
  figure,
}: {
  pillars: readonly { name: string; tagline: string }[];
  label: string;
  result: string;
  figure: string;
}) {
  return (
    <figure className="mt-8 w-full max-w-xl text-left">
      <div className="grid grid-cols-3 gap-2">
        {pillars.map((p, i) => (
          <div
            key={p.name}
            className="relative rounded-md border border-dashed bg-[#0a1930]/70 p-3 backdrop-blur-sm"
            style={{ borderColor: `${PILLAR_COLORS[i]}66` }}
          >
            <span className="absolute -top-[3px] -left-[3px] h-1.5 w-1.5 rounded-full" style={{ background: PILLAR_COLORS[i] }} />
            <span className="absolute -top-[3px] -right-[3px] h-1.5 w-1.5 rounded-full" style={{ background: PILLAR_COLORS[i] }} />
            <span className="font-mono text-[9px] tracking-widest" style={{ color: PILLAR_COLORS[i] }}>
              {label} 0{i + 1}
            </span>
            <div className="mt-1 text-sm font-semibold text-white">{p.name}</div>
            <div className="mt-0.5 text-[11px] leading-snug text-white/50">{p.tagline}</div>
          </div>
        ))}
      </div>

      {/* Conectores convergindo no resultado */}
      <svg viewBox="0 0 300 48" className="h-12 w-full" fill="none" aria-hidden="true">
        {[50, 150, 250].map((x, i) => {
          const d = x === 150 ? "M 150 0 V 38" : `M ${x} 0 V 14 H 150 V 38`;
          return (
            <g key={x}>
              <path d={d} stroke={PILLAR_COLORS[i]} strokeOpacity="0.5" strokeWidth="1.5" />
              <path d={d} className="bp-flow" stroke={PILLAR_COLORS[i]} strokeWidth="2" strokeDasharray="4 30" strokeLinecap="round" />
            </g>
          );
        })}
        <circle cx="150" cy="40" r="4" fill="#0a1930" stroke="#60A5FA" strokeWidth="1.5" />
      </svg>

      <div className="mx-auto w-fit rounded-md border border-[var(--color-brand)]/40 bg-[var(--color-brand)]/10 px-4 py-2 text-center">
        <span className="font-mono text-xs tracking-wide text-[var(--color-brand-400)]">{result}</span>
      </div>
      <figcaption className="mt-3 text-center font-mono text-[9px] tracking-[0.2em] text-white/30">{figure}</figcaption>
    </figure>
  );
}

export function Hero() {
  const { lang } = useLanguage();
  const tx = t[lang].hero;

  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      {/* Glow blob */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-[var(--color-brand)] opacity-[0.06] blur-3xl" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 py-24 md:flex-row md:items-center md:gap-20 md:py-32">
        {/* Photo */}
        <div className="relative flex-shrink-0">
          <div className="relative h-80 w-60 overflow-hidden rounded-2xl ring-1 ring-white/10 md:h-[420px] md:w-72">
            <Image
              src="/igor-head-ai2.jpeg"
              alt="Igor Paes Ferreira"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
          <div className="absolute -bottom-4 -right-4 rounded-xl border border-white/10 bg-white px-3 py-2">
            <Image
              src="/woodmark3.png"
              alt="Paes Ferreira"
              width={48}
              height={48}
              className="h-12 w-auto"
            />
          </div>
        </div>

        {/* Copy */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {tx.h1a}
            <br />
            <span className="text-[var(--color-brand)]">{tx.h1b}</span>
          </h1>

          <div className="mt-4 h-px w-12 bg-[var(--color-gold)]" />

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            {tx.desc}
          </p>

          <PillarsBlueprint pillars={tx.pillars} label={tx.pillarLabel} result={tx.result} figure={tx.figure} />

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="rounded-lg bg-[var(--color-brand)] px-7 py-3 font-semibold text-white transition hover:bg-[var(--color-brand-600)]"
            >
              {tx.ctaPrimary}
            </a>
            <a
              href="#journey"
              className="rounded-lg border border-white/15 px-7 py-3 font-medium text-white/80 transition hover:border-white/30 hover:text-white"
            >
              {tx.ctaSecondary}
            </a>
            <a
              href={`/cv-igor-paes-ferreira-${lang}.pdf`}
              download
              className="flex items-center gap-2 rounded-lg border border-[var(--color-gold)]/40 px-5 py-3 font-medium text-[var(--color-gold)] transition hover:border-[var(--color-gold)] hover:text-[#e0be4a]"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-4 w-4" aria-hidden="true">
                <path d="M12 3v12m0 0 -4-4m4 4 4-4M4 19h16" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              {tx.ctaCv}
            </a>
            <a
              href={links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="rounded-lg border border-white/15 p-3 text-white/70 transition hover:border-white/30 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </svg>
            </a>
            <a
              href={`mailto:${links.email}`}
              aria-label="E-mail"
              className="rounded-lg border border-white/15 p-3 text-white/70 transition hover:border-white/30 hover:text-white"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-5 w-5" aria-hidden="true">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
