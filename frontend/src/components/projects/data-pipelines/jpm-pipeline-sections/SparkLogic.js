const chapters = [
  {
    num: "01",
    title: "Pipeline Logic & Goal",
    paragraphs: [
      "The goal of this pipeline is to transform raw financial data into analytics-ready datasets that support consistent year-over-year analysis across all business categories.",
      "The design prioritizes correctness, reproducibility, and metric consistency.",
    ],
    bullets: [
      "Time-ordered data per business category",
      "Comparable values across reporting periods",
      "Explicit year-over-year (YoY) change metrics",
      "Stable structure for analytics & visualization",
    ],
  },
  {
    num: "02",
    title: "Data Normalization",
    paragraphs: [
      "Raw financial data is often inconsistent in schema, formatting, and data types — making analysis and comparison difficult.",
      "This stage ensures schema stability, consistent date handling, and uniform numeric precision across the entire dataset.",
    ],
    bullets: [
      "UnionByName across heterogeneous sources",
      "Standardized date formats for time-based comparison",
      "Cleaned and normalized categorical fields",
      "Typed numeric values using Decimal precision",
    ],
  },
  {
    num: "03",
    title: "Metric Derivation",
    paragraphs: [
      "Once the dataset is normalized, analytical metrics are derived using deterministic window-based transformations.",
      "These calculations enable accurate trend analysis and year-over-year comparisons while preserving raw data lineage.",
    ],
    bullets: [
      "Partitioned window functions by category",
      "Lag-based comparisons to previous periods",
      "YoY percentage change calculations",
      "Acceleration metrics for trend momentum",
    ],
  },
];

export const SparkLogic = () => {
  return (
    <section className="jpm-chapters">
      <div className="jpm-chapters-header">
        <span className="jpm-section-label">Spark Logic</span>
        <h2>How the pipeline works</h2>
      </div>

      {chapters.map((ch, i) => (
        <div className={`jpm-chapter${i % 2 === 1 ? ' jpm-chapter--right' : ''}`} key={ch.num}>
          <span className="jpm-chapter-num">{ch.num}</span>
          <div className="jpm-chapter-body">
            <h3 className="jpm-chapter-title">{ch.title}</h3>
            {ch.paragraphs.map((p, i) => (
              <p className="jpm-chapter-p" key={i}>{p}</p>
            ))}
            <ul className="jpm-chapter-list">
              {ch.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};
