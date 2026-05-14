"use client";

import { Sidebar } from "@/components/Sidebar";
import { useSidebar } from "@/components/layout/sidebar-context";
import Hero from "./components/Hero";
import GrayZone from "./components/GrayZone";
import Observability from "./components/Observability";
import Layers from "./components/Layers";
import Cost from "./components/Cost";
import WhatIsNotOhrly from "./components/CTA";
import CTA from "./components/CTA";

export default function HowItWorks() {
    const { collapsed } = useSidebar();
    return (

        <main className="min-h-screen bg-white text-zinc-950">
            <div className="flex">
                <Sidebar />

                <section
                    className={`w-full transition-all duration-300 ${collapsed ? "ml-[88px]" : "ml-[240px]"
                        }`}
                >
                    <Hero />
                    <GrayZone/>
                    <Observability/>
                    <Layers/>
                    <CTA/>
                </section>
            </div>
        </main>
    );
}