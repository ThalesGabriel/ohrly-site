export function Conclusion() {
    return (
        <section className="border-t border-zinc-200 bg-[#faf8f5] px-12 py-20">
            <div className="mx-auto max-w-6xl">
                <span className="inline-flex rounded-full bg-violet-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                    Conclusão do estudo
                </span>

                <h2 className="mt-6 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl">
                    A degradação operacional não surgiu como incidente.
                    Ela surgiu como comportamento.
                </h2>

                <div className="mt-10 space-y-6 text-lg leading-8 text-zinc-700">
                    <p>
                        O estudo começou tentando identificar desvios operacionais.
                        Mas conforme os episódios passaram a ser observados ao longo
                        do tempo, ficou claro que o problema não era apenas detectar
                        falhas explícitas.
                    </p>

                    <p>
                        A operação degradava progressivamente antes do incidente:
                        primeiro absorvendo pressão, depois persistindo acima do
                        comportamento esperado, perdendo capacidade natural de
                        recuperação e finalmente entrando em regimes sustentados
                        de degradação.
                    </p>

                    <p>
                        Isso revelou que operações digitais possuem dinâmica
                        adaptativa própria. Elas oscilam, recuperam, persistem,
                        propagam pressão e mudam de comportamento continuamente —
                        mesmo quando ainda parecem “funcionar”.
                    </p>

                    <p>
                        A partir disso, a Ohrly deixou de interpretar apenas métricas
                        isoladas e passou a interpretar trajetória operacional:
                        como a degradação começa, como evolui, quanto tempo persiste
                        e quando esperar começa a ficar caro demais.
                    </p>

                    <p className="font-medium text-zinc-950">
                        O problema mais caro não era o incidente.
                        Era o tempo em que a operação já estava deixando de voltar
                        ao normal sem que isso ainda parecesse crítico.
                    </p>
                </div>

                <div className="mt-14 rounded-3xl border border-violet-200 bg-violet-50/50 p-10">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                        O que nasceu desse estudo
                    </p>

                    <p className="mt-6 text-2xl font-semibold tracking-tight text-zinc-950">
                        Behavioral Operational Intelligence
                    </p>

                    <p className="mt-5 max-w-4xl text-base leading-7 text-zinc-700">
                        Uma abordagem interpretativa onde operações deixam de ser
                        observadas apenas por incidentes, thresholds ou dashboards
                        estáticos e passam a ser compreendidas através do seu
                        comportamento ao longo do tempo.
                    </p>
                </div>
            </div>

            <div className="mt-14 rounded-3xl border border-zinc-200 bg-white p-10">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                    O que consideramos sucesso
                </p>

                <div className="mt-8 space-y-5 text-base leading-7 text-zinc-700">
                    <p>
                        O objetivo deste estudo não era prever incidentes perfeitamente
                        nem substituir observabilidade tradicional.
                    </p>

                    <p>
                        O objetivo era validar se operações possuem sinais estruturais
                        de degradação antes que o problema se torne explicitamente crítico.
                    </p>

                    <p>
                        Consideramos sucesso:
                    </p>

                    <ul className="space-y-3 border-l border-violet-200 pl-6">
                        <li>
                            • identificar persistência operacional antes do colapso explícito
                        </li>

                        <li>
                            • detectar perda de recuperação natural da operação
                        </li>

                        <li>
                            • distinguir ruído operacional de degradação sustentada
                        </li>

                        <li>
                            • interpretar estabilidade adaptativa ao longo do tempo
                        </li>

                        <li>
                            • transformar comportamento operacional em linguagem legível
                        </li>

                        <li>
                            • formalizar operacionalmente a tese da Ohrly
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}