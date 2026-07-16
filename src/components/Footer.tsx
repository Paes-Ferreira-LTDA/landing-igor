"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";

export function Footer() {
  const { lang } = useLanguage();
  const tx = t[lang];

  return (
    <footer className="border-t border-white/5 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 md:flex-row md:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo-pf.png"
            alt="Paes Ferreira"
            width={80}
            height={80}
            className="h-10 w-auto"
          />
          <span className="text-sm text-white/30">
            © 2026 Paes Ferreira LTDA · {tx.footer.rights}
          </span>
        </div>
        <div className="flex items-center gap-6 text-sm text-white/30">
          <a href="#journey" className="transition hover:text-white/60">
            {tx.nav.journey}
          </a>
          <a href="#projects" className="transition hover:text-white/60">
            {tx.nav.projects}
          </a>
          <a href="#contact" className="transition hover:text-white/60">
            {tx.nav.cta}
          </a>
        </div>
        <p className="text-xs text-white/20">
          Built with Next.js · Deployed on Vercel
        </p>
      </div>
    </footer>
  );
}
