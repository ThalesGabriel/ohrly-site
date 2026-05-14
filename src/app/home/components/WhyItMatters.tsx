export function WhyItMatters() {
  const phases = [
    {
      label: "Ruído",
      title: "Sinais isolados",
      persistence: 25,
      magnitude: 18,
      propagation: 12,
      text: "Variações aparecem, mas ainda podem ser pico, sazonalidade ou ruído.",
    },
    {
      label: "Atenção",
      title: "Persistência começa",
      persistence: 58,
      magnitude: 32,
      propagation: 24,
      text: "O comportamento começa a durar mais do que o esperado.",
    },
    {
      label: "Janela de decisão",
      title: "Dimensões se combinam",
      persistence: 76,
      magnitude: 61,
      propagation: 48,
      text: "Persistência, magnitude e propagação passam a evoluir juntas.",
      highlight: true,
    },
    {
      label: "Custo alto",
      title: "Degradação consolidada",
      persistence: 92,
      magnitude: 84,
      propagation: 72,
      text: "A operação já não tende a voltar naturalmente ao padrão esperado.",
    },
  ];

  return (
    <section className="border-b border-zinc-200 bg-white px-12 py-10">
      <div className="mb-4 ">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
          Por quê isso importa?
        </p>

        <h2 className="text-3xl max-w-4xl font-bold leading-tight text-zinc-950 md:text-4xl">
          <span className="text-violet-600">A Janela Operacional de Decisão </span>
          nasce exatamente dessa distância entre perceber e agir.
        </h2>

        <p className="mt-4 max-w-7xl text-sm leading-relaxed text-zinc-600 md:text-base">
          Essa janela representa o
          intervalo em que ainda há oportunidade de agir com <span className="font-bold">menor custo,
          menor ambiguidade e maior chance de recuperação saudável.</span>
        </p>
      </div>

      <div className="rounded-3xl">
        <h3 className="mb-2 text-lg font-bold text-zinc-950">
          Como uma janela de decisão surge
        </h3>

        <div className="grid gap-5 lg:grid-cols-4">
          {phases.map((phase) => (
            <article
              key={phase.label}
              className={`rounded-2xl border p-5 ${phase.highlight
                ? "border-violet-300 bg-violet-50"
                : "border-zinc-200 bg-zinc-50"
                }`}
            >
              <p
                className={`mb-2 text-xs font-bold uppercase tracking-[0.16em] ${phase.highlight ? "text-violet-700" : "text-zinc-500"
                  }`}
              >
                {phase.label}
              </p>

              <h4 className="text-sm font-bold text-zinc-950">{phase.title}</h4>

              <div className="mt-5 space-y-3">
                <MetricBar
                  label="Persistência"
                  value={phase.persistence}
                  highlighted={phase.highlight}
                />
                <MetricBar
                  label="Magnitude"
                  value={phase.magnitude}
                  highlighted={phase.highlight}
                />
                <MetricBar
                  label="Propagação"
                  value={phase.propagation}
                  highlighted={phase.highlight}
                />
              </div>

              <p className="mt-5 text-sm leading-relaxed text-zinc-600">
                {phase.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricBar({
  label,
  value,
  highlighted,
}: {
  label: string;
  value: number;
  highlighted?: boolean;
}) {
  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-xs">
        <span className="text-zinc-500">{label}</span>
        <span className="font-semibold text-zinc-700">{value}%</span>
      </div>

      <div className="h-2 rounded-full bg-white">
        <div
          className={`h-2 rounded-full ${highlighted ? "bg-violet-600" : "bg-zinc-400"
            }`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}