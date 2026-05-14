import { Sidebar } from "@/components/Sidebar";
import Hero from "./components/Hero";
import { CustomTabs } from "./components/tabs/CustomTabs";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf8] text-zinc-950">
      <div className="flex">
        <Sidebar />

        <section className="ml-[240px] w-full">
          <Hero />
          <CustomTabs />
        </section>
      </div>
    </main>
  );
}