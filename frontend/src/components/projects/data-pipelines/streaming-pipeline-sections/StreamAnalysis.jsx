import activeUsers from "../../../../assets/img/active-users-table.png";
import eventCount from "../../../../assets/img/event-count-table.png";
import purchasePerDevice from "../../../../assets/img/purchase-per-device-table.png";
import revenuePerWindow from "../../../../assets/img/revenue-per-window-table.png";

const blocks = [
  {
    img: activeUsers,
    caption: "Active Users per Event-Time Window",
    label: "Active User Engagement",
    text: [
      "Estimates user engagement by computing the number of distinct active users within each event-time window. Rather than counting raw events, it focuses on unique user presence - a more meaningful measure of platform reach and retention.",
      "The aggregation is performed independently from other Gold pipelines, ensuring that engagement logic remains isolated from traffic or revenue calculations.",
    ],
    bullets: [
      "Distinct user count - not raw event volume",
      "Independent Gold stream - isolated from revenue metrics",
      "Evaluates growth, adoption, and behavioral trends",
    ],
  },
  {
    img: eventCount,
    caption: "Total Events per Event-Time Window",
    label: "Platform Traffic Volume",
    text: [
      "Measures overall customer activity by aggregating the total number of events within fixed event-time windows. Provides a high-level view of platform usage and traffic intensity over time, independent of event type or user identity.",
      "Built on the corrected Silver stream, it accurately reflects real user behavior even when events arrive late or out of order.",
    ],
    bullets: [
      "Event-time windows - not wall-clock time",
      "Late-arrival tolerant via watermarking",
      "Identifies activity spikes and seasonal patterns",
    ],
  },
  {
    img: purchasePerDevice,
    caption: "Purchase Events Segmented by Device",
    label: "Device-Based Segmentation",
    text: [
      "Segments customer activity by device category - mobile, desktop, tablet - and reveals shifts in usage patterns over time. Aggregating events per device type within event-time windows supports product optimization and UX decisions.",
      "Its separation into an independent Gold pipeline ensures that segmentation logic does not interfere with core activity or revenue metrics.",
    ],
    bullets: [
      "Device-level granularity - mobile, desktop, tablet",
      "Independent stream - no cross-metric interference",
      "Supports performance tuning and UX analysis",
    ],
  },
  {
    img: revenuePerWindow,
    caption: "Revenue Aggregated by Event-Time Window",
    label: "Revenue per Window",
    text: [
      "Focuses exclusively on monetizable events and aggregates their values within event-time windows. By filtering only relevant event types, this stream isolates financial signals from general activity noise.",
      "Duplicate or late purchase events do not inflate reported values - demonstrating how business-critical metrics can be derived safely from a streaming source without sacrificing correctness.",
    ],
    bullets: [
      "Filters only monetizable event types",
      "Deduplication prevents revenue inflation",
      "Exactly-once correctness for financial accuracy",
    ],
  },
];

export const StreamAnalysis = () => {
  return (
    <section className="jpm-analysis">
      <div className="jpm-analysis-header">
        <span className="jpm-section-label">Gold Layer Analysis</span>
        <h2>Pipeline Output &amp; Findings</h2>
        <p>
          Each Gold stream is analyzed independently to highlight behavioral and performance
          patterns derived from real-time customer events. The focus is on validating
          correctness, isolation, and analytical intent.
        </p>
      </div>

      {blocks.map((block, i) => (
        <div
          key={i}
          className={`jpm-analysis-block${i % 2 === 1 ? " jpm-analysis-block--rev" : ""}`}
        >
          <div className="jpm-analysis-img-wrap">
            <img src={block.img} alt={block.caption} />
            <p className="jpm-analysis-caption">{block.caption}</p>
          </div>
          <div className="jpm-analysis-text">
            <span className="jpm-section-label">{block.label}</span>
            {block.text.map((t, j) => <p key={j}>{t}</p>)}
            <ul className="jpm-analysis-list">
              {block.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
};
