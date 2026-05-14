import {
    ArrowRight,
    BrainCircuit,
    Clock3,
    GitCompare,
    ShieldAlert,
    TrendingUp,
} from "lucide-react";

const discoveries = [
    {
        icon: Clock3,
        title: "O tempo deixou de ser absoluto",
        text:
            "O mesmo tempo em drift produzia interpretações completamente diferentes dependendo do comportamento histórico da operação.",
    },
    {
        icon: TrendingUp,
        title: "A severidade também era relativa",
        text:
            "Magnitudes altas podiam ser absorvidas rapidamente enquanto magnitudes menores se tornavam estruturalmente perigosas quando persistiam além do esperado.",
    },
    {
        icon: GitCompare,
        title: "O contexto operacional importava",
        text:
            "Uma degradação localizada podia permanecer controlável por semanas enquanto eventos severos com propagação relevante exigiam ação imediata.",
    },
];

const zones = [
    {
        label: "EARLY_RECOVERY_ZONE",
        description:
            "A operação ainda mantém capacidade natural de recuperação.",
        examples:
            "Oscilações absorvíveis, eventos curtos e reversões espontâneas.",
        tone: "border-emerald-200 bg-emerald-50 text-emerald-800",
    },
    {
        label: "CRITICAL_RECOVERY_ZONE",
        description:
            "A operação começa a perder estabilidade adaptativa.",
        examples:
            "Persistência crescente, sinais relevantes e degradações localizadas.",
        tone: "border-amber-200 bg-amber-50 text-amber-800",
    },
    {
        label: "EXPENSIVE_RECOVERY_ZONE",
        description:
            "O custo de esperar começa a crescer estruturalmente.",
        examples:
            "Drifts sustentados, recuperação improvável e pressão acumulada.",
        tone: "border-violet-200 bg-violet-50 text-violet-800",
    },
];

const evidences = [
    {
        metric: "RPA 3",
        value: "RPI 1082",
        insight:
            "30 dias de drift com persistência além do ciclo natural e recuperação já economicamente cara.",
    },
    {
        metric: "RPA 1",
        value: "82.8 magnitude",
        insight:
            "Mesmo com severidade extrema, o episódio permaneceu absorvível dentro da capacidade histórica de recuperação.",
    },
    {
        metric: "RPA 4",
        value: "39 dias",
        insight:
            "Persistência extrema com estabilidade adaptativa baixa indicava mudança estrutural de comportamento.",
    },
];

export function EighthQuery() {
    return (
        <section className="border-t border-zinc-200 bg-white px-12 py-10">
            <div className="max-w-7xl">
                <span className="mb-4 inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                    Evolução do modelo
                </span>

                <h2 className="max-w-6xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                    A operação não perdia estabilidade em um instante.
                    Ela atravessava zonas progressivas de recuperação.
                </h2>

                <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-600">
                    Conforme os episódios começaram a ser comparados entre si,
                    surgiu uma nova percepção: o problema não era apenas detectar
                    degradação, mas entender quando a operação ainda conseguia
                    retornar naturalmente ao comportamento esperado.
                </p>

                <p className="mt-4 max-w-6xl text-base leading-7 text-zinc-600">
                    Isso levou o Ohrly a reinterpretar a degradação não como um
                    estado binário, mas como uma trajetória contínua entre
                    recuperação natural, perda adaptativa e recuperação
                    economicamente cara.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {discoveries.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <h3 className="text-sm font-semibold text-zinc-950">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="mt-4 text-sm leading-6 text-zinc-600">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50/50 p-8">
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                            <BrainCircuit className="h-6 w-6" />
                        </div>

                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                Novo salto conceitual
                            </p>

                            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">
                                A recuperação virou um espaço interpretável.
                            </h3>
                        </div>
                    </div>

                    <p className="mt-6 max-w-5xl text-base leading-7 text-zinc-600">
                        Entre o funcionamento saudável e o incidente explícito,
                        existia uma janela operacional onde a recuperação ainda era
                        possível — mas progressivamente mais cara, lenta e improvável.
                    </p>

                    <div className="mt-8 flex flex-col gap-4 md:flex-row md:items-stretch">
                        {zones.map((zone, index) => (
                            <div
                                key={zone.label}
                                className={`flex-1 rounded-2xl border p-5 ${zone.tone}`}
                            >
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
                                    {zone.label}
                                </p>

                                <p className="mt-4 text-sm leading-6 font-medium">
                                    {zone.description}
                                </p>

                                <p className="mt-4 text-sm leading-6 opacity-90">
                                    {zone.examples}
                                </p>

                                {index < zones.length - 1 && (
                                    <div className="mt-6 hidden md:flex justify-end opacity-40">
                                        <ArrowRight className="h-4 w-4" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10">
                    <div className="max-w-5xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                            O que os resultados mostraram
                        </p>

                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                            A degradação passou a ser interpretada como perda
                            progressiva de recuperabilidade.
                        </h3>
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        {evidences.map((item) => (
                            <div
                                key={item.metric}
                                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
                            >
                                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                                    {item.metric}
                                </p>

                                <p className="mt-3 text-3xl font-semibold tracking-tight text-zinc-950">
                                    {item.value}
                                </p>

                                <p className="mt-4 text-sm leading-6 text-zinc-600">
                                    {item.insight}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-10 rounded-3xl border border-violet-200 bg-violet-50/50 p-8">
                    <div className="flex items-center gap-3">
                        <ShieldAlert className="h-5 w-5 text-violet-700" />

                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                            Insight estrutural
                        </p>
                    </div>

                    <p className="mt-5 max-w-5xl text-base leading-7 text-zinc-700">
                        O problema mais caro da operação não era o incidente em si.
                        Era permanecer tempo demais em zonas onde a recuperação já
                        estava se tornando improvável sem que isso ainda parecesse
                        crítico para ferramentas tradicionais.
                    </p>

                    <p className="mt-5 max-w-5xl text-base leading-7 text-zinc-700">
                        O Ohrly começou então a interpretar não apenas se havia
                        degradação, mas quanto da capacidade adaptativa da operação
                        ainda permanecia disponível antes que esperar se tornasse caro.
                    </p>
                </div>
            </div>
        </section>
    );
}