"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";

/* ── Git-graph layout ─────────────────────────────────────────────
   Cada evento é um "commit". `lanes` descreve, para cada faixa (branch),
   como a linha passa pela linha da timeline:
     "|" atravessa · "v" nasce no commit · "^" termina no commit · " " vazia
   `dots` = faixas com commit; `forks`/`merges` = curvas [de, para].
   Faixas = pilares: 0 = corporativo · 1 = inovação · 2 = investimentos · 3 = P&D.
   P&D nasce na Fohat e volta a ela (merge) ao fim do último projeto;
   as demais convergem no HEAD (Novos Desafios). */
const LANE_W = 18;
const LANES = 4;
const DOT_Y = 28;
const LANE_COLORS = ["#60A5FA", "#C9A227", "#34D399", "#FB923C"];
const laneX = (l: number) => l * LANE_W + LANE_W / 2;

type Graph = {
  lanes: string;
  dots: number[];
  forks?: [number, number][];
  merges?: [number, number][];
};

const eventsBase: {
  year: string;
  flag: string;
  company: string;
  companyPt?: string;
  role: string;
  photos: string[];
  highlight: boolean;
  pillar?: number;
  tag?: string;
  g: Graph;
}[] = [
  { year: "2007",      flag: "🇨🇳", company: "Bosch · China",                 role: "International Internship",                 photos: ["/bosch-china.jpg"],                                          highlight: false, pillar: 0, g: { lanes: "v   ", dots: [0] } },
  { year: "2007",      flag: "🇩🇪", company: "Bosch · Germany",                role: "R&D Internship · Stuttgart",               photos: ["/bosch-alemanha.jpg"],                                       highlight: false, pillar: 0, g: { lanes: "|   ", dots: [0] } },
  { year: "2010–2017", flag: "🇧🇷", company: "Volvo do Brasil",                role: "Product Engineer → Quality & Reliability", photos: ["/volvo-igor.jpeg"],                                          highlight: false, pillar: 0, g: { lanes: "|   ", dots: [0] } },
  { year: "2011",      flag: "🎓",  company: "Electrical Engineering",         role: "B.Sc. · Universidade",                     photos: ["/graduacao.jpg"],                                            highlight: false, pillar: 0, g: { lanes: "|   ", dots: [0] } },
  { year: "2017",      flag: "🇺🇸", company: "Silicon Valley",                 role: "The turning point",                        photos: ["/igor-san-francisco.jpeg", "/igor-stanford.jpeg"],           highlight: true,  pillar: 1, tag: "v2017", g: { lanes: "|v  ", dots: [1], forks: [[0, 1]] } },
  { year: "2018–2026", flag: "🚀",  company: "Fohat Corporation",              role: "Founder · Product Manager · Tech Lead",    photos: ["/fohat-igor.jpeg", "/beenx-team.jpeg", "/fohat-evento.jpg"], highlight: false, pillar: 1, g: { lanes: "||  ", dots: [1] } },
  { year: "10/2019–06/2021", flag: "🔬", company: "AES Tietê",  role: "Home Broker · ANEEL R&D PD 0064-1059/2019", photos: ["/fohat-certificado-inpi.jpg"],                  highlight: false, pillar: 3, tag: "branch", g: { lanes: "|| v", dots: [3], forks: [[1, 3]] } },
  { year: "03/2020–09/2020", flag: "🇨🇱", company: "ACCIONA Chile", role: "Open Innovation Program", photos: ["/acciona-evento.webp", "/acciona-startups.webp"], highlight: false, pillar: 3,                g: { lanes: "|| |", dots: [3] } },
  { year: "06/2020–08/2022", flag: "🔬", company: "Eneva",      role: "Broker Back Office · ANEEL R&D PD 08601-0320/2020", photos: ["/eneva-fohat.png"],                highlight: false, pillar: 3,                g: { lanes: "|| |", dots: [3] } },
  { year: "05/2022–12/2022", flag: "🔬", company: "ISA CTEEP",  role: "ANEEL R&D PD-00068-0056/2022", photos: ["/isa-cteep.jpg"],  highlight: false, pillar: 3,                 g: { lanes: "|| |", dots: [3] } },
  { year: "05/2022–10/2023", flag: "🔬", company: "Comgás",     role: "R&D P272.5 · Interliga SP", photos: ["/comgas-pd.jpg"],         highlight: false, pillar: 3, tag: "merge",  g: { lanes: "||  ", dots: [1], merges: [[3, 1]] } },
  { year: "2022–2024", flag: "🧭",  company: "OSINOVA",                        role: "Innovation Board Advisor",                 photos: ["/osinova-board.jpg", "/certificado-conselheiro-inovacao.jpeg"], highlight: false, pillar: 2, g: { lanes: "||v ", dots: [2], forks: [[1, 2]] } },
  { year: "2026",      flag: "🟢",  company: "Available",                      companyPt: "Novos Desafios",               role: "AI Product Manager · Technical PM",        photos: [],                                                            highlight: true,  tag: "HEAD", g: { lanes: "^   ", dots: [0], merges: [[1, 0], [2, 0]] } },
];

function Context({ text }: { text: string }) {
  return (
    <div className="flex-1 space-y-2 text-sm leading-relaxed text-white/60 italic">
      {text.split("\n").map((line, i) =>
        line.startsWith("• ") ? (
          <p key={i} className="flex gap-2 pl-1">
            <span className="text-[var(--color-brand-400)]">•</span>
            <span>{line.slice(2)}</span>
          </p>
        ) : (
          <p key={i}>{line}</p>
        )
      )}
    </div>
  );
}

function Graph({ g, open, highlight }: { g: Graph; open: boolean; highlight: boolean }) {
  const width = LANES * LANE_W;
  return (
    <div className="relative flex-shrink-0 self-stretch" style={{ width }} aria-hidden>
      {g.lanes.split("").map((ch, l) => {
        if (ch === " ") return null;
        const style: React.CSSProperties = {
          left: laneX(l) - 1,
          width: 2,
          background: LANE_COLORS[l],
          opacity: 0.45,
          top: ch === "v" ? DOT_Y : 0,
          ...(ch === "^" ? { height: DOT_Y } : { bottom: 0 }),
        };
        return <div key={l} className="absolute" style={style} />;
      })}

      {(g.forks || g.merges) && (
        <svg className="absolute left-0 top-0" width={width} height={DOT_Y} fill="none">
          {g.forks?.map(([a, b], i) => (
            <path key={`f${i}`} d={`M ${laneX(a)} 0 C ${laneX(a)} ${DOT_Y * 0.7}, ${laneX(b)} ${DOT_Y * 0.3}, ${laneX(b)} ${DOT_Y}`}
              stroke={LANE_COLORS[b]} strokeWidth={2} strokeOpacity={0.6} />
          ))}
          {g.merges?.map(([a, b], i) => (
            <path key={`m${i}`} d={`M ${laneX(a)} 0 C ${laneX(a)} ${DOT_Y * 0.7}, ${laneX(b)} ${DOT_Y * 0.3}, ${laneX(b)} ${DOT_Y}`}
              stroke={LANE_COLORS[a]} strokeWidth={2} strokeOpacity={0.6} />
          ))}
        </svg>
      )}

      {g.dots.map((l) => (
        <div
          key={l}
          className="absolute rounded-full ring-2 ring-offset-2 ring-offset-[var(--color-navy)] transition-colors duration-300"
          style={{
            left: laneX(l) - (highlight ? 6 : 5),
            top: DOT_Y - (highlight ? 6 : 5),
            width: highlight ? 12 : 10,
            height: highlight ? 12 : 10,
            background: open || highlight ? LANE_COLORS[l] : "var(--color-navy-700)",
            // @ts-expect-error CSS custom property
            "--tw-ring-color": open || highlight ? LANE_COLORS[l] : "rgba(255,255,255,0.2)",
          }}
        />
      ))}
    </div>
  );
}

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
    company: (lang === "pt" && base.companyPt) || base.company,
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
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {tx.pillars.map((name, i) => (
            <span
              key={name}
              className="rounded-full border border-dashed px-3 py-1 font-mono text-[10px] tracking-widest uppercase"
              style={{ color: LANE_COLORS[i], borderColor: `${LANE_COLORS[i]}66` }}
            >
              ⎇ {name}
            </span>
          ))}
        </div>
        <p className="mt-3 font-mono text-[9px] tracking-[0.2em] text-white/30">{tx.figure}</p>
      </div>

      <div className="flex flex-col">
        {events.map((event, i) => {
          const isOpen = openSet.has(i);
          return (
            <div key={i} className="flex gap-3 pb-4 md:gap-5">
              {/* Year (desktop) */}
              <div className="hidden w-28 flex-shrink-0 pt-[21px] text-right md:block">
                <span className="text-xs font-mono text-white/30">{event.year}</span>
              </div>

              {/* Git graph */}
              <Graph g={event.g} open={isOpen} highlight={event.highlight} />

              {/* Card */}
              <div className="min-w-0 flex-1">
                <button
                  onClick={() => toggle(i)}
                  className={`w-full cursor-pointer rounded-xl border p-5 text-left transition-all duration-300 ${
                    isOpen || event.highlight
                      ? "border-[var(--color-brand)]/20 bg-[var(--color-brand)]/5"
                      : "border-white/5 bg-white/2 hover:border-white/10"
                  }`}
                >
                  <div className="mb-1 flex flex-wrap items-center gap-x-2 gap-y-1 md:hidden">
                    <span className="text-xs font-mono text-white/30">{event.year}</span>
                  </div>
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
                  {(event.pillar !== undefined || event.tag) && (
                    <div className="mt-1.5 flex flex-wrap gap-1.5">
                      {event.pillar !== undefined && (
                        <span
                          className="rounded-full border px-2 py-0.5 font-mono text-[10px]"
                          style={{
                            color: LANE_COLORS[event.pillar ?? 0],
                            borderColor: `${LANE_COLORS[event.pillar ?? 0]}55`,
                          }}
                        >
                          ⎇ {tx.pillars[event.pillar ?? 0]}
                        </span>
                      )}
                      {event.tag && (
                        <span className="rounded-full border border-white/10 px-2 py-0.5 font-mono text-[10px] text-white/50">
                          ◆ {event.tag}
                        </span>
                      )}
                    </div>
                  )}
                  <p className="mt-1.5 text-sm text-white/40">{event.desc}</p>
                </button>

                {/* Expandable */}
                <div
                  className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
                  style={{ maxHeight: isOpen ? "1600px" : "0px" }}
                >
                  <div className="mt-2 rounded-xl border border-white/5 bg-white/2 p-5">
                    {event.photos.length > 0 ? (
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
                        <div className={`flex-shrink-0 w-full ${event.photos.length > 1 ? "grid grid-cols-2 gap-2 md:w-64" : "md:w-64"}`}>
                          {event.photos.map((src) => (
                            <button
                              key={src}
                              onClick={() => setLightbox(src)}
                              className="group relative block w-full overflow-hidden rounded-lg"
                              style={{ aspectRatio: "4/3" }}
                            >
                              <Image
                                src={src}
                                alt={event.company}
                                fill
                                className="object-cover transition duration-300 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 256px"
                              />
                              <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition duration-300 group-hover:bg-black/25">
                                <span className="scale-0 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm transition duration-300 group-hover:scale-100">
                                  ⤢
                                </span>
                              </div>
                            </button>
                          ))}
                        </div>
                        <Context text={event.context} />
                      </div>
                    ) : (
                      <Context text={event.context} />
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Photo lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-12"
          onClick={() => setLightbox(null)}
        >
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md" />
          <div className="relative z-10 w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightbox(null)}
              className="absolute -top-10 right-0 text-sm text-white/60 hover:text-white"
            >
              ✕ {tx.lightboxClose}
            </button>
            <div className="relative w-full overflow-hidden rounded-2xl bg-black" style={{ aspectRatio: "4/3" }}>
              <Image src={lightbox} alt="Foto expandida" fill className="object-cover" sizes="100vw" priority />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
