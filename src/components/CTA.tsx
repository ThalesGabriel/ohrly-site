export function CTA() {
  return (
    <section className="px-12 py-10 bg-white">
      <div className="flex items-center justify-between rounded-xl bg-violet-50 p-8">
        <div>
          <h3 className="mb-2 text-xl font-bold">
            Insights antecipados geram decisões melhores.
          </h3>
          <p className="text-sm text-zinc-600">
            O Ohrly transforma comportamento operacional em nítidez antes que o
            problema se torne incidente.
          </p>
        </div>

        <button className="rounded-lg bg-violet-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-violet-950/20 transition hover:bg-violet-500 cursor-pointer">
          Falar com especialista →
        </button>
      </div>
    </section>
  );
}