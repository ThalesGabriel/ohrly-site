import {
    Activity,
    AlertTriangle,
    ArrowRight,
    BrainCircuit,
    Clock3,
    GitBranch,
    ShieldAlert,
    TrendingDown,
} from "lucide-react";

const timeline = [
    {
        period: "02 Jan → 07 Mai",
        state: "NORMAL",
        duration: "125 dias",
        signal: "EXECUÇÃO",
        description:
            "A operação permaneceu próxima do comportamento histórico esperado durante um longo período de estabilidade adaptativa.",
        tone: "border-emerald-200 bg-emerald-50 text-emerald-800",
    },
    {
        period: "20 Mai → 09 Jun",
        state: "OSCILAÇÃO",
        duration: "21 dias",
        signal: "ATENDIDA",
        description:
            "As variações começaram a aparecer, mas ainda eram absorvidas naturalmente pela operação.",
        tone: "border-zinc-200 bg-zinc-50 text-zinc-700",
    },
    {
        period: "21 Jul → 13 Ago",
        state: "SINAL_PERSISTENTE",
        duration: "24 dias",
        signal: "ATENDIDA",
        description:
            "Os desvios deixaram de parecer ruído pontual e começaram a persistir acima do padrão histórico.",
        tone: "border-amber-200 bg-amber-50 text-amber-800",
    },
    {
        period: "14 Ago → 27 Ago",
        state: "DEGRADAÇÃO_LOCALIZADA",
        duration: "13 dias",
        signal: "ATENDIDA",
        description:
            "A pressão passou a se concentrar em estados intermediários, indicando perda localizada de capacidade de resolução.",
        tone: "border-orange-200 bg-orange-50 text-orange-800",
    },
    {
        period: "28 Ago → 10 Set",
        state: "DEGRADAÇÃO_SUSTENTADA",
        duration: "14 dias",
        signal: "ATENDIDA",
        description:
            "A operação entrou em um regime persistente de degradação com sinais claros de perda da capacidade natural de recuperação.",
        tone: "border-violet-200 bg-violet-50 text-violet-800",
    },
];

const discoveries = [
    {
        icon: Clock3,
        title: "A degradação surgiu progressivamente",
        text:
            "O comportamento operacional não colapsou de uma vez. Ele atravessou múltiplos estados intermediários antes da ruptura sustentada.",
    },
    {
        icon: GitBranch,
        title: "Os sinais persistiram antes da ruptura",
        text:
            "Os primeiros sinais persistentes apareceram semanas antes do regime de degradação sustentada.",
    },
    {
        icon: TrendingDown,
        title: "A recuperação foi sendo perdida gradualmente",
        text:
            "A operação primeiro absorvia pressão, depois começou a persistir em drift até perder capacidade natural de retorno.",
    },
];

export function NinethQuery() {
    return (
        <section className="border-t border-zinc-200 bg-white px-12 py-10">
            <div className="max-w-7xl">
                <span className="mb-4 inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                    Timeline comportamental operacional
                </span>

                <h2 className="max-w-6xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                    A operação não entrou em degradação de uma vez.
                    Ela atravessou uma trajetória progressiva de perda adaptativa.
                </h2>

                <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-600">
                    A última leitura reorganizou os episódios em uma timeline contínua.
                    Pela primeira vez, o Ohrly deixou de mostrar apenas estados isolados
                    e passou a interpretar a evolução comportamental da operação ao longo do tempo.
                </p>

                <p className="mt-4 max-w-6xl text-base leading-7 text-zinc-600">
                    Isso permitiu observar quando a operação começou a oscilar,
                    quando os sinais passaram a persistir e quando a recuperação natural
                    efetivamente deixou de acontecer.
                </p>

                <div className="mt-10 space-y-4">
                    {timeline.map((item, index) => (
                        <div
                            key={item.period}
                            className={`rounded-3xl border p-6 shadow-sm ${item.tone}`}
                        >
                            <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                                <div className="max-w-4xl">
                                    <div className="flex flex-wrap items-center gap-3">
                                        <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
                                            {item.period}
                                        </p>

                                        <span className="rounded-full bg-white/60 px-3 py-1 text-xs font-medium">
                                            {item.duration}
                                        </span>
                                    </div>

                                    <h3 className="mt-3 text-2xl font-semibold tracking-tight">
                                        {item.state}
                                    </h3>

                                    <p className="mt-4 text-base leading-7 opacity-90">
                                        {item.description}
                                    </p>
                                </div>

                                <div className="shrink-0 rounded-2xl bg-white/60 p-4 md:w-[220px]">
                                    <p className="text-xs font-semibold uppercase tracking-[0.16em] opacity-70">
                                        Sinal dominante
                                    </p>

                                    <p className="mt-2 text-lg font-semibold">
                                        {item.signal}
                                    </p>
                                </div>
                            </div>

                            {index < timeline.length - 1 && (
                                <div className="mt-6 flex justify-center opacity-40">
                                    <ArrowRight className="h-5 w-5 rotate-90" />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-10">
                    <div className="max-w-5xl">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                            O que a timeline revelou
                        </p>

                        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950">
                            O problema mais caro não surgiu no incidente.
                            Ele começou muito antes.
                        </h3>
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        {discoveries.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
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
                </div>

                <div className="mt-10 rounded-3xl border border-zinc-200 bg-zinc-50/50 p-8">
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                            <BrainCircuit className="h-6 w-6" />
                        </div>

                        <div>
                            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                                O salto final
                            </p>

                            <h3 className="mt-1 text-2xl font-semibold tracking-tight text-zinc-950">
                                A operação passou a possuir memória comportamental.
                            </h3>
                        </div>
                    </div>

                    <p className="mt-6 max-w-5xl text-base leading-7 text-zinc-600">
                        O modelo deixou de interpretar apenas eventos isolados.
                        Agora ele conseguia reconstruir a trajetória operacional:
                        como a degradação começou, como evoluiu, quanto tempo persistiu
                        e quando a capacidade natural de recuperação foi efetivamente perdida.
                    </p>

                    <p className="mt-5 max-w-5xl text-base leading-7 text-zinc-600">
                        Isso transformou estados operacionais em narrativa contínua,
                        permitindo entender não apenas que havia degradação,
                        mas como a operação foi deixando de voltar ao normal ao longo do tempo.
                    </p>
                </div>

                <div className="mt-10 rounded-3xl border border-violet-200 bg-violet-50/50 p-8">
                    <div className="flex items-center gap-3">
                        <ShieldAlert className="h-5 w-5 text-violet-700" />

                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                            Insight estrutural
                        </p>
                    </div>

                    <p className="mt-5 max-w-5xl text-base leading-7 text-zinc-700">
                        A degradação sustentada não apareceu de forma repentina.
                        O modelo identificou pelo menos 24 dias de sinais persistentes
                        antes da operação entrar em um regime claro de perda adaptativa.
                    </p>

                    <p className="mt-5 max-w-5xl text-base leading-7 text-zinc-700">
                        Isso sugere que o maior custo operacional não está apenas no incidente,
                        mas no tempo em que a operação permanece degradando silenciosamente
                        sem interpretação suficiente para tomada de decisão antecipada.
                    </p>
                </div>
            </div>
        </section>
    );
}