import {
    Activity,
    GitBranch,
    Layers3,
    Network,
    RefreshCcw,
    Timer,
} from "lucide-react";

const interpretationLayers = [
    {
        icon: Activity,
        title: "Comportamento esperado",
        description:
            "Entende como a operação costuma funcionar quando está saudável.",
    },
    {
        icon: Layers3,
        title: "Contexto operacional",
        description:
            "Compara sinais por fluxo, região, período, canal ou tipo de jornada.",
    },
    {
        icon: GitBranch,
        title: "Distribuição dos estados",
        description:
            "Observa quando a operação começa a acumular etapas intermediárias.",
    },
    {
        icon: Timer,
        title: "Persistência temporal",
        description:
            "Diferencia variação pontual de mudança sustentada de comportamento.",
    },
    {
        icon: RefreshCcw,
        title: "Capacidade de recuperação",
        description:
            "Avalia se a operação consegue voltar ao padrão dentro do ciclo esperado.",
    },
    {
        icon: Network,
        title: "Propagação operacional",
        description:
            "Identifica quando uma degradação localizada começa a afetar outros pontos.",
    },
];
export default function SecondSection() {
    return (
        <section className="border-t border-slate-200 bg-white px-6 py-20 text-slate-950 md:px-12">
            <div>
                <div className="flex gap-[10px] items-center">
                    <span className="font-bold text-indigo-600 text-3xl">2.</span>
                    <h2 className="text-2xl font-semibold">
                        Como o Ohrly atua?
                    </h2>
                </div>

                <p className="mt-4 leading-7 text-slate-600">
                    Ele interpreta como a operação se comporta ao longo do tempo, dentro do seu próprio
                    contexto, e identifica quando esse comportamento começa a perder consistência.
                </p>
            </div>

            <div className="flex gap-[10px] mt-10 md:flex-col lg:flex-row">
                {interpretationLayers.map((item) => {
                    const Icon = item.icon;

                    return (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-indigo-100 bg-white text-indigo-600">
                                <Icon className="h-6 w-6" />
                            </div>

                            <h3 className="mt-5 font-semibold text-slate-950">
                                {item.title}
                            </h3>

                            <p className="mt-3 text-sm leading-6 text-slate-600">
                                {item.description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}