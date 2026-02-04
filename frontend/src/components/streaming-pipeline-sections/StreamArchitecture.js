export const StreamArchitecture = () => {
  return (
    <section className="architecture-section">
        <p className="heading-p-stream">Pipeline</p> 
        <p className="heading-p-stream">architecture</p>
        <div className="architecture-canvas-stream">

          <div className="module raw-data-stream" />
          <div className="module spark-etl-stream" />

          <div className="module bronze-layer-stream" />
          <div className="module silver-layer-stream" />
          <div className="module gold-layer-stream" />
          <div className="module pandas-layer-stream" />

          {/* ARROWS OVERLAY */}
          <svg className="architecture-arrows-stream">
            <defs>
              <marker
                id="arrowhead"
                markerWidth="20"
                markerHeight="20"
                refX="10"
                refY="5"
                orient="auto"
              >
                <polygon points="0, 0, 10, 5, 0, 10" fill="#8a909aff" />
              </marker>
            </defs>

          {/* Raw → Spark */}
          <line className="arrow raw-spark-stream" x1="210" y1="250" x2="215" y2="250" markerEnd="url(#arrowhead)" />

          {/* Spark → Bronze */}
          <line className="arrow spark-bronze-stream" x1="500" y1="250" x2="500" y2="250" markerEnd="url(#arrowhead)" />

          {/* Bronze → Silver */}
          <line className="arrow bronze-silver-stream" x1="810" y1="250" x2="820" y2="250" markerEnd="url(#arrowhead)" />

          {/* Silver → Gold */}
          <line className="arrow silver-gold-stream" x1="1140" y1="250" x2="1140" y2="250" markerEnd="url(#arrowhead)" />

          {/* Gold → Pandas (vertical drop) */}
          <line className="arrow gold-pandas-stream" x1="1450" y1="250" x2="1460" y2="250" markerEnd="url(#arrowhead)" />

        </svg>
      </div>
      <div className="architecture-description-wrapper">
        <p className="overview-card-stream">
          The pipeline follows a Medallion Architecture to clearly separate ingestion, correctness, and analytics concerns. 
          Each layer enforces strict responsibilities, ensuring predictable behavior and fault tolerance in a real-time environment.
        </p>
      </div>
    </section>
  );
};
