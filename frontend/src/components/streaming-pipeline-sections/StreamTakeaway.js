const TakeawayBlock = ({ left, right }) => {
  return (
    <div className="takeaway-content-stream">
      <div className="takeaway-ghost">
        {left}
      </div>

      <div className="takeaway-text">
        {right}
      </div>
      <hr />
    </div>
  );
};

export const StreamTakeaway = () => {
  return (
    <section className="takeaway-section">
        <TakeawayBlock className="takeaway-intro"
            right={
              <p className="takeaway-card-title">
                <h2>Analytical</h2>
                <h2>Takeaway</h2>
                </p>
            }
            left={
                <>
                <p className="takeaway-card">
                    This project demonstrates how a production-grade streaming pipeline can be designed to remain correct,
                    fault-tolerant, and analytically reliable under real-world conditions.
                    <br /><br />
                    By separating ingestion, correctness, and analytics concerns through a Medallion Architecture, the pipeline
                    ensures that late, duplicated, or out-of-order events do not compromise downstream metrics.
                    <br /><br />
                    The result is a scalable and extensible streaming system where analytical outputs can evolve independently
                    while preserving strong correctness guarantees.
                </p>
                </>
            }
            />
    </section>
  );
};
