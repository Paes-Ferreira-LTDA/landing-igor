"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
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
    <section id="contato" className="mx-auto max-w-xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight">
        Vamos conversar
      </h2>
      <p className="mt-3 text-center text-black/70 dark:text-white/70">
        Preencha o formulário e eu retorno em breve.
      </p>

      <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4">
        <input
          name="name"
          type="text"
          required
          minLength={2}
          placeholder="Seu nome"
          className="rounded-lg border border-black/15 bg-transparent px-4 py-3 outline-none focus:border-[var(--color-brand)] dark:border-white/20"
        />
        <input
          name="email"
          type="email"
          required
          placeholder="Seu e-mail"
          className="rounded-lg border border-black/15 bg-transparent px-4 py-3 outline-none focus:border-[var(--color-brand)] dark:border-white/20"
        />
        <textarea
          name="message"
          rows={4}
          placeholder="Conte sobre seu projeto (opcional)"
          className="rounded-lg border border-black/15 bg-transparent px-4 py-3 outline-none focus:border-[var(--color-brand)] dark:border-white/20"
        />

        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg bg-[var(--color-brand)] px-6 py-3 font-medium text-white transition hover:bg-[var(--color-brand-600)] disabled:opacity-60"
        >
          {status === "loading" ? "Enviando..." : "Enviar"}
        </button>

        {status === "success" && (
          <p className="text-center text-green-600 dark:text-green-400">
            Recebido! Obrigado pelo contato. ✅
          </p>
        )}
        {status === "error" && (
          <p className="text-center text-red-600 dark:text-red-400">{error}</p>
        )}
      </form>
    </section>
  );
}
