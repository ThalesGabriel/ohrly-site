export function RpiArchetypeExplanation() {
  const layers = [
    {
      label: "Estado",
      question: "Quão crítico está?",
      description:
        "Classifica a severidade operacional atual: ruído, sinal relevante, degradação ou pré-incidente.",
    },
    {
      label: "Arquétipo",
      question: "Como está degradando?",
      description:
        "Interpreta a dinâmica estrutural: choque operacional, degradação localizada, progressiva ou sistêmica.",
    },
    {
      label: "RPI",
      question: "Quanto custa continuar esperando?",
      description:
        "Mede a pressão acumulada de recuperação combinando magnitude, persistência e propagação.",
    },
  ];

  return (
    <section className="border-b border-zinc-200 bg-white px-12 py-10 md:px-12">
      <div className="">
        <div className="mb-14 max-w-7xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-violet-600">
            RPI + Arquétipos
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-zinc-950 md:text-5xl">
            O RPI mede pressão.
              O arquétipo explica a forma da degradação.
          </h2>

          <p className="mt-6 max-w-5xl text-lg leading-relaxed text-zinc-600">
            Duas operações podem ter o mesmo RPI e ainda assim estarem
            degradando de formas completamente diferentes.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {layers.map((layer) => (
            <div
              key={layer.label}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-600">
                {layer.label}
              </p>

              <h3 className="mt-4 text-2xl font-bold text-zinc-950">
                {layer.question}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                {layer.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-500">Caso A</p>
                <h3 className="mt-1 text-2xl font-bold text-zinc-950">
                  Choque operacional
                </h3>
              </div>

              <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
                RPI 700
              </span>
            </div>

            <div className="space-y-3 text-sm text-zinc-600">
              <p>
                <strong className="text-zinc-900">Magnitude:</strong> muito alta
              </p>
              <p>
                <strong className="text-zinc-900">Persistência:</strong> baixa
              </p>
              <p>
                <strong className="text-zinc-900">Propagação:</strong> moderada
              </p>
            </div>

            <p className="mt-6 rounded-2xl bg-zinc-50 p-4 text-sm leading-relaxed text-zinc-600">
              A operação sofreu um impacto forte, mas ainda demonstrou capacidade
              de absorção. É intenso, mas não necessariamente estrutural.
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-zinc-500">Caso B</p>
                <h3 className="mt-1 text-2xl font-bold text-zinc-950">
                  Degradação sistêmica
                </h3>
              </div>

              <span className="rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-600">
                RPI 700
              </span>
            </div>

            <div className="space-y-3 text-sm text-zinc-600">
              <p>
                <strong className="text-zinc-900">Magnitude:</strong> moderada
              </p>
              <p>
                <strong className="text-zinc-900">Persistência:</strong> alta
              </p>
              <p>
                <strong className="text-zinc-900">Propagação:</strong> alta
              </p>
            </div>

            <p className="mt-6 rounded-2xl bg-zinc-50 p-4 text-sm leading-relaxed text-zinc-600">
              A pressão acumulada é parecida, mas a natureza é outra: o problema
              se espalha, dura mais e ameaça a estabilidade da operação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}