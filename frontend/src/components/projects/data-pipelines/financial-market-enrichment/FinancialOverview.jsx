import financialCode from "../../../../assets/img/financial-code-image.png";

export const FinancialOverview = () => {
  return (
    <section
      className="jpm-hero"
      style={{ backgroundImage: `url(${financialCode})` }}
    >
      <div className="jpm-hero-overlay" />

      <div className="jpm-hero-content">
        <span className="jpm-hero-tag">PySpark · Medallion Architecture · Market Signal Engineering</span>
        <h1 className="jpm-hero-title">
          Financial Market<br />Event Enrichment
        </h1>
        <p className="jpm-hero-sub">
          PySpark ETL pipeline transforming raw financial market data into
          analytics-ready datasets enriched with trend, volatility, risk,
          and event-driven market signals.
        </p>
        <a
          href="https://github.com/mihaylov-simeon/financial-market-event-enrichment-pipeline"
          target="_blank"
          rel="noreferrer"
          className="jpm-hero-btn"
        >
          View on GitHub →
        </a>
      </div>

      <span className="jpm-hero-scroll">↓ scroll to explore</span>
    </section>
  );
};
