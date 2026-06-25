import "./ProjectPage.css";
import "./JPMPipeline.css";
import "./FinancialEventEnrichmentPipeline.css";
import { FinancialOverview } from './financial-market-enrichment/FinancialOverview'
import { FinancialArchitecture } from './financial-market-enrichment/FinancialArchitecture'
import { FinancialKeyEngineeringDecisions } from './financial-market-enrichment/FinancialKeyEngineeringDecisions'
import { FinancialLayers } from './financial-market-enrichment/FinancialLayers'
import { FinancialOutputAndUseCases } from  './financial-market-enrichment/FinancialOutputAndUseCases'

export const FinancialEventEnrichmentPipeline = () => {
  return (
    <section>
      <FinancialOverview />
      <FinancialArchitecture />
      <FinancialKeyEngineeringDecisions />
      <FinancialLayers />
      <FinancialOutputAndUseCases />
    </section>
  );
};
