import { ArrowRight, CheckCircle2 } from "lucide-react";
import NumberedSection from "../numbered-section";

const timeline = [
    {
        period: "Primeira leitura",
        title: "Todo desvio parecia problema",
        description:
            "Os primeiros modelos interpretavam qualquer persistência acima do baseline como possível degradação crítica.",
    },

    {
        period: "Segunda leitura",
        title: "Persistência não explicava tudo",
        description:
            "Alguns desvios permaneciam por longos períodos sem causar propagação ou perda estrutural.",
    },

    {
        period: "Terceira leitura",
        title: "O ciclo operacional mudou a análise",
        description:
            "A degradação passou a depender da capacidade natural de recuperação de cada operação.",
    },

    {
        period: "Quarta leitura",
        title: "Oscilação não significava falha",
        description:
            "Operações saudáveis também oscilavam. O problema passou a ser persistência além do ciclo esperado.",
    },

    {
        period: "Quinta leitura",
        title: "Esperar começou a ter custo",
        description:
            "A degradação deixou de ser apenas técnica e passou a representar perda progressiva de recuperação operacional.",
    },

    {
        period: "Sexta leitura",
        title: "A estabilidade virou capacidade adaptativa",
        description:
            "A operação passou a ser interpretada pela capacidade de absorver perturbações sem perder coerência.",
    },
];

export default function FourthSection() {
    return (
        <NumberedSection
            number="4"
            title="Como a interpretação da operação evoluiu"
            description="
                O estudo começou tratando persistência como anomalia.
                Ao longo da análise, a degradação passou a ser interpretada pela capacidade adaptativa da operação.
            "
        >
            <div className="grid gap-4 md:grid-cols-4">
                {timeline.map((item, index) => (
                    <div key={item.period} className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500">
                            {item.period}
                        </p>
                        <h3 className="mt-3 font-semibold text-zinc-950">{item.title}</h3>
                        <p className="mt-2 text-sm leading-6 text-zinc-600">{item.description}</p>
                        {index < timeline.length - 1 && (
                            <ArrowRight className="mt-5 h-4 w-4 text-indigo-400" />
                        )}
                    </div>
                ))}
            </div>
        </NumberedSection>
    )
}