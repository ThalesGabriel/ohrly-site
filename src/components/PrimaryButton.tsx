export default function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <a
      href="#contact"
      className="inline-flex items-center justify-center rounded-full bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-950/20 transition hover:bg-violet-500"
    >
      {children}
    </a>
  );
}