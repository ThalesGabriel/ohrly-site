import Header from "./header";

export default function DefaultPage({
    children,
}: Readonly<{
    children?: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen bg-[#050914] text-white">
            <Header />
            {children}
        </main>
    );
}