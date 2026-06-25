const layers = [
  {
    num: "01",
    title: "Bronze Layer",
    p: [
      "The Bronze layer ingests raw customer events as a continuous stream, enforcing a fixed schema while preserving the original event payload. Data is written in an append-only, replayable manner with no business logic applied, allowing the layer to function as a durable source of truth.",
      "Checkpointed streaming ingestion ensures fault tolerance and enables deterministic reprocessing of downstream layers when needed.",
    ],
    bullets: [
      "Schema enforcement on ingest - no silent type coercion",
      "Append-only writes for full replayability",
      "Checkpoint-backed fault tolerance",
    ],
  },
  {
    num: "02",
    title: "Silver Layer",
    p: [
      "The Silver layer enforces event-time correctness by resolving the core challenges of streaming data: out-of-order events, duplicates, and late arrivals. Events are deterministically deduplicated using a unique identifier and ordered by event-time semantics rather than processing time.",
      "Watermarks are applied to bound state growth and define clear late-data handling rules, producing a consistent and analytically reliable stream for downstream aggregation.",
    ],
    bullets: [
      "Stateful deduplication via unique event identifiers",
      "Watermark-bounded state for controlled late-data cutoff",
      "Event-time ordering over processing-time ordering",
    ],
  },
  {
    num: "03",
    title: "Gold Layer",
    p: [
      "The Gold layer produces analytics-ready outputs from the corrected event stream, with each stream designed to answer a specific analytical question. Windowed aggregations are computed and written as independent, append-only outputs.",
      "By isolating analytical concerns across multiple Gold streams, the pipeline maintains scalability, flexibility, and fault containment - each metric can evolve independently.",
    ],
    bullets: [
      "Active users per window - engagement signal",
      "Total event count - platform traffic indicator",
      "Per-device purchase breakdown - segmentation",
      "Revenue per window - monetization tracking",
    ],
  },
];

export const StreamLayers = () => {
  return (
    <section className="jpm-chapters">
      <div className="jpm-chapters-header">
        <span className="jpm-section-label">Medallion Layers</span>
        <h2>How Data Flows Through the Pipeline</h2>
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
