const steps = [
  { num: "01", label: "Raw Events",           sub: "High-volume customer events as a continuous stream" },
  { num: "02", label: "Structured Streaming", sub: "PySpark checkpointed micro-batch processing" },
  { num: "03", label: "Bronze Layer",         sub: "Schema-enforced, append-only durable ingestion" },
  { num: "04", label: "Silver Layer",         sub: "Deduplication, watermarking, event-time ordering" },
  { num: "05", label: "Gold Layer",           sub: "Independent windowed aggregation streams" },
  { num: "06", label: "Analytics Outputs",   sub: "Users, events, device segments, revenue metrics" },
];

export const StreamArchitecture = () => {
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
