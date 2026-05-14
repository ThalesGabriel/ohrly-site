"use client";

import { useSidebar } from "@/components/layout/sidebar-context";
import { Sidebar } from "@/components/Sidebar";
import ExploreOperationPage from "./components";

export default function Interest() {
    const { collapsed } = useSidebar();
    return (
        <main className="min-h-screen bg-[#fbfaf8] text-zinc-950">
            <div className="flex">
                <Sidebar />

                <section
                    className={`w-full transition-all duration-300 ${collapsed ? "ml-[88px]" : "ml-[240px]"
                        }`}
                >
                    <ExploreOperationPage/>
                </section>
            </div>
        </main>
    );
}