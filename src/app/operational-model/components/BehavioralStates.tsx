export function BehavioralStates() {
  const dimensions = [
    {
      title: "Persistência",
      color: "bg-amber-500",
      description:
        "Por quanto tempo o comportamento continua existindo além do esperado.",
      example:
        "Um desvio que desaparece rápido pode ser apenas ruído. Um desvio que sobrevive múltiplos ciclos começa a mudar de significado.",
    },
    {
      title: "Magnitude",
      color: "bg-red-500",
      description:
        "Quão distante o comportamento atual está do padrão histórico da operação.",
      example:
        "Pequenas oscilações são naturais. Grandes afastamentos indicam perda relevante de estabilidade.",
    },
    {
      title: "Propagação",
      color: "bg-violet-500",
      description:
        "Se o comportamento começou a afetar outras partes da operação.",
      example:
        "Uma degradação localizada pode permanecer controlada. Quando ela começa a se espalhar, o custo tende a crescer rapidamente.",
    },
  ];

  return (
    <section className="border-b border-zinc-200 bg-white px-12 py-10">
      <div className="max-w-4xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
          Estado comportamental
        </p>

        <h2 className="text-3xl font-bold leading-tight text-zinc-950 md:text-4xl">
          Um estado comportamental não nasce de uma métrica isolada.
        </h2>

        <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
          O Ohrly interpreta comportamento observando como um desvio evolui ao
          longo do tempo. Essa leitura acontece a partir de três dimensões
          principais.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {dimensions.map((dimension) => (
          <div
            key={dimension.title}
            className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm"
          >
            <div className={`h-3 w-12 rounded-full ${dimension.color}`} />

            <h3 className="mt-5 text-lg font-semibold text-zinc-950">
              {dimension.title}
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              {dimension.description}
            </p>

            <div className="mt-5 rounded-2xl bg-zinc-50 p-4">
              <p className="text-sm leading-relaxed text-zinc-700">
                {dimension.example}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-3xl border border-violet-200 bg-violet-50 p-6">
        <p className="text-sm leading-relaxed text-violet-900">
          Essas dimensões ajudam o Ohrly a entender quando uma operação ainda
          está apenas oscilando e quando ela começou a entrar em degradação.
        </p>
      </div>
    </section>
  );
}