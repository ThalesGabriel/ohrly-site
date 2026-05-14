export default function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="/how-it-works"
      className="inline-flex items-center justify-center rounded-full border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 transition hover:border-violet-200 hover:bg-violet-50 hover:text-violet-700"
    >
      {children}
    </a>
  );
}