const regimes = [
    {
        name: "RUÍDO",
        description:
            "Desvio absorvível dentro do comportamento esperado.",
    },
    {
        name: "EVENTO_SEVERO",
        description:
            "Alta magnitude, mas ainda dentro da capacidade de recuperação.",
    },
    {
        name: "SINAL_RELEVANTE",
        description:
            "Persistência relevante, mas sem severidade sustentada.",
    },
    {
        name: "DEGRADATION",
        description:
            "Perda de recuperação natural com magnitude alta.",
    },
    {
        name: "PRE_INCIDENT",
        description:
            "Perda de recuperação natural com severidade sustentada.",
    },
];

export function OperationalTaxonomy() {
    return (
        <section className="border-t border-zinc-200 bg-white px-12 py-10">
            <div className="">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                    Nova taxonomia operacional
                </p>

                <h2 className="mt-3 max-w-5xl text-2xl font-semibold tracking-tight text-zinc-950">
                    Eis que surgem os estados intermediários entre a normalidade e o incidente.
                </h2>

                <div className="mt-8 grid gap-3 md:grid-cols-5">
                    {regimes.map((regime) => (
                        <div
                            key={regime.name}
                            className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-4"
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-zinc-950">
                                {regime.name}
                            </p>

                            <p className="mt-3 text-sm leading-6 text-zinc-600">
                                {regime.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-6 rounded-2xl border border-violet-200 bg-violet-50/40 p-6">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                        O que isso significava
                    </p>

                    <p className="mt-4 max-w-6xl text-base leading-7 text-zinc-700">
                        Isso permitia observar a evolução operacional antes do incidente explícito,
                        identificando quando uma operação ainda estava absorvendo pressão,
                        quando começava a perder recuperação natural e quando já demonstrava
                        sinais estruturais de ruptura iminente.
                    </p>
                </div>
            </div>
        </section>
    );
}