export function RpiContextComparison() {
  const contexts = [
    {
      name: "RPA 3",
      rpi: 579,
      baseline: "recupera em ~2 dias",
      duration: "7 dias em desvio",
      interpretation: "Perigo real",
      tone: "danger",
      description:
        "Ultrapassou significativamente seu ciclo natural de recuperação.",
    },
    {
      name: "RPA 4",
      rpi: 720,
      baseline: "recupera em ~18 dias",
      duration: "9 dias em desvio",
      interpretation: "Ainda absorvível",
      tone: "warning",
      description:
        "Historicamente suporta oscilações mais longas antes de entrar em risco estrutural.",
    },
  ];

  return (
    <section className="border-b border-zinc-200 bg-white px-12 py-10">
      <div className="">
        <div className="mb-10 max-w-7xl">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-600">
            RPI contextual
          </p>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-zinc-950 md:text-4xl">
            O mesmo RPI pode representar{" "}
            <span className="text-violet-600">
              riscos completamente diferentes.
            </span>
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600 md:text-base">
            O contexto operacional altera completamente a interpretação da
            pressão acumulada.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          {contexts.map((context) => (
            <div
              key={context.name}
              className="rounded-2xl border border-zinc-200 bg-zinc-50 p-5"
            >
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <p className="text-xs font-medium text-zinc-500">
                    {context.name}
                  </p>

                  <div className="mt-1 flex items-end gap-2">
                    <span className="text-4xl font-bold tracking-tight text-zinc-950">
                      {context.rpi}
                    </span>

                    <span className="mb-1 text-xs text-zinc-500">RPI</span>
                  </div>
                </div>

                <span
                  className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${
                    context.tone === "danger"
                      ? "bg-red-50 text-red-600 ring-1 ring-red-100"
                      : "bg-amber-50 text-amber-700 ring-1 ring-amber-100"
                  }`}
                >
                  {context.interpretation}
                </span>
              </div>

              <div className="grid gap-3">
                <div className="rounded-xl bg-white p-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                    Ciclo natural
                  </p>

                  <p className="mt-1 text-sm text-zinc-700">
                    {context.baseline}
                  </p>
                </div>

                <div className="rounded-xl bg-white p-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                    Situação atual
                  </p>

                  <p className="mt-1 text-sm text-zinc-700">
                    {context.duration}
                  </p>
                </div>

                <div className="rounded-xl bg-white p-3">
                  <p className="text-[10px] uppercase tracking-[0.18em] text-zinc-600">
                    Interpretação
                  </p>

                  <p className="mt-1 text-sm leading-relaxed text-zinc-600">
                    {context.description}
                  </p>
                </div>
              </div>

              <div className="mt-5">
                <div className="mb-2 flex justify-between text-[10px] uppercase tracking-[0.14em] text-zinc-800">
                  <span>absorvível</span>
                  <span>caro esperar</span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-zinc-200">
                  <div
                    className={`h-full rounded-full ${
                      context.tone === "danger"
                        ? "w-[86%] bg-red-500"
                        : "w-[58%] bg-amber-400"
                    }`}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-violet-500 pl-4 md:text-base">
          <p className="text-md font-medium text-zinc-950 font-bold">
            O RPI não compara operações como se todas tivessem o mesmo metabolismo.
          </p>

          <p className="mt-2 max-w-3xl text-md leading-relaxed text-zinc-600">
            A interpretação depende da capacidade histórica de recuperação de
            cada contexto operacional.
          </p>
        </div>
      </div>
    </section>
  );
}