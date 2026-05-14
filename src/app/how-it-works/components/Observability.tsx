const rows = [
  {
    category: "APMs",
    description:
      "Observam infraestrutura, disponibilidade, traces e incidentes técnicos.",
  },
  {
    category: "Monitoramento",
    description:
      "Acompanha métricas operacionais e comportamento explícito do sistema.",
  },
  {
    category: "BI operacional",
    description:
      "Analisa performance histórica e indicadores agregados.",
  },
  {
    category: "Analytics tradicional",
    description:
      "Explica comportamento consolidado e eventos passados.",
  },
  {
    category: "Ohrly",
    description:
      "Interpreta continuamente coerência operacional, estabilidade adaptativa e degradação progressiva.",
    highlight: true,
  },
];

export default function Observability() {
  return (
    <section className="border-b border-zinc-200 bg-white px-12 py-10 md:px-12">
      <div>
        <div className="max-w-6xl">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
            Mudança de paradigma
          </p>

          <h2 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
            Observabilidade tradicional é excelente em <span className="text-violet-600">reagir</span>.
          </h2>

          <p className="mt-6 max-w-4xl text-base leading-relaxed text-zinc-600 md:text-xl">
            O Ohrly existe para interpretar como operações evoluem, oscilam e perdem coerência <span className="text-violet-600">antes</span> que o
            problema apareça como incidente.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-3xl border border-zinc-200 bg-white">
          <div className="grid grid-cols-[220px_1fr] border-b border-zinc-200 bg-zinc-50">
            <div className="px-8 py-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                Camada
              </p>
            </div>

            <div className="border-l border-zinc-200 px-8 py-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-zinc-500">
                Papel operacional
              </p>
            </div>
          </div>

          {rows.map((row) => (
            <div
              key={row.category}
              className={`grid grid-cols-[220px_1fr] border-b border-zinc-100 last:border-none ${
                row.highlight ? "bg-violet-50/40" : ""
              }`}
            >
              <div className="px-8 py-6">
                <p
                  className={`text-sm font-semibold ${
                    row.highlight
                      ? "text-violet-700"
                      : "text-zinc-900"
                  }`}
                >
                  {row.category}
                </p>
              </div>

              <div className="border-l border-zinc-100 px-8 py-6">
                <p
                  className={`text-base leading-relaxed ${
                    row.highlight
                      ? "font-medium text-zinc-900"
                      : "text-zinc-600"
                  }`}
                >
                  {row.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-sm leading-relaxed text-zinc-500">
          A proposta não é substituir observabilidade, APMs ou BI. A proposta é
          adicionar uma camada interpretativa entre o comportamento do sistema e
          a decisão operacional.
        </p>
      </div>
    </section>
  );
}