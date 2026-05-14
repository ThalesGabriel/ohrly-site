export function YourGains() {
    const comparisons = [
        {
            inside: "Degradação ainda localizada",
            outside: "Degradação já propagada",
        },
        {
            inside: "Sinais mais interpretáveis",
            outside: "Operação mais ambígua",
        },
        {
            inside: "Correções menores e mais reversíveis",
            outside: "Estabilização estrutural mais cara",
        },
        {
            inside: "Maior capacidade natural de recuperação",
            outside: "Recuperação cada vez mais difícil",
        },
        {
            inside: "Menor impacto acumulado",
            outside: "Custo operacional crescente",
        },
    ];

    return (
        <section className="border-b border-zinc-200 px-12 py-10 bg-white">
            <div className="mb-10">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
                    O que você ganha com isso?
                </p>

                <h2 className="text-3xl max-w-5xl font-bold leading-tight text-zinc-950 md:text-4xl">
                    A diferença entre agir cedo e agir tarde não é apenas tempo. <span className="text-violet-600">É Estratégia.</span>
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
                    Se sua empresa cresce, mas continua abaixo do ritmo do mercado, parte desse
                    valor pode estar sendo perdido silenciosamente em degradações operacionais
                    que nunca chegaram a virar incidentes explícitos. O Ohrly torna visível o
                    impacto dessas janelas de decisão para que a operação continue sustentando os
                    resultados que a estratégia espera alcançar.
                </p>
            </div>

            <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
                <div>
                    <div className="rounded-3xl border border-violet-200 bg-violet-50 p-6">
                        <p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-violet-700">
                            O que muda dentro da janela?
                        </p>

                        <h3 className="max-w-md text-2xl font-bold leading-tight text-zinc-950">
                            A operação ainda preserva capacidade de recuperação
                        </h3>

                        <div className="mt-6 space-y-4 text-sm leading-relaxed text-violet-900">
                            <p>
                                Enquanto os impactos ainda não se consolidaram, o comportamento tende
                                a permanecer mais localizado, interpretável e reversível.
                            </p>

                            <p>
                                Isso significa menor custo operacional, menor ambiguidade e maior
                                chance de corrigir o comportamento antes dele se espalhar pela
                                operação.
                            </p>

                            <p className="font-semibold text-zinc-950 text-center">
                                O Ohrly existe para tornar essa janela visível.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                        <p className="text-sm leading-relaxed text-zinc-600">
                            O Ohrly não reduz apenas incidentes. Ele reduz o tempo em que a
                            operação permanece degradando sem clareza suficiente para agir.
                        </p>
                    </div>
                </div>

                <div className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
                    <div className="grid grid-cols-2 border-b border-zinc-200">
                        <div className="bg-emerald-50 p-5">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
                                Dentro da janela
                            </p>

                            <h3 className="mt-2 text-lg font-bold text-zinc-950">
                                Agir ainda é relativamente barato
                            </h3>
                        </div>

                        <div className="bg-red-50 p-5">
                            <p className="text-xs font-bold uppercase tracking-[0.16em] text-red-700">
                                Fora da janela
                            </p>

                            <h3 className="mt-2 text-lg font-bold text-zinc-950">
                                Esperar começou a ficar caro
                            </h3>
                        </div>
                    </div>

                    <div>
                        {comparisons.map((item) => (
                            <div
                                key={item.inside}
                                className="grid grid-cols-2 border-b border-zinc-100 last:border-none"
                            >
                                <div className="flex items-center gap-3 p-5">
                                    <div className="h-2 w-2 rounded-full bg-emerald-500" />

                                    <p className="text-sm leading-relaxed text-zinc-700">
                                        {item.inside}
                                    </p>
                                </div>

                                <div className="flex items-center gap-3 p-5">
                                    <div className="h-2 w-2 rounded-full bg-red-500" />

                                    <p className="text-sm leading-relaxed text-zinc-700">
                                        {item.outside}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}