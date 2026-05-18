import { BarChart3, Clock3, FileWarning, ShieldCheck } from "lucide-react";
import NumberedSection from "../numbered-section";
import SignalCard from "./components/signal-card";

const observedSignals = [
    {
        title: "Estabilidade operacional relativa",
        value: "sem incidente explícito",
        detail:
            "A ausência de falha formal não significava comportamento saudável.",
        icon: ShieldCheck,
    },
    {
        title: "Operação oscilante x estável",
        value: "dinâmicas diferentes",
        detail:
            "Oscilação faz parte de operações saudáveis. Persistência além do ciclo esperado não.",
        icon: Clock3,
    },
    {
        title: "Capacidade de recuperação",
        value: "perda progressiva",
        detail:
            "A operação continuava funcionando, mas demorava cada vez mais para retornar ao comportamento esperado.",
        icon: BarChart3,
    },
    {
        title: "Janela de decisão observável",
        value: "antes do incidente",
        detail:
            "A degradação já podia ser interpretada antes de qualquer ruptura explícita.",
        icon: FileWarning,
    },
];

export default function SecondSection() {
    return (
        <NumberedSection
            number="2"
            title="O comportamento que o estudo tornou visível"
            description="
                                A estabilidade também depende da capacidade contínua de retornar ao comportamento esperado.
                            "
        >
            <div className="grid gap-4 md:grid-cols-4">
                {observedSignals.map((signal) => (
                    <SignalCard key={signal.title} {...signal} />
                ))}
            </div>
        </NumberedSection>
    )
}