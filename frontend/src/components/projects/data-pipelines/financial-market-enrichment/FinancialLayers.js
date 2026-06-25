const layers = [
  {
    num: "01",
    title: "Bronze Layer",
    p: [
      "The Bronze layer ingests three raw CSV sources — stock prices, earnings reports, and dividend records — converting them to Parquet with a fixed schema and no transformations applied. Data is stored as-is, preserving original values as a durable source of truth.",
      "This layer exists to decouple raw ingestion from business logic. Keeping data untouched allows reprocessing from original records if anything goes wrong downstream, without any accumulated assumptions.",
    ],
    bullets: [
      "Three independent ingestion paths — prices, earnings, dividends",
      "No transformations — schema enforcement only",
      "Parquet output for efficient downstream reads",
    ],
  },
  {
    num: "02",
    title: "Silver Layer",
    p: [
      "The Silver layer reads the three Bronze tables and applies type-casting, date parsing, and standardised column naming before joining prices, earnings, and dividends into a single denormalised table keyed on SYMBOL and DATE.",
      "No aggregation or derived metrics are computed — only clean, consistently typed records. This unified table is the shared input for all Gold pipelines, ensuring every analytical layer operates from the same corrected and complete base.",
    ],
    bullets: [
      "Price-first left join — no trading day dropped",
      "Explicit casting and UPPER_CASE aliasing for all columns",
      "Single shared contract for all downstream Gold pipelines",
    ],
  },
  {
    num: "03",
    title: "Gold Layer",
    p: [
      "The Gold layer produces multiple co-dependent analytical outputs, each targeted at a specific analytical question: price movement and gaps, volume and liquidity, volatility, momentum, relative strength, market regime, earnings surprise, and market breadth.",
      "Each pipeline is a separate analytical opportunity. Despite inter-Gold dependencies, each output can be consumed and analysed independently — the dependency graph enables compound signals without duplicating logic.",
    ],
    bullets: [
      "7 independent analytical outputs from one Silver source",
      "Inter-Gold reuse — later pipelines consume earlier Gold outputs",
      "Window functions for rolling metrics, LAG/LEAD for event windows",
    ],
  },
];

export const FinancialLayers = () => {
  return (
    <section className="jpm-chapters jpm-chapters--alt">
      <div className="jpm-chapters-header">
        <span className="jpm-section-label">Medallion Layers</span>
        <h2>How Data Is Transformed</h2>
      </div>

      {layers.map((layer, i) => (
        <div
          key={layer.num}
          className={`jpm-chapter${i % 2 === 1 ? " jpm-chapter--right" : ""}`}
        >
          <span className="jpm-chapter-num">{layer.num}</span>
          <div className="jpm-chapter-body">
            <h3 className="jpm-chapter-title">{layer.title}</h3>
            {layer.p.map((text, j) => (
              <p key={j} className="jpm-chapter-p">{text}</p>
            ))}
            <ul className="jpm-chapter-list">
              {layer.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};
