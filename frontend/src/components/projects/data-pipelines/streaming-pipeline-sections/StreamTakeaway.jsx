const points = [
  "By separating ingestion, clean data, and analytics through a Medallion Architecture, the pipeline ensures late, duplicated, or out-of-order events never compromise downstream metrics. Each layer has exactly one responsibility.",
  "Watermarking and deduplication are strategic design decisions that prove the pipeline's correctness under real-world streaming conditions.",
  "The result is a scalable system where Gold streams can be added or modified independently, without disrupting the correctness of the Bronze and Silver layers.",
];

export const StreamTakeaway = () => {
  return (
    <section className="jpm-takeaway">
      <span className="jpm-section-label">Takeaway</span>
      <h2 className="jpm-takeaway-title">Analytical Takeaway</h2>

      <div className="jpm-takeaway-points">
        {points.map((point, i) => (
          <div key={i} className="jpm-takeaway-point">
            <span className="jpm-takeaway-icon">◆</span>
            <p>{point}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
