import { CheckCircle2, XCircle } from "lucide-react";

const comparisons = [
    {
        traditional: "O sistema caiu?",
        ohrly: "O comportamento começou a degradar?",
    },
    {
        traditional: "Existe erro explícito?",
        ohrly: "A operação ainda consegue se recuperar sozinha?",
    },
    {
        traditional: "A latência passou do threshold?",
        ohrly: "O desvio já ultrapassou o ciclo natural da operação?",
    },
    {
        traditional: "O serviço está disponível?",
        ohrly: "O fluxo continua coerente após as mudanças?",
    },
    {
        traditional: "Houve incidente?",
        ohrly: "Quanto tempo estamos na zona cinzenta sem perceber?",
    },
];

export default function ThirdSection() {
    return (
        <section className="px-12 py-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-violet-300">
                Por que observabilidade tradicional não é suficiente
            </p>

            <h2 className="mt-4 text-4xl font-semibold tracking-tight text-white">
                O problema não é apenas detectar falhas.
                <br />
                É perceber quando a operação começou a perder coerência.
            </h2>

            <div className="mt-12 overflow-hidden rounded-3xl border border-white/10 bg-[#0B0B12]">
                {/* Header */}
                <div className="grid grid-cols-2 border-b border-white/10">
                    <div className="border-r border-white/10 px-6 py-5">
                        <div className="flex items-center gap-3">
                            <XCircle className="h-5 w-5 text-red-400" />

                            <div>
                                <p className="text-sm font-medium text-red-300">
                                    Ferramentas tradicionais
                                </p>

                                <p className="mt-1 text-sm text-slate-400">
                                    Respondem quando algo quebrou.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="px-6 py-5">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="h-5 w-5 text-violet-300" />

                            <div>
                                <p className="text-sm font-medium text-violet-200">
                                    Ohrly
                                </p>

                                <p className="mt-1 text-sm text-slate-400">
                                    Responde quando o comportamento mudou.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Rows */}
                <div>
                    {comparisons.map((item, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-2 border-b border-white/5 last:border-none"
                        >
                            <div className="border-r border-white/5 px-6 py-5 text-sm text-slate-300">
                                {item.traditional}
                            </div>

                            <div className="px-6 py-5 text-sm text-violet-100">
                                {item.ohrly}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}