"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";

export function Hero() {
  const { lang } = useLanguage();
  const tx = t[lang].hero;

  return (
    <section className="relative min-h-screen overflow-hidden pt-24">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(rgba(59,130,246,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.15) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
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
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-[var(--color-brand)]/30 bg-[var(--color-brand)]/10 px-4 py-1.5 text-xs font-medium tracking-widest text-[var(--color-brand-400)] uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-brand)] animate-pulse" />
            {tx.badge}
          </span>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
            {tx.h1a}
            <br />
            <span className="text-[var(--color-brand)]">{tx.h1b}</span>
          </h1>

          <div className="mt-4 h-px w-12 bg-[var(--color-gold)]" />

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
            {tx.desc}{" "}
            <span className="text-white/90">{tx.descHighlight}</span>{" "}
            {tx.descEnd}
          </p>

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
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {["LangGraph", "Claude · Vertex AI", "Next.js", "Kubernetes", "GCP", "Python"].map(
              (tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50"
                >
                  {tech}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
