// components/how-it-works/DecisionFlow.tsx

import {
  Activity,
  ArrowRight,
  Gauge,
  GitBranch,
  Target,
  ClipboardCheck,
} from "lucide-react";

const flowItems = [
  {
    icon: Activity,
    title: "Métrica",
    description: "O que está acontecendo",
  },
  {
    icon: Gauge,
    title: "Sinal",
    description: "Algo mudou",
  },
  {
    icon: GitBranch,
    title: "Contexto",
    description: "Por que mudou",
  },
  {
    icon: Target,
    title: "Consequência",
    description: "Impacto na operação",
  },
  {
    icon: ClipboardCheck,
    title: "Decisão",
    description: "O que fazer",
  },
];

export function DecisionFlow() {
  return (
    <section className="w-full  text-slate-950 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-5">
          {flowItems.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={item.title} className="relative">
                <div className="flex min-h-44 flex-col items-center justify-center rounded-2xl border border-indigo-100 bg-white px-6 py-8 text-center shadow-[0_12px_40px_rgba(79,70,229,0.08)]">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-indigo-200 bg-indigo-50 text-indigo-500">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 max-w-32 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>

                {index < flowItems.length - 1 && (
                  <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 text-indigo-400 md:block" />
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-[3fr_2fr]">
          <div className="relative border-t border-dashed border-slate-300 pt-5">
            <div className="absolute -top-[5px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-slate-300" />

            <p className="text-center text-sm font-semibold text-slate-800">
              Ferramentas tradicionais atuam aqui
            </p>
          </div>

          <div className="relative border-t border-dashed border-indigo-300 pt-5">
            <div className="absolute -top-[5px] left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-indigo-400" />

            <p className="text-center text-sm font-semibold text-indigo-600">
              Ohrly atua aqui
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}