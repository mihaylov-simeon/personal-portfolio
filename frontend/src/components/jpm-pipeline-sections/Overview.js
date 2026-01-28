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
          JPM PIPELINE<br />DESIGN OVERVIEW
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
            This project showcases a Spark-based ETL pipeline designed to 
            process JPMorgan Chase financial statements using a Bronze–Silver–Gold architecture.
            </p>
          <p className="overview-card">The pipeline transforms raw financial data into analytics-ready 
            datasets with year-over-year metrics, focusing on scalability, clarity, and 
            production-style design.
            </p>
          <p className="overview-card">
            The project also includes basic data analytics diagram visualised through matplotlib to demonstrate 
            the insights derived from the processed data. The diagram highlights the YoY % Change and 
            YoY Acceleration metrics.
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
