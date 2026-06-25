const steps = [
  { num: "01", label: "Function Registry",  sub: "30+ functions as JS objects with metadata, variants, and execute functions" },
  { num: "02", label: "Dummy Dataset",      sub: "15-row sales table with deliberate nulls, sentinels, duplicates, mixed casing" },
  { num: "03", label: "Runtime Execution",  sub: "Each function runs live against the dataset in the browser on click" },
  { num: "04", label: "Language Switcher",  sub: "Pandas / Polars / PySpark code shown for the selected language" },
  { num: "05", label: "Variant Tabs",       sub: "Parameters and options shown as separate variants per function" },
  { num: "06", label: "Output",             sub: "Real input → output tables rendered side by side with null / boolean highlighting" },
];

export const DataDictArchitecture = () => {
  return (
    <section className="dd-arch">
      <div className="dd-arch-header">
        <span className="dd-section-label">Architecture</span>
        <h2>How It Works</h2>
      </div>

      <div className="dd-arch-flow">
        {steps.map((step, i) => (
          <>
            <div className="dd-arch-step" key={step.num}>
              <span className="dd-arch-num">{step.num}</span>
              <span className="dd-arch-label">{step.label}</span>
              <span className="dd-arch-sub">{step.sub}</span>
            </div>
            {i < steps.length - 1 && (
              <span className="dd-arch-arrow" key={`arrow-${i}`}>→</span>
            )}
          </>
        ))}
      </div>
    </section>
  );
};
