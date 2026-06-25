import codeScreenshot from "../../../../assets/img/code-screenshot-JPM.png";

export const Overview = () => {
  return (
    <section
      className="jpm-hero"
      style={{ backgroundImage: `url(${codeScreenshot})` }}
    >
      <div className="jpm-hero-overlay" />

      <div className="jpm-hero-content">
        <span className="jpm-hero-tag">PySpark · Medallion Architecture · YoY Analytics</span>
        <h1 className="jpm-hero-title">
          JPM Financial<br />Metrics Pipeline
        </h1>
        <p className="jpm-hero-sub">
          Transforms raw JPMorgan Chase financial statements into analytics-ready
          datasets with year-over-year change and trend acceleration metrics.
        </p>
        <a
          href="https://github.com/mihaylov-simeon/JPMC-financial-statements-pipeline"
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
