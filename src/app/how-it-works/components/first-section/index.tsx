import { DecisionFlow } from "./components/decision-flow";

export default function FirstSection() {
    return (
        <section className="bg-white px-12 py-10 text-slate-950 md:px-12">
            <div className="mx-auto grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
                <div>
                    <div className="flex gap-[10px] items-center">
                        <span className="font-bold text-indigo-600 text-3xl">1.</span>
                        <h2 className="text-2xl font-semibold">
                            O limite das ferramentas tradicionais
                        </h2>
                    </div>
                    <p className="mt-4 leading-7 text-slate-600">
                        Métricas e alertas são essenciais, mas geralmente mostram o problema
                        quando ele já ficou claro. A maior perda começa antes.
                    </p>
                </div>

                <DecisionFlow />
            </div>
        </section>
    );
}