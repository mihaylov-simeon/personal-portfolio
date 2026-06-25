const steps = [
  { num: "01", label: "Raw Data",      sub: "CSV financial statements" },
  { num: "02", label: "Spark ETL",     sub: "Schema validation & ingestion" },
  { num: "03", label: "Bronze Layer",  sub: "Raw structured data" },
  { num: "04", label: "Silver Layer",  sub: "Normalized & cleaned" },
  { num: "05", label: "Gold Layer",    sub: "YoY metrics computed" },
  { num: "06", label: "Analytics",     sub: "Matplotlib visualizations" },
];

export const Architecture = () => {
  return (
    <section className="jpm-arch">
      <div className="jpm-arch-header">
        <span className="jpm-section-label">Architecture</span>
        <h2>Data Processing Pipeline</h2>
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
