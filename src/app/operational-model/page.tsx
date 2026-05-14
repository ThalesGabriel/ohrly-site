"use client";

import { Sidebar } from "@/components/Sidebar";
import { NoiseVsSignal } from "./components/NoiseVsSignal";
import { OperationalCycle } from "./components/OperationalCycle";
import { BehavioralStates } from "./components/BehavioralStates";
import { ArchetypesIntro } from "./components/ArchetypesIntro";
import { RpiIntro } from "./components/RPIIntro";
import { RpiContextComparison } from "./components/RpiContextComparison";
import { RpiArchetypeExplanation } from "./components/RpiArchetypeExplanation";
import { CTA } from "@/components/CTA";
import { useSidebar } from "@/components/layout/sidebar-context";
import Hero from "./components/Hero";

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
                    <Hero/>
                    <NoiseVsSignal />
                    <OperationalCycle />
                    <BehavioralStates />
                    <ArchetypesIntro/>
                    <RpiIntro/>
                    <RpiContextComparison/>
                    <RpiArchetypeExplanation/>
                    <CTA />
                </section>
            </div>
        </main>
    );
}