export function DecisionGapExplanation() {
    return (
        <section className="relative overflow-hidden border-b border-zinc-200 bg-white px-12 py-10">
            <div className="relative">
                <div>
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
                        Por que isso acontece?
                    </p>

                    <h2 className="max-w-5xl text-3xl font-bold leading-tight text-zinc-950 md:text-4xl">
                        Empresas modernas já observam muitos sinais.{" "}
                        <span className="text-violet-600">
                            O problema é que eles continuam desconectados.
                        </span>
                    </h2>

                    <p className="mt-4 max-w-7xl text-sm leading-relaxed text-zinc-600 md:text-base">
                        A engenharia percebe aumento de retries. Produto começa a enxergar
                        queda de retenção. Operações sentem o crescimento das filas.
                        Negócios observam impacto gradual na receita.
                    </p>

                    <p className="mt-4 max-w-7xl text-sm leading-relaxed text-zinc-600 md:text-base">
                        Cada área vê uma parte da degradação, mas raramente existe uma
                        leitura compartilhada que transforme esses sinais em uma decisão
                        clara antes do incidente. Enquanto isso, a operação continua
                        funcionando, e o custo silencioso continua crescendo.
                    </p>

                    <div className="mt-10 border-l-2 border-violet-500 pl-6">
                        <p className="mt-4 max-w-5xl text-sm font-medium leading-relaxed text-zinc-900 md:text-base">
                            O problema não é falta nem excesso de observabilidade.{" "}
                            <span className="text-violet-600">
                                É a distância entre perceber e agir.
                            </span>
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}