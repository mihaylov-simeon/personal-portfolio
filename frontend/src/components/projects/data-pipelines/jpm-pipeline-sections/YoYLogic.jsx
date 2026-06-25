const chapters = [
  {
    num: "04",
    title: "Previous Transaction Amount",
    paragraphs: [
      "Accurate YoY calculation requires each transaction to be evaluated based on its immediate predecessor within the same business category.",
      "A deterministic window is applied to partition data by category and order transactions by date. This allows each record to reference the prior transaction value without aggregation or loss of granularity.",
    ],
    bullets: [
      "Time-ordered transactions per business category",
      "Isolated comparisons across independent category groups",
      "Deterministic access to historical values",
      "Preserved raw data lineage",
    ],
  },
  {
    num: "05",
    title: "YoY Absolute Change",
    paragraphs: [
      "With the previous transaction value established, the absolute YoY change captures the raw magnitude and direction of movement between reporting periods.",
      "This metric represents the numerical difference between consecutive values - providing a direct view of growth or decline without normalization.",
    ],
    bullets: [
      "Direct subtraction between current and prior values",
      "Clear indication of increase or decrease",
      "Suitable for trend inspection and validation",
    ],
  },
  {
    num: "06",
    title: "YoY Percentage Change",
    paragraphs: [
      "To enable meaningful comparison across categories with different transaction scales, the absolute change is normalized as a percentage of the previous value.",
      "This transformation expresses growth in relative terms, allowing consistent comparison across categories, time periods, and magnitudes.",
    ],
    bullets: [
      "Normalized growth metric",
      "Explicit handling of null and zero values",
      "Rounded for reporting precision",
      "Comparable across categories and time",
    ],
  },
];

export const YoYLogic = () => {
  return (
    <section className="jpm-chapters">
      <div className="jpm-chapters-header">
        <span className="jpm-section-label">YoY Logic</span>
        <h2>Year-over-year calculation steps</h2>
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
