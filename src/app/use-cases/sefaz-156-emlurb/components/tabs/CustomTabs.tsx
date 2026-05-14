"use client";

import { useState } from "react";
import { FirstQueryInsightSection } from "../first-query";
import { RecoveryTransitionSection } from "../RecoveryTransitionSection";
import { OperationalRecoveryComponent } from "../OperationalRecoveryComponent";
import { RecoveryCycleInsightSection } from "../RecoveryCycleInsightSection";
import { RecoveryCycleTransitionSection } from "../RecoveryCycleTransitionSection";
import { RecoveryCycleEvidenceSection } from "../RecoveryCycleEvidenceSection";
import { PreIncidentInterpretationSection } from "../PreIncidentInterpretationSection";
import { OperationalRegimeSection } from "../OperationalRegimeSection";
import { FourthQuery } from "../fourth-query";
import { FifthQuery } from "../fifth-query";
import { SixthQuery } from "../sixth-query";
import { SeventhQuery } from "../seventh-query";
import { EighthQuery } from "../eighth-query";
import { NinethQuery } from "../nineth-query";
import { Conclusion } from "../conclusion";
import { Introduction } from "../introduction";

const tabs = [
    {
    id: "intro",
    label: "Introdução",
    component: <Introduction/>
  },
  {
    id: "first",
    label: "Primeira leitura",
    component: 
        <>
            <FirstQueryInsightSection />,
            <RecoveryTransitionSection/>
        </>
  },
  {
    id: "second",
    label: "Segunda leitura",
    component: 
        <>
            <OperationalRecoveryComponent />,
            <RecoveryCycleTransitionSection />
            {/* /Mas quero saber outra coisa antes. Qual é o tempo médio da zona cinzenta? 
            Essa pergunta é importante porque já sabemos o que é um pico isolado e saberemos o que é uma sazonalidade, 
            mas o que efetivamente é um ruído, que seria instabilidade, e o que efetivamente é um sinal relevante que é 
            onde já estamos na degradação rumo ao incidente */}
        </>
  },
  {
    id: "third",
    label: "Terceira leitura",
    component: 
        <>
            <RecoveryCycleInsightSection/>
            <RecoveryCycleEvidenceSection/>
            <PreIncidentInterpretationSection/>
            {/* /Perfeito. a query criada anteriormente apenas baseava esses estados na persistencia se eu nao estiver enganado, 
            vamos entao entender agora a magnitude de cada estado operacional porque o ciclo nao pode ser baseado apenas em persistencia */}
        </>
  },
  {
    id: "fourth",
    label: "Quarta leitura",
    component: <>
         <FourthQuery/>
         {/* Agora está faltando:

propagação.

Porque:

eventos severos podem ser localizados,
degradação relevante tende a contaminar comportamento. */}
         </>
  },
  {
    id: "fifth",
    label: "Quinta leitura",
    component:  <>
    <FifthQuery/>
    {/* */}
    </>
  },
  {
    id: "sixth",
    label: "Sexta leitura",
    component:  <>
    <SixthQuery/>
    </>
  },
  {
    id: "seventh",
    label: "Sétima leitura",
    component:  <>
    <SeventhQuery/>
    {/* Perfeito! Então parece que podemos seguir para modelar transição entre arquétipos. Eu acredito que isso é importante porque adiciona uma cada importante entre as 3 perguntas anteriores que é o quanto o sistema oscila e a importância disso é fundamental em sistemas que mudam o tempo todo  Porque:

OSCILAÇÃO → DEGRADAÇÃO_PROGRESSIVA
DEGRADAÇÃO_PROGRESSIVA → DEGRADAÇÃO_LOCALIZADA
DEGRADAÇÃO_LOCALIZADA → DEGRADAÇÃO_SISTÊMICA
*/}
    </>
  },
  {
    id: "eighth",
    label: "Oitava leitura",
    component:  <>
    <EighthQuery/>
    </>
  },
  {
    id: "nineth",
    label: "Nona leitura",
    component:  <>
    <NinethQuery/>
    </>
  },
  {
    id: "conclusion",
    label: "Conclusão",
    component:  <>
    <Conclusion/>
    </>
  },
];

export function CustomTabs() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const currentTab = tabs.find((tab) => tab.id === activeTab);

  return (
    <section className="border-t border-zinc-200 bg-white">
      <div className="sticky top-0 z-10 border-b border-zinc-200 bg-white/90 px-12 py-4 backdrop-blur">
        <div className="flex flex-wrap gap-2">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTab;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition cursor-pointer ${
                  isActive
                    ? "bg-violet-700 text-white"
                    : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 hover:text-zinc-950"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      <div>{currentTab?.component}</div>
    </section>
  );
}