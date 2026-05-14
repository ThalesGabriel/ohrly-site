import {
  AlertTriangle,
  Clock3,
  Gauge,
  RotateCcw,
  Waves,
} from "lucide-react";

const findings = [
  {
    icon: Clock3,
    title: "Cada RPA tinha um ciclo próprio",
    text: "Cada região possuía um tempo histórico diferente para absorver desvios e retornar ao comportamento esperado.",
  },
  {
    icon: Waves,
    title: "Persistência passou a ser relativa",
    text: "Um desvio só se tornava relevante quando sobrevivia além do ciclo natural de recuperação daquela própria operação.",
  },
  {
    icon: Gauge,
    title: "Intensidade deixou de ser suficiente",
    text: "Pressões altas podiam ser ruído quando a operação conseguia recuperar dentro do seu padrão histórico.",
  },
  {
    icon: AlertTriangle,
    title: "A perda de recuperação ficou observável",
    text: "Quando o drift ultrapassava o p90 histórico de recuperação, havia sinal de perda da capacidade natural de retorno.",
  },
];

export function RecoveryCycleInsightSection() {
  return (
    <section className="border-t border-zinc-200 bg-white px-12 py-10">
      <div className="max-w-7xl">
        <span className="mb-4 inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
          Terceira leitura comportamental
        </span>

        <h2 className="max-w-6xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          Um sistema saudável é aquele que se recupera rápido
        </h2>

        <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-600">
          A terceira query removeu a arbitrariedade do tempo. Em vez de assumir
          que uma quantidade fixa de dias representa degradação, o modelo passou
          a inferir o ciclo natural de recuperação de cada RPA e comparar cada
          episódio contra o próprio histórico daquela operação.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-4">
          {findings.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
              >
                <div className="flex items-center gap-[10px]">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
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

        <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-100 text-violet-700">
              <RotateCcw className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                Operational Recovery Cycle
              </p>

              <h3 className="mt-1 text-xl font-semibold text-zinc-950">
                O tempo só ganha significado quando comparado ao metabolismo da
                operação.
              </h3>
            </div>
          </div>

          <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-600">
            A partir dos períodos históricos de drift, o modelo estimou mediana,
            p75 e p90 de recuperação para cada RPA. Assim, um episódio deixou de
            ser classificado por uma regra fixa e passou a ser interpretado pela
            pergunta: ele ainda está dentro do ciclo natural de recuperação ou já
            sobreviveu além da capacidade histórica da operação?
          </p>
        </div>
      </div>
    </section>
  );
}