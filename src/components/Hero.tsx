export function Hero() {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-24 text-center sm:py-32">
      <span className="mb-4 inline-flex items-center rounded-full border border-black/10 px-3 py-1 text-sm text-black/60 dark:border-white/15 dark:text-white/60">
        Disponível para novos projetos
      </span>
      <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
        Olá, eu sou o{" "}
        <span className="text-[var(--color-brand)]">Igor</span>.
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-black/70 dark:text-white/70">
        Construo produtos digitais de alta qualidade — do conceito ao deploy.
        Vamos transformar sua ideia em algo real.
      </p>
      <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
        <a
          href="#contato"
          className="rounded-lg bg-[var(--color-brand)] px-6 py-3 font-medium text-white transition hover:bg-[var(--color-brand-600)]"
        >
          Fale comigo
        </a>
        <a
          href="#sobre"
          className="rounded-lg border border-black/15 px-6 py-3 font-medium transition hover:bg-black/5 dark:border-white/20 dark:hover:bg-white/5"
        >
          Saiba mais
        </a>
      </div>
    </section>
  );
}
