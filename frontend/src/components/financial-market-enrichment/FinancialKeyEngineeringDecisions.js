const EngineeringDecisions = ({ left, right }) => {
  return (
    <div className="takeaway-content engineering-desicions">
      <div className="takeaway-ghost">
        {left}
      </div>

      <div className="takeaway-text engineering-desicions">
        {right}
      </div>
    </div>
  );
};

export const FinancialKeyEngineeringDecisions = () => {
  return (
    <section className="takeaway-section engineering-decisions">
        <EngineeringDecisions className="takeaway-intro"
            right={
                <>
                <p className="takeaway-card engineering-desicions">
                    inferSchema=False - Controlled ingestion contract
                    CSV data types cannot be trusted. Disabling the schema inference forces
                    every column to be declared explicitly, preventing Spark from silently
                    assigning wrong data types based on assumptions.
                </p><hr />
                <p className="takeaway-card engineering-desicions">
                    Price-first left join in Silver layer
                    Prices are the most important part - they exist for every trading day.
                    Left-joining on prices makes sure that not a single trading day is absent.
                </p><hr />
                <p className="takeaway-card engineering-desicions">
                    coalesce over repartition before writing files
                    repartition triggers a full shuffle which causes OutOfMemory exception during
                    writes of big data loads. Coalesce merges partitions in-place without shuffling,
                    reducing the amount of output files and keeping memory pressure flat.
                </p><hr />
                <p className="takeaway-card engineering-desicions">
                    Explicit casting + UPPER_CASE aliasing in Silver layer.
                    Every column is cast and renamed within the Silver layer. All Gold pipelines
                    inherit a type-safe and consistently named contract - no implicit coercion and
                    no possibilities of schema drift downstream,
                </p><hr />
                <p className="takeaway-card engineering-desicions">
                    Null safety before every arithmetic operation
                    when((col().isNull()) | (col() == 0), None).otherwise(...) guards every derived
                    metric since dividends are absent for most days and earnings appear quarterly -
                    without explicit guards, aggregations will be corrupted by null values and division
                    errors.    
                </p><hr />
                <p className="takeaway-card engineering-desicions">
                    Inter-Gold dependency between pipelines
                    Rather than recomputing the same columns from Silver layer again, we reuse the 
                    already-materialized Gold outputs and calculations and joins them. Windowing logic
                    is not duplicated and later Gold pipelines consume Gold outputs as inputs, rather than
                    rebuilding the same metrics from Silver.
                </p>
                </>
            }
            left={
                <p className="takeaway-card-title">
                <h2>Financial Key Engineering</h2>
                <h2>Decisions</h2>
                </p>
            }
            />
    </section>
  );
};
