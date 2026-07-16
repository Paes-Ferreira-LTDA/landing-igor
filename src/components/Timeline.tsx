"use client";

import { useState } from "react";
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
  { year: "2024–2025", flag: "🤖",  company: "AI Agents · Production",      role: "AI Systems Builder",                photos: ["/igor-head-ai.jpeg"],                             highlight: true  },
  { year: "2026",      flag: "🟢",  company: "Available",                   role: "Head of AI · Founding AI Engineer", photos: [],                                                 highlight: true  },
];

export function Timeline() {
  const { lang } = useLanguage();
  const tx = t[lang].timeline;
  const eventTexts = t[lang].events;
  const [openSet, setOpenSet] = useState<Set<number>>(new Set());

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
                      isOpen || event.highlight
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
                  <div className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                    <div className="overflow-hidden">
                      <div className="mt-2 rounded-xl border border-white/5 bg-white/2 p-5">
                        <p className="text-sm leading-relaxed text-white/60 italic">
                          &ldquo;{event.context}&rdquo;
                        </p>
                        {event.photos.length > 0 && (
                          <div className={`mt-5 grid gap-3 ${event.photos.length > 1 ? "grid-cols-2" : "grid-cols-1"}`}>
                            {event.photos.map((src) => {
                              const isHolding = src.includes("fohat-holding");
                              return (
                                <div
                                  key={src}
                                  className={`relative overflow-hidden rounded-lg ${isHolding ? "bg-white p-3" : ""}`}
                                  style={{ aspectRatio: event.photos.length > 1 ? "4/3" : "16/9" }}
                                >
                                  <Image
                                    src={src}
                                    alt={event.company}
                                    fill
                                    className={isHolding ? "object-contain p-2" : "object-cover"}
                                    sizes="(max-width: 768px) 100vw, 600px"
                                  />
                                </div>
                              );
                            })}
                          </div>
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
    </section>
  );
}
