export function Introduction() {
    return (
        <section className="border-b border-zinc-200 bg-[#faf8f5] px-12 py-20">
            <div className="mx-auto max-w-6xl">
                <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                    Estudo de caso
                </span>

                <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight text-zinc-950">
                    Como uma operação digital começa a deixar de voltar ao normal antes do incidente explícito.
                </h1>

                <p className="mt-8 max-w-4xl text-xl leading-9 text-zinc-700">
                    Este estudo não busca detectar falhas explícitas.
                    Ele busca entender como operações digitais degradam
                    progressivamente ao longo do tempo mesmo quando ainda parecem funcionar.
                </p>

                <div className="mt-14 grid gap-6 md:grid-cols-2">
                    <div className="rounded-3xl border border-zinc-200 bg-white p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                            Para quem esse estudo faz sentido
                        </p>

                        <div className="mt-6 space-y-4 text-base leading-7 text-zinc-700">
                            <p>
                                Para operações digitais onde o problema mais caro
                                raramente começa como incidente.
                            </p>

                            <p>
                                Onde dashboards continuam verdes enquanto:
                            </p>

                            <ul className="space-y-3 pl-4 text-zinc-600">
                                <li>• filas começam a persistir</li>
                                <li>• retrabalho aumenta gradualmente</li>
                                <li>• estados intermediários acumulam pressão</li>
                                <li>• o sistema “ainda funciona”, mas claramente pior</li>
                                <li>• o time sente degradação antes das métricas críticas</li>
                            </ul>
                        </div>
                    </div>

                    <div className="rounded-3xl border border-violet-200 bg-violet-50/40 p-8">
                        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                            O que será observado aqui
                        </p>

                        <div className="mt-6 space-y-4 text-base leading-7 text-zinc-700">
                            <p>
                                Em vez de analisar incidentes isolados, o estudo
                                acompanha a trajetória comportamental da operação:
                            </p>

                            <ul className="space-y-3 pl-4">
                                <li>• persistência operacional</li>
                                <li>• capacidade natural de recuperação</li>
                                <li>• propagação de pressão</li>
                                <li>• degradação progressiva</li>
                                <li>• estabilidade adaptativa</li>
                                <li>• janela operacional de decisão</li>
                            </ul>

                            <p className="pt-2 font-medium text-zinc-950">
                                O objetivo não é descobrir quando o sistema caiu.
                                É entender quando ele começou a deixar de voltar ao normal.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-14 rounded-3xl border border-zinc-200 bg-white p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
                        O que este estudo representa
                    </p>

                    <p className="mt-6 max-w-5xl text-2xl font-semibold tracking-tight text-zinc-950">
                        Uma exploração sobre comportamento operacional contínuo.
                    </p>

                    <p className="mt-5 max-w-4xl text-base leading-7 text-zinc-700">
                        Ao longo das leituras, o Ohrly evolui de uma simples
                        interpretação de consistência operacional para um modelo
                        capaz de observar propagação, recuperação, arquétipos
                        comportamentais e memória operacional ao longo do tempo.
                    </p>
                </div>
            </div>
        </section>
    );
}