export default function NumberedSection({
    number,
    title,
    last,
    description,
    children,
}: {
    number: string;
    title: string;
    last?: boolean;
    description?: string;
    children: React.ReactNode;
}) {
    return (
        <section className={!last ? "border-b border-zinc-200 grid gap-6 pb-10 md:grid-cols-[260px_1fr]" : "grid gap-6 pb-10 md:grid-cols-[260px_1fr]"}>
            <div>
                <div className="flex items-start gap-3">
                    <span className="text-3xl font-semibold text-indigo-600">
                        {number}
                    </span>

                    <div>
                        <h2 className="pt-1 text-lg font-semibold tracking-tight text-zinc-950">
                            {title}
                        </h2>

                        {description && (
                            <p className="mt-3 text-sm leading-6 text-zinc-600">
                                {description}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            <div>{children}</div>
        </section>
    );
}