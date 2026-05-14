import {
    Activity,
    Clock,
    GitBranch,
    MapPinned,
} from "lucide-react";

const discoveries = [
    {
        icon: Activity,
        title: "A operação não degradava de forma binária",
        text: "Mesmo com atendimentos acontecendo, alguns RPAs já acumulavam estados intermediários e perda gradual de consistência.",
    },
    {
        icon: Clock,
        title: "Persistência importava mais que pico",
        text: "O sinal relevante não era um dia ruim isolado, mas a permanência em atenção ou degradação ao longo do tempo.",
    },
    {
        icon: MapPinned,
        title: "A degradação era localizada",
        text: "Algumas regiões apresentavam comportamento pior antes que a visão agregada da operação parecesse crítica.",
    },
    {
        icon: GitBranch,
        title: "Estados intermediários revelavam pressão operacional",
        text: "PREPARAÇÃO, EXECUÇÃO e PENDÊNCIA indicavam perda de fluidez antes de qualquer colapso explícito.",
    },
];

export function FirstQueryInsightSection() {
    return (
        <section className="border-t border-zinc-200 bg-white px-12 py-10">
            <div className="">
                <div className="max-w-6xl">
                    <span className="mb-4 inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                        Primeira leitura operacional
                    </span>

                    <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                        A primeira leitura buscava entender se a operação ainda se comportava como deveria ao
                        longo do tempo.
                    </h2>

                    <p className="mt-5 text-base leading-7 text-zinc-600">
                        Ao combinar distribuição de estados, envelhecimento operacional,
                        persistência temporal e recorte por RPA, o Ohrly transformou sinais
                        dispersos em um primeiro estado contínuo de consistência operacional.
                    </p>
                </div>


                <div className="mt-6 grid gap-4 md:grid-cols-4">
                    {discoveries.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5 flex flex-col justify-between"
                            >
                                <div className="flex gap-[10px] items-center">
                                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100 text-violet-700">
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

                <div className="mt-5 rounded-3xl border border-violet-200 p-8">
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                        Insight central
                    </p>
                    <p className="mt-5 text-base text-zinc-700">
                        Antes de qualquer degradação explícita, a operação começou a perder
                        capacidade natural de recuperação. Persistência crescente,
                        envelhecimento operacional e degradação localizada já indicavam uma
                        mudança estrutural de comportamento antes que qualquer incidente fosse
                        declarado.
                    </p>
                </div>

            </div>
        </section>
    );
}