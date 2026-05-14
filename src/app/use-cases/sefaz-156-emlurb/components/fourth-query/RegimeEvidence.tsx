import {
    Activity,
    AlertTriangle,
    LightbulbIcon,
    Waves,
} from "lucide-react";

const examples = [
    {
        label: "Evento severo",
        rpa: "RPA 1",
        duration: "7 dias",
        cycle: "p90: 11,8 dias",
        magnitude: "82,80",
        description:
            "Magnitude extrema, mas ainda absorvível dentro do metabolismo esperado da operação.",
        tone: "border-amber-200 bg-amber-50 text-amber-800",
    },
    {
        label: "Degradation",
        rpa: "RPA 3",
        duration: "10 dias",
        cycle: "p90: 9,4 dias",
        magnitude: "16,78",
        description:
            "Magnitude menor, mas persistência além do ciclo natural de recuperação.",
        tone: "border-orange-200 bg-orange-50 text-orange-800",
    },
    {
        label: "Pre-incident",
        rpa: "RPA 5",
        duration: "30 dias",
        cycle: "p90: 4 dias",
        magnitude: "32,98",
        description:
            "Persistência extrema com severidade sustentada indicando mudança de regime operacional.",
        tone: "border-violet-200 bg-violet-50 text-violet-800",
    },
];

export function RegimeEvidence() {
    return (
        <div className="border-t border-zinc-200 bg-white px-12 py-10">
            <div className="mt-8">
                <div className="max-w-6xl">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        O que os resultados mostraram
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                        O mesmo comportamento podia indicar riscos completamente diferentes.
                    </h3>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {examples.map((example) => (
                        <div
                            key={example.label}
                            className={`rounded-2xl border p-5 shadow-sm ${example.tone}`}
                        >
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
                                        {example.rpa}
                                    </p>

                                    <h3 className="mt-2 text-lg font-semibold">
                                        {example.label}
                                    </h3>
                                </div>

                                {example.label === "Pre-incident" ? (
                                    <AlertTriangle className="h-5 w-5 opacity-70" />
                                ) : example.label === "Degradation" ? (
                                    <Waves className="h-5 w-5 opacity-70" />
                                ) : (
                                    <Activity className="h-5 w-5 opacity-70" />
                                )}
                            </div>

                            <div className="mt-5 grid grid-cols-3 gap-3 text-sm">
                                <div className="rounded-xl bg-white/60 p-3">
                                    <p className="text-xs font-medium uppercase tracking-[0.16em] opacity-70">
                                        Drift
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        {example.duration}
                                    </p>
                                </div>

                                <div className="rounded-xl bg-white/60 p-3">
                                    <p className="text-xs font-medium uppercase tracking-[0.16em] opacity-70">
                                        Ciclo
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        {example.cycle}
                                    </p>
                                </div>

                                <div className="rounded-xl bg-white/60 p-3">
                                    <p className="text-xs font-medium uppercase tracking-[0.16em] opacity-70">
                                        Magnitude
                                    </p>

                                    <p className="mt-1 font-semibold">
                                        {example.magnitude}
                                    </p>
                                </div>
                            </div>

                            <p className="mt-5 text-sm leading-6 opacity-90">
                                {example.description}
                            </p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6">
                    <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-violet-700 shadow-sm">
                            <LightbulbIcon className="h-5 w-5" />
                        </div>

                        <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                                Implicação
                            </p>

                            <h3 className="mt-1 text-xl font-semibold tracking-tight text-zinc-950">
                                Operações digitais não podem ser interpretadas por thresholds universais, mesmo que sejam móveis.
                            </h3>
                        </div>
                    </div>

                    <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-600">
                        Isso significava que criticidade operacional não dependia apenas da
                        intensidade do desvio, mas da relação entre severidade, persistência e
                        capacidade adaptativa histórica daquela própria operação.
                    </p>
                </div>
            </div>
        </div>
    );
}