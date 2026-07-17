"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";
import { links } from "@/lib/links";

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
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-1 text-sm text-white/30">
          <a href="#journey" className="py-2 transition hover:text-white/60">
            {tx.nav.journey}
          </a>
          <a href="#projects" className="py-2 transition hover:text-white/60">
            {tx.nav.projects}
          </a>
          <a href="#contact" className="py-2 transition hover:text-white/60">
            {tx.nav.cta}
          </a>
          <a
            href={links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2 transition hover:text-white/60"
          >
            LinkedIn
          </a>
          <a href={`mailto:${links.email}`} className="py-2 transition hover:text-white/60">
            E-mail
          </a>
        </div>
        <p className="text-xs text-white/20">
          {tx.projects.footerBuilt}
        </p>
      </div>
    </footer>
  );
}
