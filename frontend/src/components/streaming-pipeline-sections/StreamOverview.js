import { useState } from "react";

export const StreamOverview = () => {
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
        className="overview-left-stream"
        onMouseEnter={() => setHover("left")}
        onMouseLeave={() => setHover(null)}
        onMouseMove={handleMouseMove}
      >
        <div
          className={`dark-overlay ${hover === "left" ? "active" : ""}`}
          style={{ "--x": `${mouse.x}px`, "--y": `${mouse.y}px` }}
        />

        <h1 className="overview-title">
          REAL-TIME STREAMING<br />PIPELINE OVERVIEW
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
            This project demonstrates a production-style streaming pipeline designed to process
            high-volume customer events in real time using PySpark Structured Streaming.
            </p>
          <p className="overview-card">
            It handles out-of-order, duplicated, and late-arriving events through event-time processing,
            watermarking, and stateful transformations to ensure correctness, handling ingestion,
            data reliability, and analytical computation into distinct layers, producing consistent,
            analytics-ready outputs in a streaming environment.
            </p>
          <p className="overview-card">
            - Event-time processing with watermarks
            <br />
            - Stateful deduplication of streaming events
            <br />
            - Exactly-once processing guarantees via checkpoints
            <br />
            - Independent Gold-layer for analytical isolation
          </p>
          <div className="overview-btn-wrapper">
            <button className="view-project-btn" onClick={() => window.open("https://github.com/mihaylov-simeon/Customer-event-pipeline", "_blank")}>
              View Project on Github
            </button>
          </div>
        </div>
      </div>

    </section>
  );
};
