import {
  Activity,
  ArrowRight,
  Network,
  Timer,
  Waves,
} from "lucide-react";

const dimensions = [
  {
    icon: Timer,
    title: "Persistência",
    text:
      "Quanto tempo um desvio permanecia ativo antes de desaparecer naturalmente da operação.",
  },
  {
    icon: Activity,
    title: "Magnitude",
    text:
      "O tamanho do afastamento em relação ao comportamento considerado saudável para aquele contexto.",
  },
  {
    icon: Network,
    title: "Propagação",
    text:
      "O quanto o comportamento começava a impactar outros estados ou regiões da operação.",
  },
];

export function PressureOriginSection() {
  return (
    <section className="border-t border-zinc-200 bg-white px-12 py-10">
      <div className="max-w-7xl">
        <span className="mb-4 inline-flex rounded-full bg-zinc-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-zinc-600">
          A origem da pressão operacional
        </span>

        <h2 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
          As três dimensões que o Ohrly mede: Persistência, Magnitude e Propagação 
          deixaram de ser universais.
        </h2>

        <p className="mt-4 max-w-6xl text-base leading-7 text-zinc-600">
          Alguns desvios eram intensos, mas desapareciam rapidamente. Outros eram
          moderados, porém permaneciam ativos por tempo suficiente para alterar o
          comportamento esperado do sistema.
        </p>

        <div className="mt-8 rounded-3xl border border-violet-200 bg-violet-50/40 p-8">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-violet-700 shadow-sm">
              <Waves className="h-5 w-5" />
            </div>

            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-700">
                O conceito que surgiu
              </p>

              <h3 className="mt-1 text-xl font-semibold tracking-tight text-zinc-950">
                Pressão operacional
              </h3>
            </div>
          </div>

          <p className="mt-4 max-w-6xl text-base leading-7 text-zinc-700">
            Esse acúmulo progressivo de atrito operacional passou a ser tratado
            como pressão operacional. Naquele momento, essas dimensões ainda eram universais. 
            O modelo ainda não entendia que diferentes operações possuíam capacidades naturais de
            recuperação diferentes.
          </p>
        </div>
      </div>
    </section>
  );
}
