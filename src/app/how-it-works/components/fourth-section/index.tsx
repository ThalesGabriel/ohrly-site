import Timeline from "./components/timeline";

export default function FourthSection() {
    return (
        <section className="border-t border-slate-200 bg-white px-12 py-10 text-slate-950 md:px-12">
            <div className=" grid gap-12 lg:grid-cols-[0.65fr_1.35fr] lg:items-center">
                <div>
                    <div className="flex gap-[10px] items-center">
                        <span className="font-bold text-indigo-600 text-3xl">4.</span>
                        <h2 className="text-2xl font-semibold">
                            A zona cinzenta
                        </h2>
                    </div>

                    <p className="mt-4 leading-7 text-slate-600">
                        Entre “está tudo bem” e “precisamos agir”, existe uma janela
                        silenciosa onde decisões inteligentes ainda são possíveis.
                    </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
                    <Timeline />
                    <p className="mt-8 text-center text-sm font-semibold text-amber-600">
                        Ohrly torna visível e permite agir nessa região.
                    </p>
                </div>
            </div>
        </section>
    );
}