const items = [
  {
    title: "Estratégia",
    body: "Entendo o problema antes de escrever a primeira linha de código.",
  },
  {
    title: "Execução",
    body: "Stack moderna, código limpo e entregas rápidas com qualidade.",
  },
  {
    title: "Resultado",
    body: "Foco em impacto real: performance, conversão e experiência.",
  },
];

export function Features() {
  return (
    <section id="sobre" className="mx-auto max-w-5xl px-6 py-20">
      <h2 className="text-center text-3xl font-bold tracking-tight">
        Como eu trabalho
      </h2>
      <div className="mt-12 grid gap-6 sm:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-black/10 p-6 dark:border-white/10"
          >
            <h3 className="text-lg font-semibold text-[var(--color-brand)]">
              {item.title}
            </h3>
            <p className="mt-2 text-black/70 dark:text-white/70">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
