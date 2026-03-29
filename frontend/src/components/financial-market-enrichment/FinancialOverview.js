import { useState } from "react";

export const FinancialOverview = () => {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [hover, setHover] = useState(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMouse({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section className="overview-section">

      {/* LEFT */}
      <div
        className="financial-overview-left"
        onMouseEnter={() => setHover("left")}
        onMouseLeave={() => setHover(null)}
        onMouseMove={handleMouseMove}
      >
        <div
          className={`dark-overlay ${hover === "left" ? "active" : ""}`}
          style={{ "--x": `${mouse.x}px`, "--y": `${mouse.y}px` }}
        />

        <h1 className="overview-title">
          FINANCIAL MARKET PIPELINE<br />DESIGN OVERVIEW
        </h1>
      </div>

      {/* RIGHT */}
      <div
        className="overview-right"
        onMouseEnter={() => setHover("right")}
        onMouseLeave={() => setHover(null)}
        onMouseMove={handleMouseMove}
      >

        {/* NORMAL CONTENT */}
         <div className="overview-content">
          <h2>Project Overview</h2>
          <p className="overview-card">
              A PySpark-based ETL pipeline that transforms raw financial market data
              into analytics-ready datasets enriched with market behavior signals. It processes daily prices, earnings,
              and dividends to create pipelines which describe trend, volatility, risk, and event-driven reactions.
              <br /><br />
              The pipeline follows a Medallion Archivetcure, logically separating ingestion, integration, and feature
              engineering into clear Bronze, Silver, Gold layers, allowing each of them to focus on a specific responsibility
              <br /><br />
              The Gold layer produces multiple analytical datasets, including price metrics, earnings reaction signals, market
              regime classification, and risk indicators, enabling flexible downstream analysis and modeling.
              <br /><br />
              - Bronze ingestion of raw market datasets<br />
              - Silver integration of prices, earnings, and dividends<br />
              - Gold-layer feature engineering for analytical signals<br />
              - Window-based calculations for rolling and lagged metrics
            </p>
          <div className="overview-btn-wrapper">
            <button className="view-project-btn" onClick={() => window.open("https://github.com/mihaylov-simeon/financial-market-event-enrichment-pipeline", "_blank")}>
              View Project on Github
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};
