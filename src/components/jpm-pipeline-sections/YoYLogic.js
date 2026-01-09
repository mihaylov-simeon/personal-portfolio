const YoYBlock = ({ title, subtitle, children }) => {
  return (
    <div className="yoy-content">
      <div className="yoy-ghost">
        {title && <h2>{title}</h2>}
        {subtitle && <h2>{subtitle}</h2>}
      </div>
      <div className="yoy-text">
        {children}
      </div>

      <hr />
    </div>
  );
};

export const YoYLogic = () => {
  return (
    <section className="yoy-section">

      {/* SECTION 1 */}
      <YoYBlock title="Previous" subtitle="Transaction Amount">
        <p className="yoy-card">
          To derive meaningful year-over-year metrics, each transaction must be evaluated in the context 
          of its immediate predecessor within the same business category.
        </p>

        <p className="yoy-card">
          A deterministic window is applied to partition data by category and order transactions by date.
          This allows each record to reference the prior transaction value without aggregation or loss of granularity.
        </p>

        <ul className="yoy-list yoy-card">
          <li>Time-ordered transactions per business category</li>
          <li>Isolated comparisons within category boundaries</li>
          <li>Deterministic access to historical values</li>
          <li>Preserved raw data lineage</li>
        </ul>

        <p className="yoy-card">
            The resulting column represents the previous transaction amount, forming the foundation 
            for all subsequent YoY calculations.
        </p>
      </YoYBlock>

      {/* SECTION 2 */}
      <YoYBlock title="YoY" subtitle="change">
        <p className="yoy-card">
          Once the previous transaction value is available, the absolute year-over-year 
          change can be computed directly.
        </p>

        <p className="yoy-card">
          This step calculates the numerical difference between the current transaction amount and its 
          predecessor, capturing the raw magnitude and direction of change between reporting periods.
        </p>

        <ul className="yoy-list yoy-card">
          <li>Direct subtraction at row level</li>
          <li>Clear indication of increase or decrease</li>
          <li>Unit-consistent, interpretable metric</li>
          <li>Suitable for trend inspection and validation</li>
        </ul>

        <p className="yoy-card">
            The resulting value expresses absolute YoY movement, independent of scale or normalization.
        </p>
      </YoYBlock>

      {/* SECTION 3 */}
      <YoYBlock title="YoY" subtitle="percentage change">
        <p className="yoy-card">
          To enable fair comparison across categories with different transaction scales, the 
          absolute change is normalized as a percentage of the previous value.
        </p>

        <p className="yoy-card">
          This calculation divides the year-over-year change by the prior transaction amount and multiplies 
          the result by 100 to receive the actual percentage value. Special handling ensures null or zero base 
          values do not produce misleading results.
        </p>

        <ul className="yoy-list yoy-card">
          <li>Normalized growth metric</li>
          <li>Explicit handling of null and zero values</li>
          <li>Rounded for reporting precision</li>
          <li>Comparable across categories and time</li>
        </ul>

        <p className="yoy-card">
            The final metric delivers relative year-over-year performance, ready for analytics, 
            visualization, and decision-making.
        </p>
      </YoYBlock>

    </section>
  );
};
