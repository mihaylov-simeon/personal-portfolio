const points = [
  "The year-over-year and acceleration metrics reveal not only growth, but the direction and momentum of that growth.",
  "While total assets continue to increase, the deceleration in YoY percentage change highlights a slowdown - a signal that would be invisible when observing absolute values alone.",
  "By surfacing this information, the pipeline enables early detection of trending points and supports more informed financial analysis and more accurate decision-making.",
];

export const Takeaway = () => {
  return (
    <section className="jpm-takeaway">
      <span className="jpm-section-label">Takeaway</span>
      <h2 className="jpm-takeaway-title">Analytical Insight</h2>

      <div className="jpm-takeaway-points">
        {points.map((p, i) => (
          <div className="jpm-takeaway-point" key={i}>
            <span className="jpm-takeaway-icon">▸</span>
            <p>{p}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
