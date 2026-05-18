import { Clock3, FileWarning, LineChart, ShieldCheck } from "lucide-react";
import NumberedSection from "../numbered-section";
import InfoCard from "./components/info-card";

export default function FirstSection() {
    return (
        <NumberedSection
            number="1"
            title="Por que este estudo é relevante"
        >
            <div className="grid gap-4 md:grid-cols-4">
                {[
                    [
                        "Operação sem eventos em tempo real",
                        Clock3,
                    ],
                    [
                        "Ausência de incidentes explícitos",
                        ShieldCheck,
                    ],
                    [
                        "Baixa aderência a observabilidade tradicional",
                        LineChart,
                    ],
                    [
                        "Mesmo assim a janela de decisão está presente.",
                        FileWarning,
                    ],
                ].map(([title, Icon]) => (
                    <InfoCard
                        key={title as string}
                        icon={Icon as typeof LineChart}
                        title={title as string}
                    />
                ))}
            </div>
        </NumberedSection>
    )
}