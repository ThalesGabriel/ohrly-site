const operationalEvolution = [
    {
        title: "Oscilações absorvíveis",
        description:
            "A operação ainda conseguia absorver pequenas variações naturalmente.",
        color: "bg-emerald-500",
    },
    {
        title: "Persistência crescente",
        description:
            "O comportamento começou a sobreviver além do esperado para aquele fluxo.",
        color: "bg-amber-500",
    },
    {
        title: "Perda de recuperação",
        description:
            "A operação começou a demorar mais para voltar ao comportamento saudável.",
        color: "bg-orange-500",
    },
    {
        title: "Degradação localizada",
        description:
            "A degradação deixou de parecer ruído e passou a afetar partes específicas da jornada.",
        color: "bg-red-500",
    },
    {
        title: "Degradação sustentada",
        description:
            "Esperar começou a ficar estruturalmente caro para estabilizar a operação.",
        color: "bg-red-700",
    },
];

export function ComparisonSection() {
    return (
        <section className="border-b border-zinc-200 px-12 py-10 bg-white">
            <div className="mb-10">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
                    Camadas complementares
                </p>

                <h2 className="text-3xl font-bold leading-tight text-zinc-950 md:text-4xl">
                    O Ohrly é um <span className="text-violet-600">complemento</span> às suas boas práticas.
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-zinc-600 md:text-base">
                    Observabilidade técnica, BI e dashboards continuam essenciais.
                    O Ohrly atua em outra camada: transforma persistência, recuperação e
                    propagação em uma leitura operacional compartilhada.
                </p>
            </div>

            <div className=" overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm">
                <div className="grid grid-cols-3 border-b border-zinc-200 bg-zinc-50">
                    <div className="p-5 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                        Camada
                    </div>

                    <div className="p-5 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                        Mostra
                    </div>

                    <div className="p-5 text-xs font-bold uppercase tracking-[0.16em] text-zinc-500">
                        O que o Ohrly adiciona
                    </div>
                </div>

                {[
                    [
                        "Observabilidade",
                        "Saúde técnica da infraestrutura",
                        "Quando a operação começou a perder recuperação natural",
                    ],
                    [
                        "BI / Analytics",
                        "Resultados consolidados",
                        "Quando o comportamento começou a mudar",
                    ],
                    [
                        "Dashboards",
                        "Métricas e volumes operacionais",
                        "Uma leitura única entre os times",
                    ],
                    [
                        "Plataformas conversacionais / CRM",
                        "Atendimento, automação, relacionamento e gestão comercial",
                        "Quando pequenas mudanças começam a degradar a consistência dos fluxos",
                    ],
                ].map(([layer, existing, ohrly]) => (
                    <div
                        key={layer}
                        className="grid grid-cols-3 border-b border-zinc-100 last:border-none"
                    >
                        <div className="p-5 text-sm font-semibold text-zinc-900">
                            {layer}
                        </div>

                        <div className="p-5 text-sm leading-relaxed text-zinc-600">
                            {existing}
                        </div>

                        <div className="p-5 text-sm leading-relaxed text-zinc-800">
                            {ohrly}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}