export function DegradationExplanation() {
  return (
    <section className="relative overflow-hidden border-b border-zinc-200 bg-white px-12 py-10">
      <div className="" />

      <div className="relative">
        <div className="">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
            O que é degradação operacional?
          </p>

          <h2 className="text-3xl max-w-4xl font-bold leading-tight text-zinc-950 md:text-4xl">
            O incidente não começa quando o sistema quebra.{" "}
            <span className="text-violet-600">
                Começa quando ele deixa de se recuperar sozinho.
            </span>
            </h2>

          <p className="mt-4 max-w-7xl text-sm leading-relaxed text-zinc-600 md:text-base">
            Operações digitais raramente degradam de uma vez. Elas começam com
            pequenas variações que parecem ruído, persistem por mais tempo que o
            esperado e, aos poucos, <span className="font-bold">deixam de se recuperar sozinhas.</span>
          </p>
        </div>
      </div>
    </section>
  );
}