const decisions = [
  {
    num: "01",
    title: "inferSchema=False - Controlled Ingestion Contract",
    p: [
      "CSV data types cannot be trusted. Disabling schema inference forces every column to be declared explicitly, preventing Spark from silently assigning wrong types based on assumptions.",
      "This makes the pipeline deterministic from the very first read - column types are part of the contract, not a side-effect of the data.",
    ],
    bullets: [
      "Prevents silent type coercion at ingest time",
      "Schema as explicit contract - not an inference artifact",
      "Enables safe downstream casting in Silver",
    ],
  },
  {
    num: "02",
    title: "Price-First Left Join in Silver Layer",
    p: [
      "Prices are the most complete dataset - they exist for every trading day. Left-joining on prices ensures that not a single trading day is dropped when earnings or dividends are absent.",
      "Earnings appear quarterly, dividends sporadically. Without a price-first join, entire trading days would vanish from the Silver table.",
    ],
    bullets: [
      "Prices as the join anchor - no trading day dropped",
      "Earnings and dividends are optional enrichment",
      "NULL-safe handling for absent quarterly data",
    ],
  },
  {
    num: "03",
    title: "coalesce Over repartition Before Writes",
    p: [
      "repartition triggers a full shuffle, causing OutOfMemory exceptions when writing large data loads. coalesce merges partitions in-place without shuffling, reducing output file count while keeping memory pressure flat.",
      "For analytical ETL pipelines where output is read sequentially, fewer files with predictable size outperforms many small fragments.",
    ],
    bullets: [
      "No full shuffle - memory pressure stays flat",
      "Reduces output file fragmentation",
      "Safe for large-volume batch writes",
    ],
  },
  {
    num: "04",
    title: "Explicit Casting + UPPER_CASE Aliasing in Silver",
    p: [
      "Every column is cast and renamed within the Silver layer. All Gold pipelines inherit a type-safe and consistently named contract - no implicit coercion and no schema drift downstream.",
      "Centralising this in Silver means Gold pipelines never need to defensively re-cast or re-alias. The contract is a guarantee, not an assumption.",
    ],
    bullets: [
      "Type-safe contract from Silver onward",
      "UPPER_CASE naming prevents case-sensitivity bugs",
      "Schema drift prevented at the source",
    ],
  },
  {
    num: "05",
    title: "Null Safety Before Every Arithmetic Operation",
    p: [
      "when(col().isNull() | (col() == 0), None).otherwise(...) guards every derived metric. Dividends are absent for most days; earnings appear quarterly - without explicit null guards, aggregations will be corrupted.",
      "This is not defensive programming - it is the correct model for sparse financial data. Null and zero have fundamentally different business meanings.",
    ],
    bullets: [
      "Null and zero treated as distinct states",
      "Guards every division and window-based metric",
      "Prevents aggregation corruption in Gold pipelines",
    ],
  },
  {
    num: "06",
    title: "Inter-Gold Dependency Between Pipelines",
    p: [
      "Rather than recomputing the same columns from Silver again, later Gold pipelines reuse already-materialised Gold outputs as inputs. Windowing logic is not duplicated.",
      "This makes the Gold layer a dependency graph, not a set of independent queries. Later pipelines consume earlier Gold outputs, enabling richer signal composition without rebuilding metrics from scratch.",
    ],
    bullets: [
      "Gold outputs consumed as inputs by later Gold pipelines",
      "No duplicated windowing or aggregation logic",
      "Enables compound signals not possible from Silver alone",
    ],
  },
];

export const FinancialKeyEngineeringDecisions = () => {
  return (
    <section className="jpm-chapters">
      <div className="jpm-chapters-header">
        <span className="jpm-section-label">Engineering Decisions</span>
        <h2>Key Design Choices</h2>
      </div>

      {decisions.map((d, i) => (
        <div
          key={d.num}
          className={`jpm-chapter${i % 2 === 1 ? " jpm-chapter--right" : ""}`}
        >
          <span className="jpm-chapter-num">{d.num}</span>
          <div className="jpm-chapter-body">
            <h3 className="jpm-chapter-title">{d.title}</h3>
            {d.p.map((text, j) => (
              <p key={j} className="jpm-chapter-p">{text}</p>
            ))}
            <ul className="jpm-chapter-list">
              {d.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};
