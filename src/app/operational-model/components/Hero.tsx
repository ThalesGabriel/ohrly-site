export default function Hero() {
    return (
        <section className="relative overflow-hidden border-b border-zinc-200 bg-white">
            <div
                className="absolute inset-0 opacity-60"
                style={{
                    backgroundImage: "url('/images/ohrly-bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            <div className="absolute inset-0 bg-white/75 backdrop-blur-[1px]" />

            <div
                className="absolute inset-0 opacity-[0.03]"
                style={{
                    backgroundImage: `
              linear-gradient(to right, #18181b 1px, transparent 1px),
              linear-gradient(to bottom, #18181b 1px, transparent 1px)
            `,
                    backgroundSize: "48px 48px",
                }}
            />

            <div className="absolute left-[-10%] top-[-20%] h-[500px] w-[500px] rounded-full bg-violet-200/30 blur-3xl" />
            <div className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-violet-300/20 blur-3xl" />

            <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-8 py-12 md:px-12">
                <div className="max-w-7xl">
                    <p className="mb-5 text-xs font-bold uppercase tracking-[0.22em] text-violet-600">
                        Modelo operacional
                    </p>

                    <h1 className="max-w-6xl text-5xl font-bold leading-[1.02] tracking-tight text-zinc-950 md:text-6xl">
                        O Ohrly não é apenas uma plataforma.
                        <br />
                        <span className="text-violet-600">É um modelo interpretativo de operações.</span>
                    </h1>

                    <p className="mt-8 max-w-3xl text-lg leading-relaxed text-zinc-600 md:text-xl">
                        O diferencial do Ohrly não está em onde ele aparece, mas em como ela
                        interpreta continuamente comportamento operacional, estabilidade
                        adaptativa e coerência estratégica.
                    </p>

                </div>

                <div className="mt-20 flex items-center gap-4 text-zinc-600">
                    <div className="h-px w-12 bg-zinc-400" />

                    <span className="text-xs font-medium uppercase tracking-[0.18em]">
                        Continue explorando abaixo
                    </span>
                </div>

            </div>
        </section>
    );
}