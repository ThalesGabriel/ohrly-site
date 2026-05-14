import {
  AlertTriangle,
  Clock3,
  Gauge,
  Hourglass,
  Scale,
  TimerReset,
} from "lucide-react";

const decisionZones = [
  {
    label: "EARLY_RECOVERY_ZONE",
    title: "Ainda há espaço barato para agir",
    text:
      "A pressão existe, mas ainda parece absorvível com intervenção leve ou correção antecipada.",
    tone: "border-emerald-200 bg-emerald-50 text-emerald-800",
  },
  {
    label: "CRITICAL_RECOVERY_ZONE",
    title: "A janela está ficando apertada",
    text:
      "A operação já acumulou pressão suficiente para exigir atenção. Esperar começa a aumentar o custo de recuperação.",
    tone: "border-amber-200 bg-amber-50 text-amber-800",
  },
  {
    label: "EXPENSIVE_RECOVERY_ZONE",
    title: "Esperar já ficou caro",
    text:
      "A pressão acumulada ultrapassou um ponto em que a recuperação tende a demandar mais esforço, coordenação e retrabalho.",
    tone: "border-violet-200 bg-violet-50 text-violet-800",
  },
];

const rpiFactors = [
  {
    icon: Gauge,
    title: "Magnitude média",
    text: "Quão forte foi o desvio durante o período observado.",
  },
  {
    icon: TimerReset,
    title: "Duração relativa ao ciclo",
    text: "Quanto tempo o drift durou em relação ao ciclo natural de recuperação daquela RPA.",
  },
  {
    icon: Scale,
    title: "Propagação",
    text: "Quantas dimensões operacionais começaram a ser afetadas ao mesmo tempo.",
  },
];

const examples = [
  {
    rpa: "RPA 3",
    state: "EXPENSIVE_RECOVERY_ZONE",
    rpi: "1082,53",
    archetype: "DEGRADAÇÃO_LOCALIZADA",
    text:
      "A degradação era localizada, mas a pressão acumulada já indicava que esperar havia se tornado caro demais.",
    tone: "border-violet-200 bg-violet-50 text-violet-800",
  },
  {
    rpa: "RPA 3",
    state: "CRITICAL_RECOVERY_ZONE",
    rpi: "48,94",
    archetype: "OSCILAÇÃO_OPERACIONAL",
    text:
      "Mesmo sem degradação estrutural, o episódio já entrava em uma zona crítica de atenção decisória.",
    tone: "border-amber-200 bg-amber-50 text-amber-800",
  },
  {
    rpa: "RPA 5",
    state: "EARLY_RECOVERY_ZONE",
    rpi: "33,56",
    archetype: "DEGRADAÇÃO_LOCALIZADA",
    text:
      "Era degradação, mas ainda havia uma janela mais barata para agir antes da pressão se acumular demais.",
    tone: "border-emerald-200 bg-emerald-50 text-emerald-800",
  },
];

export function SeventhQuery() {
  return (
    <section className="border-t border-zinc-200 bg-white px-12 py-10">
      <div className="max-w-7xl">
        <span className="mb-4 inline-flex rounded-full bg-violet-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
          Janela operacional de decisão
        </span>

        <h2 className="max-w-6xl text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          A pergunta deixou de ser apenas “qual é o estado?” e passou a ser “quanto ainda custa esperar?”.
        </h2>

        <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-600">
          Depois de identificar estados, ciclos de recuperação, propagação e arquétipos,
          surgiu a pergunta mais acionável do estudo: qual é o intervalo entre a perda
          da capacidade natural de recuperação e o momento em que continuar esperando
          torna a recuperação cara demais?
        </p>

        <p className="mt-4 max-w-6xl text-base leading-7 text-zinc-600">
          Para aproximar essa resposta, a análise criou o Recovery Pressure Index. Ele
          combina a força média do desvio, o tempo relativo ao ciclo natural da operação
          e o nível de propagação observado.
        </p>

        <div className="mt-8 rounded-3xl border border-zinc-200 bg-zinc-50/70 p-6">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-violet-700 shadow-sm">
              <Hourglass className="h-5 w-5" />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-700">
                Recovery Pressure Index
              </p>

              <h3 className="mt-1 text-xl font-semibold tracking-tight text-zinc-950">
                Uma aproximação do custo de continuar esperando.
              </h3>
            </div>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {rpiFactors.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                      <Icon className="h-5 w-5" />
                    </div>

                    <h4 className="text-sm font-semibold text-zinc-950">
                      {item.title}
                    </h4>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-zinc-600">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            Estados da janela de decisão
          </p>

          <h3 className="mt-3 max-w-6xl text-2xl font-semibold tracking-tight text-zinc-950">
            Entre agir cedo e agir tarde, existem zonas de recuperação diferentes.
          </h3>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {decisionZones.map((zone) => (
            <div
              key={zone.label}
              className={`rounded-2xl border p-5 shadow-sm ${zone.tone}`}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.16em] opacity-80">
                {zone.label}
              </p>

              <h4 className="mt-3 text-base font-semibold">
                {zone.title}
              </h4>

              <p className="mt-3 text-sm leading-6 opacity-90">
                {zone.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-zinc-500">
            O que os resultados revelaram
          </p>

          <h3 className="mt-3 max-w-6xl text-2xl font-semibold tracking-tight text-zinc-950">
            Nem todo ruído é irrelevante. Nem toda degradação tem a mesma urgência.
          </h3>

          <p className="mt-4 max-w-6xl text-base leading-7 text-zinc-600">
            A janela de decisão adicionou uma camada diferente da classificação operacional.
            Ela mostrou que o mesmo arquétipo pode exigir decisões diferentes dependendo da
            pressão acumulada até aquele momento.
          </p>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {examples.map((example) => (
            <div
              key={`${example.rpa}-${example.rpi}`}
              className={`rounded-2xl border p-5 shadow-sm ${example.tone}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-80">
                    {example.rpa}
                  </p>

                  <h4 className="mt-2 text-lg font-semibold">
                    {example.state}
                  </h4>
                </div>

                {example.state === "EXPENSIVE_RECOVERY_ZONE" ? (
                  <AlertTriangle className="h-5 w-5 opacity-70" />
                ) : (
                  <Clock3 className="h-5 w-5 opacity-70" />
                )}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-xl bg-white/60 p-3">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] opacity-70">
                    RPI
                  </p>
                  <p className="mt-1 font-semibold">{example.rpi}</p>
                </div>

                <div className="rounded-xl bg-white/60 p-3">
                  <p className="text-xs font-medium uppercase tracking-[0.16em] opacity-70">
                    Arquétipo
                  </p>
                  <p className="mt-1 font-semibold">{example.archetype}</p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 opacity-90">
                {example.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-3xl border border-violet-200 bg-violet-50/40 p-8 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
            Insight central
          </p>

          <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-700">
            A janela operacional de decisão conecta comportamento e ação. O Ohrly não
            apenas identifica degradação; ele estima quando a operação ainda pode ser
            recuperada com menor esforço, quando a decisão começa a ficar crítica e
            quando esperar passa a custar caro demais.
          </p>
        </div>
      </div>
    </section>
  );
}
