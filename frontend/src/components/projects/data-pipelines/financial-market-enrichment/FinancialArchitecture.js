const steps = [
  { num: "01", label: "Raw Market Data",   sub: "Stock prices, earnings reports, dividend records (CSV)" },
  { num: "02", label: "Spark ETL",         sub: "Schema validation, type casting, controlled ingestion" },
  { num: "03", label: "Bronze Layer",      sub: "Raw Parquet - untouched source of truth" },
  { num: "04", label: "Silver Layer",      sub: "Joined, cleaned, standardised - shared base for all Gold" },
  { num: "05", label: "Gold Features",     sub: "Co-dependent analytical pipelines - trend, risk, signals" },
  { num: "06", label: "Analytics Signals", sub: "Regime detection, earnings surprise, relative strength" },
];

export const FinancialArchitecture = () => {
  return (
    <section className="jpm-arch">
      <div className="jpm-arch-header">
        <span className="jpm-section-label">Architecture</span>
        <h2>Pipeline Data Flow</h2>
      </div>

      <div className="jpm-arch-flow">
        {steps.map((step, i) => (
          <>
            <div className="jpm-arch-step" key={step.num}>
              <span className="jpm-arch-num">{step.num}</span>
              <span className="jpm-arch-label">{step.label}</span>
              <span className="jpm-arch-sub">{step.sub}</span>
            </div>
            {i < steps.length - 1 && (
              <span className="jpm-arch-arrow" key={`arrow-${i}`}>→</span>
            )}
          </>
        ))}
      </div>
    </section>
  );
};
