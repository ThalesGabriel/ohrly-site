"use client";

import { useSidebar } from "@/components/layout/sidebar-context";
import { Sidebar } from "@/components/Sidebar";
import Hero from "./components/Hero";
import { DegradationExplanation } from "./components/DegradationExplanation";
import { YourGains } from "./components/YourGains";
import { WhyItMatters } from "./components/WhyItMatters";
import { ComparisonSection } from "./components/ComparisonSection";
import { CTA } from "@/components/CTA";
import { GreyZoneExplanation } from "./components/GreyZoneExplanation";
import { DecisionGapExplanation } from "./components/DecisionGapExplanation";

export default function Home() {
    const { collapsed } = useSidebar();
    return (
        <main className="min-h-screen bg-[#fbfaf8] text-zinc-950">
            <div className="flex">
                <Sidebar />

                <section
                    className={`w-full transition-all duration-300 ${collapsed ? "ml-[88px]" : "ml-[240px]"
                        }`}
                >
                    <Hero />
                    <GreyZoneExplanation/>
                    <DecisionGapExplanation/>
                    <WhyItMatters />
                    <YourGains />
                    <ComparisonSection />
                    <CTA/>
                </section>
            </div>
        </main>
    );
}