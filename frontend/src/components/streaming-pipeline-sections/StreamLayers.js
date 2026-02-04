const SparkBlock = ({ title, subtitle, children }) => {
  return (
    <div className="spark-content-stream">
      <div className="spark-text-stream">
        {children}
      </div>
      <div className="spark-ghost-stream">
        {title && <h2>{title}</h2>}
        {subtitle && <h2>{subtitle}</h2>}
      </div>

      <hr />
    </div>
  );
};

export const StreamLayers = () => {
  return (
    <section className="spark-section-stream">

      {/* SECTION 1 */}
      <SparkBlock title="Bronze" subtitle="Layer">
        <p className="spark-card-stream">
          The Bronze layer ingests raw customer events as a continuous stream, enforcing a fixed schema 
          while preserving the original event payload. Data is written in an append-only, replayable manner 
          with no business logic applied, allowing the layer to function as a durable source of truth. 
          <br /><br />
          Checkpointed streaming ingestion ensures fault tolerance and enables deterministic 
          reprocessing of downstream layers when needed.
        </p>
      </SparkBlock>

      {/* SECTION 2 */}
      <SparkBlock title="Silver" subtitle="Layer">
        <p className="spark-card-stream">
          The Silver layer enforces event-time correctness by resolving the core challenges of streaming data, 
          including out-of-order events, duplicates, and late arrivals. Events are deterministically deduplicated 
          using a unique identifier and ordered based on event-time semantics rather than processing time. 
          <br /><br />
          Watermarks are applied to bound state growth and define clear late-data handling rules, producing a consistent 
          and analytically reliable stream for downstream aggregation.
        </p>
      </SparkBlock>

      {/* SECTION 3 */}
      <SparkBlock title="Gold" subtitle="Layer">
        <p className="spark-card-stream">
          The Gold layer produces analytics-ready outputs derived from the corrected event stream, with each stream 
          designed to answer a specific analytical question. Windowed aggregations are computed and written as independent, 
          append-only outputs to ensure predictable behavior and restart safety. 
          <br /><br />
          By isolating analytical concerns across multiple Gold streams, the pipeline maintains scalability, flexibility, 
          and fault containment.
        </p>
      </SparkBlock>

    </section>
  );
};
