import { RegimeReasoning } from "./RegimeReasoning";
import { RegimeEvidence } from "./RegimeEvidence";
import { OperationalTaxonomy } from "./OperationalTaxonomy";

export function FourthQuery() {
  return (
    <section className="border-t border-zinc-200 bg-white px-12 py-10">
        <RegimeReasoning/>
        <div className="border-t border-zinc-200"></div>
        <RegimeEvidence/>
        <OperationalTaxonomy/>
    </section>
  );
}
