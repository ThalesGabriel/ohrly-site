export function OperationalCycle() {
    return (
        <section className="border-b border-zinc-200 bg-white px-12 py-10">
            <div className="max-w-4xl">
                <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
                    Ciclo operacional
                </p>

                <h2 className="text-3xl font-bold leading-tight text-zinc-950 md:text-4xl">
                    Toda operação possui um tempo natural de recuperação.
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
                    Pequenas degradações podem acontecer o tempo todo. O que muda entre
                    ruído e problema real é quanto tempo a operação leva para voltar ao
                    comportamento esperado traduzido pelo <span className="font-bold">estado comportamental.</span>
                </p>
            </div>

            <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
                <div className="relative">
                    {/* baseline */}
                    <div className="absolute left-0 right-0 top-[52px] border-t border-dashed border-zinc-300" />

                    {/* timeline */}
                    <div className="relative flex items-center justify-between">
                        {[
                            {
                                title: "Desvio",
                                color: "bg-zinc-400",
                                text: "A operação oscila.",
                            },
                            {
                                title: "Absorção",
                                color: "bg-amber-400",
                                text: "O sistema começa a corrigir.",
                            },
                            {
                                title: "Recuperação",
                                color: "bg-emerald-500",
                                text: "O comportamento retorna ao normal.",
                            },
                        ].map((step) => (
                            <div
                                key={step.title}
                                className="relative z-10 flex flex-col items-center text-center"
                            >
                                <div
                                    className={`h-6 w-6 rounded-full ${step.color} ring-4 ring-white`}
                                />

                                <div className="mt-4 max-w-[180px]">
                                    <p className="text-sm font-semibold text-zinc-950">
                                        {step.title}
                                    </p>

                                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                                        {step.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 rounded-3xl border border-violet-200 bg-violet-50 p-6">
                    <p className="text-sm leading-relaxed text-violet-900">
                        O Ohrly chama esse intervalo de{" "}
                        <span className="font-semibold text-violet-950">
                            ciclo
                        </span>
                        . Enquanto a operação se mantem naquele estado de comportamento
                        um desvio pode indicar apenas ruído, instabilidade ou sazonalidade.
                    </p>
                </div>
            </div>
        </section>
    );
}