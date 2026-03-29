const YoYBlock = ({ title, subtitle, children }) => {
  return (
    <div className="yoy-content">
      <div className="yoy-ghost">
        {title && 
          <h2>{title}</h2>
        }
        {subtitle && 
          <h2>{subtitle}</h2>
        }
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
          Accurate YoY calculation requires each transaction to be evaluated based on it's 
          immediate predecessor within the same business category.
        </p>

        <p className="yoy-card">
          A deterministic window is applied to partition data by category and order transactions by date.
          This allows each record to reference the prior transaction value without aggregation or loss of granularity.
        </p>

        <ul className="yoy-list yoy-card">
          <li>Time-ordered transactions per business category</li>
          <li>Isolated comparisons accross independent category groups</li>
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
          With the previous transaction value established, the absolute YoY change to capture the
          raw magnitute and direction of movement between reporting periods.
        </p>

        <p className="yoy-card">
          This metric represents the numerical difference between consecutive values providing a
          direct view of growth or decline without normalization.
        </p>

        <ul className="yoy-list yoy-card">
          <li>Direct subtraction between current and prior values</li>
          <li>Clear indication of increase or decrease</li>
          <li>Suitable for trend inspection and validation</li>
        </ul>

        <p className="yoy-card">
            The resulting value expresses absolute YoY movement, independent of scale or normalization.
        </p>
      </YoYBlock>

      {/* SECTION 3 */}
      <YoYBlock title="YoY" subtitle="percentage change">
        <p className="yoy-card">
          To enable meaningful comparison across categories with different transaction scales, the 
          absolute change is normalized as a percentage of the previous value.
        </p>

        <p className="yoy-card">
          This transformation expresses the growth in relative terms, allowing consistent comparison
          accross categories, time periods and magnitudes.
        </p>

        <ul className="yoy-list yoy-card">
          <li>Normalized growth metric</li>
          <li>Explicit handling of null and zero values</li>
          <li>Rounded for reporting precision</li>
          <li>Comparable across categories and time</li>
        </ul>

        <p className="yoy-card">
            The final metric delivers relative YoY performance, ready for analytics, 
            visualization, and decision-making.
        </p>
      </YoYBlock>

    </section>
  );
};
