export const Architecture = () => {
  return (
    <section className="architecture-section">
        <p className="heading-p">Pipeline</p> 
        <p className="heading-p">architecture</p>
        <div className="architecture-canvas">
          <div className="module raw-data" />
          <div className="module spark-etl" />

          <div className="module bronze-layer" />
          <div className="module silver-layer" />
          <div className="module gold-layer" />

          <div className="module pandas-layer" />
          <div className="module chart-output" />

          {/* ARROWS OVERLAY */}
          <svg className="architecture-arrows">
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
          <line className="arrow raw-spark" x1="210" y1="250" x2="210" y2="250" markerEnd="url(#arrowhead)" />

          {/* Spark → Bronze */}
          <line className="arrow spark-bronze" x1="500" y1="250" x2="500" y2="250" markerEnd="url(#arrowhead)" />

          {/* Bronze → Silver */}
          <line className="arrow bronze-silver" x1="810" y1="250" x2="810" y2="250" markerEnd="url(#arrowhead)" />

          {/* Silver → Gold */}
          <line className="arrow silver-gold" x1="1140" y1="250" x2="1140" y2="250" markerEnd="url(#arrowhead)" />

          {/* Gold → Pandas (vertical drop) */}
          <line className="arrow gold-pandas" x1="1450" y1="250" x2="1450" y2="250" markerEnd="url(#arrowhead)" />

          {/* Pandas → Chart */}
          <line className="arrow pandas-chart" x1="1610" y1="260" x2="1610" y2="280" markerEnd="url(#arrowhead)" />
        </svg>

      </div>
    </section>
  );
};
