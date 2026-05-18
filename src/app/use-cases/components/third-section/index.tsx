import { CheckCircle2 } from "lucide-react";
import NumberedSection from "../numbered-section";

export default function ThirdSection() {
    return (
        <NumberedSection
            number="3"
            title="O custo invisível da espera"
        >
            <div className="grid gap-4 md:grid-cols-4">
                {[
                    { title: 'Tolerância', description: "Existe uma percepção de que operações determinísticas exigem apenas espera, não interpretação contínua." },
                    { title: 'Espera', description: "Se uma solicitação foi iniciada, parece natural assumir que basta aguardar sua conclusão. Nem sempre." },
                    { title: 'Evidência', description: "O atraso só se torna um problema após a violação de prazo, mas sua formação já pode ser observada antes disso." },
                    { title: 'Custo invisível', description: "O estudo mostrou que esperar além de certo ponto significa acumular risco operacional silencioso." },
                ].map((item) => (
                    <div>
                        <div
                            key={item.title}
                            className="rounded-2xl border border-zinc-200 bg-white p-5 text-sm leading-6 text-zinc-700 shadow-sm"
                        >
                            <div className="flex gap-[10px] items-center mb-3">
                                <CheckCircle2 className="h-5 w-5 text-indigo-500" />

                                <h3 className="text-sm font-semibold text-zinc-950">
                                    {item.title}
                                </h3>
                            </div>


                            {item.description}
                        </div>
                    </div>
                ))}
            </div>
        </NumberedSection>
    )
}