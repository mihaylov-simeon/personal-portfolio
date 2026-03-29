const SparkBlock = ({ title, subtitle, children }) => {
  return (
    <div className="spark-content">
      <div className="spark-text">
        {children}
      </div>
      <div className="spark-ghost">
        {title && <h2>{title}</h2>}
        {subtitle && <h2>{subtitle}</h2>}
      </div>

      <hr />
    </div>
  );
};

export const SparkLogic = () => {
  return (
    <section className="spark-section">

      {/* SECTION 1 */}
      <SparkBlock title="Pipeline logic" subtitle="and goal">
        <p className="spark-card">
          The goal of this pipeline is to transform raw financial data
          into analytics-ready datasets that support consistent year-over-year analysis
          across all business categories.
        </p>

        <p className="spark-card">
          The design prioritizes correctness, reproducibility, and metric consistency.
        </p>

        <ul className="spark-list spark-card">
          <li>Time-ordered data per business category</li>
          <li>Comparable values across reporting periods</li>
          <li>Explicit year-over-year (YoY) change metrics</li>
          <li>Stable structure for analytics & visualization</li>
        </ul>
      </SparkBlock>

      {/* SECTION 2 */}
      <SparkBlock title="Data" subtitle="normalization">
        <p className="spark-card">
          Raw financial data is often inconsistent in schema, formatting, data types,
          making analysis and comparison difficult.
        </p>

        <p className="spark-card">
          This stage ensures schema stability, consistent date handling, and uniform
          numeric precision across the entire dataset.
        </p>

        <ul className="spark-list spark-card">
          <li>UnionByName across heterogeneous sources</li>
          <li>Standardized date formats for time-based comparison</li>
          <li>Cleaned and normalized categorical fields</li>
          <li>Typed numeric values using Decimal precision</li>
        </ul>
      </SparkBlock>

      {/* SECTION 3 */}
      <SparkBlock title="Metric" subtitle="derivation">
        <p className="spark-card">
          Once the dataset is normalized, analytical metrics are derived using
          deterministic window-based transformations.
        </p>

        <p className="spark-card">
          These calculations enable accurate trend analysis and year-over-year
          comparisons while preserving raw data lineage.
        </p>

        <ul className="spark-list spark-card">
          <li>Partitioned window functions by category</li>
          <li>Lag-based comparisons to previous periods</li>
          <li>YoY percentage change calculations</li>
          <li>Acceleration metrics for trend momentum</li>
        </ul>
      </SparkBlock>

    </section>
  );
};
