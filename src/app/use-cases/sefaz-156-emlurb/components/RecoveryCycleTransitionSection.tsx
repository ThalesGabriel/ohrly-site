import {
  ArrowRight,
  Clock3,
  GitCompare,
  RotateCcw,
  TimerOff,
} from "lucide-react";

const limits = [
  {
    icon: Clock3,
    title: "Persistência ainda parecia universal",
    text:
      "A segunda leitura já observava quanto tempo a operação permanecia fora do baseline, mas ainda tratava duração como uma referência comum para todas as RPAs.",
  },
  {
    icon: GitCompare,
    title: "Tempo relativo",
    text:
      "Algumas regiões suportavam períodos mais longos de pressão sem perder recuperação, enquanto outras degradavam após episódios mais curtos.",
  },
  {
    icon: TimerOff,
    title: "Tempo absoluto não bastava",
    text:
      "A pergunta deixou de ser apenas 'há quantos dias isso persiste?' e passou a ser 'esse tempo é anormal para esta operação?'.",
  },
];

export function RecoveryCycleTransitionSection() {
  return (
    <section className="border-t border-zinc-200 bg-white px-12 py-10">
      <div className="max-w-7xl">
        <span className="mb-4 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
          O limite da segunda leitura
        </span>

        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          Mas então comportamento saudável não poderia ser apenas estar em um estado comportamental
        </h2>

        <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-600">
          A segunda leitura mostrou que a operação podia se afastar do próprio
          baseline e permanecer sob pressão. Mas ainda restava uma pergunta
          importante: por quanto tempo um desvio pode persistir antes de deixar
          de ser uma oscilação absorvível?
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {limits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200 bg-zinc-50/70 p-5"
              >
                <div className="flex items-center gap-3">
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

        <div className="mt-5 rounded-3xl border border-violet-200 bg-violet-50/40 p-8 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-violet-700 shadow-sm">
              <RotateCcw className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                Hipótese seguinte
              </p>

              <h3 className="mt-1 text-xl font-semibold tracking-tight text-zinc-950">
                Cada operação talvez tivesse seu próprio ciclo natural de recuperação.
              </h3>
            </div>
          </div>

          <p className="mt-5 max-w-6xl text-base leading-7 text-zinc-700">
            Essa hipótese mudou a interpretação do tempo. Um desvio de poucos dias
            poderia ser crítico para uma RPA com recuperação normalmente rápida,
            enquanto um período maior poderia ser absorvível para outra região com
            metabolismo operacional mais lento.
          </p>

          <p className="mt-4 max-w-6xl text-base leading-7 text-zinc-700">
            A terceira leitura nasce exatamente dessa pergunta: a degradação ainda
            está dentro do ciclo natural de recuperação da operação ou já sobreviveu
            além da sua capacidade histórica de retorno?
          </p>
        </div>
      </div>
    </section>
  );
}
