import { useState } from "react";

export const Overview = () => {
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
        className="overview-left"
        onMouseEnter={() => setHover("left")}
        onMouseLeave={() => setHover(null)}
        onMouseMove={handleMouseMove}
      >
        <div
          className={`dark-overlay ${hover === "left" ? "active" : ""}`}
          style={{ "--x": `${mouse.x}px`, "--y": `${mouse.y}px` }}
        />

        <h1 className="overview-title">
          JPM FINANCIAL METRICS<br />PIPELINE OVERVIEW
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
            Process JPMorgan Chase financial statements using a PySpark-based Bronze-Silver-Gold pipeline.
            <br /><br />
            Converts RAW financial data into a structured dataset with year-over-year (YoY) metrics for
            financial analysis.
            <br /><br />
            Includes a Matplotlib-based visualization highlighting YoY % Change and trend acceleration.
            </p>
          <div className="overview-btn-wrapper">
            <button className="view-project-btn" onClick={() => window.open("https://github.com/mihaylov-simeon/JPMC-financial-statements-pipeline", "_blank")}>
              View Project on Github
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};
