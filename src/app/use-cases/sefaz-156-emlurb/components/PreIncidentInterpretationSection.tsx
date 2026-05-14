import {
    AlertTriangle,
    ArrowRight,
    Clock3,
    Gauge,
    HelpCircle,
    LineChart,
    TimerReset,
} from "lucide-react";

const reasoning = [
    {
        icon: Clock3,
        title: "O ciclo não era o limite final",
        text:
            "O p90 indicava que 90% dos episódios históricos de recuperação terminavam até cerca de 24,8 dias. Um drift de 35 dias já estava fora do comportamento extremo esperado.",
    },
    {
        icon: Gauge,
        title: "A pressão média continuava alta",
        text:
            "A classificação não dependia apenas da duração. O episódio também mantinha pressão média elevada, indicando que a operação não apenas demorou mais, mas permaneceu degradada com intensidade relevante.",
    },
    {
        icon: LineChart,
        title: "O desvio sobreviveu ao ciclo natural",
        text:
            "Quando a pressão ultrapassa o ciclo histórico de recuperação e continua ativa, o comportamento deixa de parecer oscilação absorvível e passa a sugerir mudança de regime.",
    },
];


export function PreIncidentInterpretationSection() {
    return (
        <section className="border-t border-zinc-200 bg-white px-12 py-10">
            <div className="max-w-7xl">
                <span className="mb-4 inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                    Dúvida que surgiu
                </span>

                <h2 className="max-w-6xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                    Quando é que efetivamente entramos em outro estado operacional?
                </h2>

                <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-600">
                    Ultrapassar o p90 já sugeria que a operação estava deixando o comportamento 
                    historicamente esperado de recuperação. Mas chamar algo de pré-incidente 
                    exige mais do que duração: exige evidência de que a operação continuou 
                    sob pressão relevante depois de perder sua capacidade histórica de retorno.
                </p>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                    {reasoning.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
                            >
                                <div className="flex items-center gap-3">
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
            </div>
        </section>
    );
}
