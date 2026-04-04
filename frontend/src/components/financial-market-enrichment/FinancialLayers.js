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

export const FinancialLayers = () => {
  return (
    <section className="spark-section-stream">

      {/* SECTION 1 */}
      <SparkBlock title="Bronze" subtitle="Layer">
        <p className="spark-card">
          The Bronze Layer ingests three raw CSV sources - stock prices, earnings reports, and dividend records -
          converting them to Parquet with a fixed schema and no transformations applied. Data is stored as-is,
          preserving the original values as a durable source of truth.
          <br /><br />
          This layer exists to decouple raw ingestion from business logic. Keeping the data untouched would allow us
          to go back to the original records at any later step, avoid compounding mistakes and re-run cleanly from the
          original records if something goes wrong downstream.
        </p>
      </SparkBlock>

      {/* SECTION 2 */}
      <SparkBlock title="Silver" subtitle="Layer">
        <p className="spark-card">
          The silver layer reads the three Bronze Parquet tables and applies type-casting, date parsing, and standardized
          column naming before joining prices, earnings, and dividends into a single denormalized table keyed on SYMBOL
          and DATE. No aggregation or derived metrics are computed - only clean, consistently typed records.
          <br /><br />
          This unified table serves as the shared input for all Gold pipelines, ensuring every analytical layer operates
          from the same corrected and complete base.
        </p>
      </SparkBlock>

      {/* SECTION 3 */}
      <SparkBlock title="Gold" subtitle="Layer">
        <p className="spark-card">
          The Gold layer produces multiple co-dependend analytical outputs, each targeted at a specific question:
          <br /><br />
            <p style={{ textIndent: "15px" }}>- daily price movement and gaps<br /></p>
            <p style={{ textIndent: "15px" }} >- daily trading volume and liquidity<br /></p>
            <p style={{ textIndent: "15px" }} >- stock movement direction and volatility<br /></p>
            <p style={{ textIndent: "15px" }} >- day-to-day price movement, recent drops and market entering opportunities<br /></p>
            <p style={{ textIndent: "15px" }} >- is a stock strengthening or weakening relative to the overal market<br /></p>
            <p style={{ textIndent: "15px" }} >- is it a good or a bad day for the overal market ignoring individual stocks<br /></p>
            <p style={{ textIndent: "15px" }} >- are the earnings reports matching expectations and the market reaction to their announcement<br /></p>
          <br />
          Each of these pipelines is a separate analytics opportunity that can be analysed independently
          despite pipelines being co-dependend on each other.
        </p>
      </SparkBlock>

    </section>
  );
};
