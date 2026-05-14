import {
    Activity,
    ArrowRight,
    RefreshCcw,
    Waves,
} from "lucide-react";

const comparisons = [
    {
        icon: Activity,
        title: "Pressão intensa, mas recuperável",
        text:
            "Alguns RPAs apresentavam picos operacionais relevantes, mas retornavam naturalmente ao comportamento esperado poucos dias depois.",
        tone: "border-emerald-200 bg-emerald-50/70",
    },
    {
        icon: Waves,
        title: "Pressão moderada, mas persistente",
        text:
            "Outras regiões permaneciam degradadas por longos períodos mesmo sem apresentar os maiores níveis de impacto na operação.",
        tone: "border-orange-200 bg-orange-50/70",
    },
];

export function RecoveryTransitionSection() {
    return (
        <section className="border-t border-zinc-200 bg-white px-12 py-10">
            <div className="max-w-7xl">
                <span className="mb-4 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
                    O comportamento que mudou a análise
                </span>

                <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                    Nem toda degradação persistia da mesma forma.
                </h2>

                <p className="mt-5 max-w-7xl text-base leading-7 text-zinc-600">
                    Conforme os desvios passaram a ser observados ao longo do tempo, surgiu
                    uma diferença importante entre os comportamentos da operação.
                    Algumas regiões apresentavam variações intensas em determinados períodos,
                    mas conseguiam retornar naturalmente ao comportamento esperado poucos dias
                    depois.
                </p>

                <p className="mt-4 max-w-7xl text-base leading-7 text-zinc-600">
                    Outras regiões, porém, permaneciam afastadas do padrão saudável mesmo sem
                    apresentar os maiores picos observados no sistema. Isso sugeria que
                    diferentes tipos de desvio estavam acontecendo ao mesmo tempo, e que
                    intensidade isolada não explicava completamente o comportamento
                    da operação.
                </p>

                <p className="mt-4 max-w-7xl text-base leading-7 text-zinc-600">

                </p>

                <div className="mt-5 grid gap-4 md:grid-cols-[0.8fr_1.2fr]">
                    <div className="flex flex-col justify-between">
                        {comparisons.map((item) => {
                            const Icon = item.icon;

                            return (
                                <div
                                    key={item.title}
                                    className={`rounded-3xl border p-6 ${item.tone}`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-700 shadow-sm">
                                            <Icon className="h-5 w-5" />
                                        </div>

                                        <h3 className="text-sm font-semibold text-zinc-950">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <p className="mt-4 text-sm leading-6 text-zinc-700">
                                        {item.text}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="rounded-3xl border border-violet-200 bg-violet-50/40 p-8">
                        <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-violet-700 shadow-sm">
                                <RefreshCcw className="h-5 w-5" />
                            </div>

                            <div>
                                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                                    A pergunta que surgiu
                                </p>

                                <h3 className="mt-1 text-xl font-semibold tracking-tight text-zinc-950">
                                    O problema era realmente a pressão?
                                </h3>
                            </div>
                        </div>

                        <p className="mt-5 max-w-5xl text-base leading-7 text-zinc-700">
                            A diferença entre esses comportamentos sugeria que o problema não
                            estava apenas na intensidade da pressão operacional.
                        </p>

                        <p className="mt-4 max-w-5xl text-base leading-7 text-zinc-700">
                            O ponto crítico parecia surgir quando a operação deixava de absorver
                            perturbações naturalmente e passava a permanecer degradada por tempo
                            suficiente para alterar seu comportamento esperado.
                        </p>

                        <p className="mt-4 max-w-5xl text-base leading-7 text-zinc-700">
                            Isso levou a uma nova hipótese: <span className="font-bold">Talvez operações não degradem quando
                            surgem desvios, mas quando perdem capacidade de retornar sozinhas ao
                            equilíbrio operacional.</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}