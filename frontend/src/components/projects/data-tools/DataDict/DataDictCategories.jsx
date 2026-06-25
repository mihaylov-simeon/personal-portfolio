const categories = [
  {
    num: "01",
    title: "Null Handling",
    p: [
      "Covers the full lifecycle of null data in a real dataset - detection, filtering, and imputation. The dummy dataset ships with intentional nulls across four columns, making every function immediately meaningful.",
      "Includes honest notes on when NOT to use mean imputation (financial data, skewed distributions) and why empty strings are not null - a common source of silent data quality bugs.",
    ],
    bullets: [
      "dropna with subset / how / thresh variants",
      "fillna with scalar, ffill, and mean strategies",
      "Sentinel value detection and replacement",
    ],
  },
  {
    num: "02",
    title: "Filtering & Selection",
    p: [
      "9 functions from simple boolean filters to compound conditions, isin, between, loc/iloc for label and positional indexing, head/tail for quick inspection, and drop_duplicates for deduplication.",
      "Each demonstrated against the same dummy dataset so the interaction between different filter strategies is visible side by side.",
    ],
    bullets: [
      "Boolean / numeric / string / compound filter patterns",
      "Column selection and dropping",
      "Deduplication with full and subset matching",
    ],
  },
  {
    num: "03",
    title: "Aggregations",
    p: [
      "Covers the four most commonly misunderstood aggregation patterns: groupby with multiple strategies (sum, mean, count, named agg), value_counts for frequency analysis, describe for summary statistics, and nunique for cardinality.",
      "The groupby section includes the often-missed as_index=False pattern and multi-column aggregation syntax that varies meaningfully between Pandas, Polars, and PySpark.",
    ],
    bullets: [
      "groupby with multiple aggregation strategies",
      "Summary statistics via describe()",
      "Cardinality detection with nunique()",
    ],
  },
  {
    num: "04",
    title: "String Operations",
    p: [
      "All 6 functions demonstrated against deliberately messy customer name data - mixed casing, double spaces, leading/trailing whitespace - so the transformation is always obvious.",
      "Includes the contains/str.match distinction and split with expand=True vs returning a list, which behaves differently across all three libraries.",
    ],
    bullets: [
      "Case normalisation and whitespace stripping",
      "Substring search and pattern replacement",
      "String splitting with edge case handling",
    ],
  },
  {
    num: "05",
    title: "Date Operations",
    p: [
      "Covers date parsing, part extraction, and truncation. The dummy table includes a deliberately invalid date string to demonstrate errors='coerce' behaviour - where the invalid value becomes null rather than raising an exception.",
      "Parsing strategy matters: errors='coerce' is the safe default for production pipelines; errors='raise' is useful for strict validation contexts. The tool shows both.",
    ],
    bullets: [
      "to_datetime with errors='coerce' for safe parsing",
      "Year / month extraction from date columns",
      "Date truncation for time-based grouping",
    ],
  },
  {
    num: "06",
    title: "Sorting, Ranking & Type Casting",
    p: [
      "sort_values with multi-column mixed-direction sorting, nlargest/nsmallest for top/bottom-N selection without sorting the full frame, astype/cast for explicit type conversion, and dtypes/schema for inspection.",
      "Type casting includes nullable integer handling - the pd.Int64Dtype() vs int64 distinction that produces silent nullability bugs when ignored.",
    ],
    bullets: [
      "Multi-column sort with mixed directions",
      "Top / bottom N row selection",
      "Type casting with nullable integer handling",
    ],
  },
];

export const DataDictCategories = () => {
  return (
    <section className="dd-chapters">
      <div className="dd-chapters-header">
        <span className="dd-section-label">Function Categories</span>
        <h2>What's Inside</h2>
      </div>

      {categories.map((cat, i) => (
        <div
          key={cat.num}
          className={`dd-chapter${i % 2 === 1 ? " dd-chapter--right" : ""}`}
        >
          <span className="dd-chapter-num">{cat.num}</span>
          <div className="dd-chapter-body">
            <h3 className="dd-chapter-title">{cat.title}</h3>
            {cat.p.map((text, j) => (
              <p key={j} className="dd-chapter-p">{text}</p>
            ))}
            <ul className="dd-chapter-list">
              {cat.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};
