const items = [
    {
        title: "Persistência crescente",
        text: "Aumento sustentado de solicitações em estados intermediários.",
    },
    {
        title: "Acima do ciclo natural",
        text: "Persistência acima do ciclo operacional de recuperação esperado.",
    },
    {
        title: "Degradação localizada",
        text: "Impacto inicial concentrado em regiões e serviços específicos.",
    },
    {
        title: "Propagação gradual",
        text: "Degradação se espalhando entre RPAs ao longo das semanas.",
    },
    {
        title: "Perda de adaptabilidade",
        text: "Redução da capacidade natural de absorver e recuperar volume.",
    },
];

export function ObservedState() {
    return (
        <section className="border-b border-zinc-200 px-12 py-10">
            <div className="mb-10">
                <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
                    Estado observado
                </p>

                <h2 className="text-2xl font-bold text-zinc-950">
                    A operação entrou progressivamente em um regime de degradação
                    persistente.
                </h2>
            </div>

            <div className="grid grid-cols-5 gap-8">
                {items.map((item) => (
                    <div key={item.title}>
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-violet-100 text-2xl text-violet-700">
                            ◌
                        </div>

                        <h3 className="mb-2 text-sm font-bold">{item.title}</h3>
                        <p className="text-sm leading-relaxed text-zinc-600">{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}