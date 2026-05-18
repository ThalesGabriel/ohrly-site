import { CheckCircle2, XCircle } from "lucide-react";

export default function SixthSection() {
    const notDo = [
        "Substitui APMs, logs ou alertas.",
        "Automatiza decisões críticas.",
        "Prevê tudo ou elimina incertezas.",
        "Executa ações sem julgamento humano.",
    ];

    const does = [
        "Torna degradações silenciosas legíveis.",
        "Reduz ambiguidade operacional.",
        "Antecipa contexto para decisões humanas.",
        "Aumenta confiança em mudanças.",
    ];

    return (
        <section className="border-t border-slate-200 bg-white px-6 py-20 text-slate-950 md:px-12">
            <div className="flex gap-[50px]">
                <div>
                    <div className="flex gap-[10px] items-center">
                        <span className="font-bold text-indigo-600 text-3xl">6.</span>
                        <h2 className="text-2xl font-semibold">
                            Uso do Ohrly
                        </h2>
                    </div>
                </div>

                <div className="flex-1">
                    <div className="grid gap-6 md:grid-cols-2">
                        <div className="rounded-3xl border border-slate-200 p-8">
                            <div className="flex items-center gap-3">
                                <XCircle className="h-6 w-6 text-red-500" />
                                <h3 className="font-semibold">O Ohrly não:</h3>
                            </div>

                            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
                                {notDo.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="rounded-3xl border border-slate-200 p-8">
                            <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-6 w-6 text-emerald-500" />
                                <h3 className="font-semibold">O Ohrly:</h3>
                            </div>

                            <ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600">
                                {does.map((item) => (
                                    <li key={item}>• {item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}