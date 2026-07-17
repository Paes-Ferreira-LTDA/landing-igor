"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";

const eventsBase = [
  { year: "2007",      flag: "🇨🇳", company: "Bosch · China",              role: "International Internship",          photos: ["/bosch-china.jpg"],                               highlight: false },
  { year: "2007",      flag: "🇩🇪", company: "Bosch · Germany",             role: "R&D Internship · Stuttgart",        photos: ["/bosch-alemanha.jpg"],                            highlight: false },
  { year: "2010–2017", flag: "🇧🇷", company: "Volvo do Brasil",             role: "Engineer → Product Leader",         photos: ["/volvo-igor.jpeg"],                               highlight: false },
  { year: "2011",      flag: "🎓",  company: "Electrical Engineering",      role: "B.Sc. · Universidade",              photos: ["/graduacao.jpg"],                                 highlight: false },
  { year: "2017",      flag: "🇺🇸", company: "Silicon Valley",              role: "The turning point",                 photos: ["/igor-san-francisco.jpeg", "/igor-stanford.jpeg"], highlight: true  },
  { year: "2018",      flag: "🚀",  company: "Fohat Corporation",            role: "Founded",                           photos: ["/fohat-igor.jpeg", "/fohat-holding.png"],         highlight: false },
  { year: "2018–2023", flag: "⚡",  company: "Beenx · eTradeflow · eFlowing", role: "Platform Builder",                photos: ["/beenx-team.jpeg"],                               highlight: false },
  { year: "2022–2024", flag: "🧭",  company: "OSINOVA",                     role: "Innovation Board Advisor",          photos: ["/certificado-conselheiro-inovacao.jpeg"],         highlight: false },
  { year: "2024–2025", flag: "🤖",  company: "Fohat eTech · eXmesh",        role: "AI Systems Builder",                photos: ["/igor-head-ai.jpeg"],                             highlight: true  },
  { year: "2026",      flag: "🟢",  company: "Available",                   role: "AI Product Manager · Technical PM", photos: [],                                                 highlight: true  },
];

export function Timeline() {
  const { lang } = useLanguage();
  const tx = t[lang].timeline;
  const eventTexts = t[lang].events;
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());
  const [lightbox, setLightbox] = useState<string | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setLightbox(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const events = eventsBase.map((base, i) => ({
    ...base,
    desc: eventTexts[i].desc,
    context: eventTexts[i].context,
  }));

  function toggle(i: number) {
    setOpenSet((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  }

  return (
    <section id="journey" className="mx-auto max-w-4xl px-6 py-24 md:py-32">
      {/* Header */}
      <div className="mb-16 text-center">
        <span className="text-xs font-semibold uppercase tracking-widest text-[var(--color-brand-400)]">
          {tx.eyebrow}
        </span>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {tx.title}
        </h2>
        <p className="mt-4 text-white/50">{tx.subtitle}</p>
        <p className="mt-2 text-xs text-white/25">{tx.hint}</p>
      </div>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[72px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:left-[88px]" />

        <div className="flex flex-col gap-4">
          {events.map((event, i) => {
            const isOpen = openSet.has(i);
            return (
              <div key={i} className="flex gap-6 md:gap-8">
                {/* Year */}
                <div className="w-16 flex-shrink-0 pt-4 text-right md:w-20">
                  <span className="text-xs font-mono text-white/30">
                    {event.year}
                  </span>
                </div>

                {/* Node */}
                <div className="relative flex-shrink-0 pt-5">
                  <div
                    className={`h-3 w-3 rounded-full ring-2 ring-offset-2 ring-offset-[var(--color-navy)] transition-colors duration-300 ${
                      isOpen
                        ? "bg-[var(--color-brand)] ring-[var(--color-brand)]"
                        : "bg-[var(--color-navy-700)] ring-white/20"
                    }`}
                  />
                </div>

                {/* Card */}
                <div className="flex-1">
                  <button
                    onClick={() => toggle(i)}
                    className={`w-full cursor-pointer rounded-xl border p-5 text-left transition-all duration-300 ${
                      isOpen || event.highlight
                        ? "border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5"
                        : "border-white/5 bg-white/2 hover:border-white/10"
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <div className="flex flex-wrap items-baseline gap-2">
                        <span className="text-base">{event.flag}</span>
                        <span className="font-semibold text-white">{event.company}</span>
                        <span className="text-xs text-[var(--color-brand-400)]">{event.role}</span>
                      </div>
                      <span className={`flex-shrink-0 text-white/30 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                        ▾
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-white/40">{event.desc}</p>
                  </button>

                  {/* Expandable */}
                  <div
                    className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                    style={{ maxHeight: isOpen ? "1200px" : "0px" }}
                  >
                    <div>
                      <div className="mt-2 rounded-xl border border-white/5 bg-white/2 p-5">
                        {event.photos.length > 0 ? (
                          /* 2 colunas: fotos | texto */
                          <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                            {/* Coluna fotos */}
                            <div className={`flex-shrink-0 w-full ${event.photos.length > 1 ? "grid grid-cols-2 gap-2 md:w-64" : "md:w-64"}`}>
                              {event.photos.map((src) => {
                                const isHolding = src.includes("fohat-holding");
                                return (
                                  <button
                                    key={src}
                                    onClick={() => setLightbox(src)}
                                    className={`group block w-full relative overflow-hidden rounded-lg ${isHolding ? "bg-white p-2" : ""}`}
                                    style={{ aspectRatio: "4/3" }}
                                  >
                                    <Image
                                      src={src}
                                      alt={event.company}
                                      fill
                                      className={`transition duration-300 group-hover:scale-105 ${isHolding ? "object-contain p-1" : "object-cover"}`}
                                      sizes="(max-width: 768px) 100vw, 256px"
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/25">
                                      <span className="scale-0 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm transition duration-300 group-hover:scale-100">
                                        ⤢
                                      </span>
                                    </div>
                                  </button>
                                );
                              })}
                            </div>
                            {/* Coluna texto */}
                            <p className="flex-1 text-sm leading-relaxed text-white/60 italic">
                              &ldquo;{event.context}&rdquo;
                            </p>
                          </div>
                        ) : (
                          /* Sem foto — texto full width */
                          <p className="text-sm leading-relaxed text-white/60 italic">
                            &ldquo;{event.context}&rdquo;
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      {/* Photo lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12"
          onClick={() => setLightbox(null)}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
          <div className="relative z-10 max-w-4xl w-full" onClick={e => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-white/60 hover:text-white text-sm"
            >
              ✕ {tx.lightboxClose}
            </button>
            <div className={`relative w-full overflow-hidden rounded-2xl ${lightbox.includes("fohat-holding") ? "bg-white p-6" : "bg-black"}`}
              style={{ aspectRatio: "4/3" }}>
              <Image
                src={lightbox}
                alt="Foto expandida"
                fill
                className={lightbox.includes("fohat-holding") ? "object-contain" : "object-cover"}
                sizes="100vw"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
