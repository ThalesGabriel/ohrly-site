import {
    Activity,
    ArrowRight,
    Gauge,
    GitCompare,
    RotateCcw,
    TrendingDown,
} from "lucide-react";

const signals = [
    {
        icon: GitCompare,
        title: "Comparar contra o próprio baseline",
        text:
            "A segunda leitura deixou de usar limites absolutos e passou a perguntar se cada RPA ainda se comportava como ela mesma historicamente.",
    },
    {
        icon: TrendingDown,
        title: "Detectar perda de recuperação",
        text:
            "Quando a taxa de atendimento ficava abaixo do baseline esperado por uma janela contínua, o modelo passava a interpretar perda de capacidade de resolução operacional.",
    },
    {
        icon: Activity,
        title: "Observar pressão em estados intermediários",
        text:
            "PREPARAÇÃO, EXECUÇÃO e PENDÊNCIA acima do comportamento esperado indicavam perda gradual de fluidez operacional.",
    },
    {
        icon: Gauge,
        title: "Transformar desvio em pressão operacional",
        text:
            "O bottleneck pressure consolidou persistência, excesso e degradação relativa em uma leitura contínua de pressão.",
    },
];

const states = [
    {
        label: "NORMAL",
        description:
            "A operação absorve a perturbação e retorna naturalmente ao baseline.",
        tone: "border-emerald-200 bg-emerald-50 text-emerald-700",
    },
    {
        label: "EARLY_PRESSURE",
        description:
            "A recuperação começa a desacelerar, mas ainda parece reversível.",
        tone: "border-amber-200 bg-amber-50 text-amber-700",
    },
    {
        label: "BOTTLENECK_ATTENTION",
        description:
            "A pressão persiste além do comportamento esperado da operação.",
        tone: "border-orange-200 bg-orange-50 text-orange-700",
    },
    {
        label: "EMERGING_BOTTLENECK",
        description:
            "A operação deixa de retornar sozinha ao comportamento saudável.",
        tone: "border-violet-200 bg-violet-50 text-violet-700",
    },
];

export function OperationalRecoveryComponent() {
    return (
        <section className="border-t border-zinc-200 bg-white px-12 py-10">
            <div>
                <div className="max-w-6xl">
                    <span className="mb-4 inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                        Segunda leitura comportamental
                    </span>

                    <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                        A perda da capacidade de voltar ao comportamento saudável
                    </h2>

                    <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-600">
                        A segunda query introduziu uma mudança central no modelo do Ohrly:
                        em vez de perguntar se uma métrica passou de um limite absoluto, ela
                        passou a identificar quando cada RPA se afastava do próprio baseline e
                        permanecia tempo suficiente fora do padrão para sugerir perda de recuperação natural.
                    </p>
                </div>


                <div className="mt-6 grid gap-4 md:grid-cols-4">
                    {signals.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
                            >
                                <div className="flex gap-[10px] items-center">
                                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <h3 className="text-sm font-semibold text-zinc-950">
                                        {item.title}
                                    </h3>
                                </div>

                                <p className="mt-3 text-sm leading-6 text-zinc-600">
                                    {item.text}
                                </p>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-5 ">
                    <p className="max-w-6xl text-base leading-7 text-zinc-600">
                        A partir disso nós pudemos inferir que se existe um comportamento esperado dada certas condições então é possível construir estados
                        em que elas sejam atendidas de tal forma que o estado saudável do sistema oscila entre eles dentro do que é esperado. Para este caso:
                    </p>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-4">
                    {states.map((state) => (
                        <div
                            key={state.label}
                            className={`rounded-2xl border p-5 ${state.tone}`}
                        >
                            <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                                {state.label}
                            </p>

                            <p className="mt-3 text-sm leading-6 opacity-90">
                                {state.description}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
