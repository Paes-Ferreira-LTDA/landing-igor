"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { t } from "@/lib/i18n";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const { lang } = useLanguage();
  const tx = t[lang].contact;
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          message: data.get("message"),
        }),
      });

      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json.error ?? "Erro ao enviar.");
      }

      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao enviar.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="mx-auto max-w-xl px-6 py-24">
      <h2 className="text-center text-3xl font-bold tracking-tight text-white">
        {tx.title}
      </h2>
      <p className="mt-3 text-center text-sm leading-relaxed text-white/50">
        {tx.subtitle}
      </p>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
        <input
          name="name"
          type="text"
          required
          minLength={2}
          placeholder={tx.namePlaceholder}
          className="rounded-lg border border-white/10 bg-white/4 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[var(--color-brand)]"
        />
        <input
          name="email"
          type="email"
          required
          placeholder={tx.emailPlaceholder}
          className="rounded-lg border border-white/10 bg-white/4 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[var(--color-brand)]"
        />
        <textarea
          name="message"
          rows={4}
          placeholder={tx.messagePlaceholder}
          className="rounded-lg border border-white/10 bg-white/4 px-4 py-3 text-white outline-none placeholder:text-white/30 focus:border-[var(--color-brand)]"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-[var(--color-brand)] px-6 py-3 font-semibold text-white transition hover:bg-[var(--color-brand-600)] disabled:opacity-60"
        >
          {status === "loading" ? tx.sending : tx.submit}
        </button>

        {status === "success" && (
          <p className="text-center text-green-400">{tx.success}</p>
        )}
        {status === "error" && (
          <p className="text-center text-red-400">{error}</p>
        )}
      </form>
    </section>
  );
}
