"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";

export function Navbar() {
  const { lang, setLang } = useLanguage();
  const tx = t[lang].nav;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#021C35]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 sm:py-4">
        <a href="/" className="flex flex-shrink-0 items-center">
          <Image
            src="/logo-full.png"
            alt="Igor Paes Ferreira"
            width={200}
            height={360}
            className="h-14 w-auto md:h-28"
          />
        </a>

        <div className="flex items-center gap-2 text-sm text-white/60 sm:gap-4">
          <a href="#journey" className="transition hover:text-white hidden sm:block">
            {tx.journey}
          </a>
          <a href="#projects" className="transition hover:text-white hidden sm:block">
            {tx.projects}
          </a>

          {/* Language toggle */}
          <div className="flex flex-shrink-0 items-center overflow-hidden rounded-md border border-white/10 text-xs font-semibold">
            <button
              onClick={() => setLang("en")}
              className={`px-2.5 py-1.5 transition ${
                lang === "en"
                  ? "bg-[var(--color-brand)] text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("pt")}
              className={`px-2.5 py-1.5 transition ${
                lang === "pt"
                  ? "bg-[var(--color-brand)] text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              BR
            </button>
          </div>

          <a
            href="#contact"
            className="flex-shrink-0 whitespace-nowrap rounded-md border border-[var(--color-brand)]/40 px-3 py-1.5 text-[var(--color-brand-400)] transition hover:border-[var(--color-brand)] hover:text-[var(--color-brand)] sm:px-4"
          >
            {tx.cta}
          </a>
        </div>
      </nav>
    </header>
  );
}
