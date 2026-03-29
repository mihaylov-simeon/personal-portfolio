import { FinancialOverview } from './financial-market-enrichment/FinancialOverview'
import { FinancialArchitecture } from './financial-market-enrichment/FinancialArchitecture'
import { FinancialLayers } from './financial-market-enrichment/FinancialLayers'
import { FinancialKeyEngineeringDecisions } from './financial-market-enrichment/FinancialKeyEngineeringDecisions'
import { FinancialOutputAndUseCases } from  './financial-market-enrichment/FinancialOutputAndUseCases'
import { FinancialTakeaway } from './financial-market-enrichment/FinancialTakeaway'

export const FinancialEventEnrichmentPipeline = () => {
  return (
    <section className="financial-event-enrichment">
      <FinancialOverview />
      <FinancialArchitecture />
      <FinancialLayers />
      <FinancialKeyEngineeringDecisions />
      <FinancialOutputAndUseCases />
      <FinancialTakeaway />
    </section>
  )
};