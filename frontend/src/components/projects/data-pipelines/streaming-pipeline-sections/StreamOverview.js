import streamingCode from "../../../../assets/img/streaming-pipeline-code.png";

export const StreamOverview = () => {
  return (
    <section
      className="jpm-hero"
      style={{ backgroundImage: `url(${streamingCode})` }}
    >
      <div className="jpm-hero-overlay" />

      <div className="jpm-hero-content">
        <span className="jpm-hero-tag">PySpark Structured Streaming · Medallion Architecture · Real-time Analytics</span>
        <h1 className="jpm-hero-title">
          Real-time Event<br />Streaming Pipeline
        </h1>
        <p className="jpm-hero-sub">
          Production-grade streaming pipeline processing high-volume customer events
          with event-time correctness, stateful deduplication, watermarking,
          and exactly-once guarantees.
        </p>
        <a
          href="https://github.com/mihaylov-simeon/Customer-event-pipeline"
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
