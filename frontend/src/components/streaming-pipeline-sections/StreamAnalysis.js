import activeUsers from "../../assets/img/active-users-table.png"
import eventCount from "../../assets/img/event-count-table.png"
import purchasePerDevice from "../../assets/img/purchase-per-device-table.png"
import revenuePerWindow from "../../assets/img/revenue-per-window-table.png"


const AnalysisBlock = ({ left, right }) => {
  return (
    <div className="analysis-content-stream">
      <div className="analysis-text-stream">
        {left}
      </div>
      
      <div className="analysis-ghost-stream">
        {right}
      </div>
     <hr />
    </div>
  );
};

export const StreamAnalysis = () => {
  return (
    <section className="analysis-section-stream">
        <AnalysisBlock className="analysis-intro-stream"
            left={
                <p className="analysis-card-title-stream">
                    <h2>GOLD PIPELINE</h2>
                    <h2>ANALYSIS</h2>
                </p>
            }
            right={
                <>
                <p className="analysis-card-stream">
                    This section explores the analytical outputs produced in the Gold layer and demonstrates how corrected 
                    streaming data is transformed into meaningful, business-facing metrics. Each Gold stream is analyzed 
                    independently to highlight specific behavioral and performance patterns derived from real-time customer events. 
                    <br /><br />
                    The focus is not on visualization alone, but on validating the correctness, isolation, and analytical intent of 
                    each metric produced by the pipeline.
                </p>
                </>
            }
            />

       <AnalysisBlock className="analysis-table-stream"
            left={
                <div className="analysis-explanation-table-stream">
                <p className="analysis-card-stream">
                    This pipeline estimates user engagement by computing the number of distinct active 
                    users within each event-time window. Rather than counting raw events, it focuses on 
                    unique user presence, providing a more meaningful measure of platform reach and retention. 
                    <br /><br />
                    The aggregation is performed independently from other Gold pipelines, ensuring that engagement 
                    logic remains isolated from traffic or revenue calculations. 
                    <br /><br />
                    This metric is commonly used to evaluate growth, adoption, and behavioral trends at scale.
                </p>
                </div>
            }
            right={
                <img
                    src={activeUsers}
                    alt="Year-over-year calculation example table"
                    className="analysis-table-img-stream"
                />
            }
        />

        <div className="analysis-divider" />

        <AnalysisBlock className="analysis-table"
            left={
                <img
                    src={eventCount}
                    alt="Year-over-year calculation example table"
                    className="analysis-table-img-stream"
                />
            }
            right={
                <div className="analysis-explanation-table-stream">
                <p className="analysis-card-stream">
                    This pipeline measures overall customer activity by aggregating the total number of 
                    events within fixed event-time windows. It provides a high-level view of platform usage 
                    and traffic intensity over time, independent of event type or user identity. 
                    <br /><br />
                    Because the  aggregation is based on event-time and built on the corrected Silver stream, 
                    it accurately reflects real user behavior even when events arrive late or out of order. 
                    <br /><br />
                    This metric is typically used to identify activity spikes, seasonal patterns, 
                    and system load characteristics.
                </p>
                </div>
            }
        />

        <div className="analysis-divider-stream" />

        <AnalysisBlock className="analysis-table-stream"
            left={
                <div className="analysis-explanation-table-stream">
                <p className="analysis-card-stream">
                    The device-based pipeline segments customer activity by device category, such as mobile, desktop, or tablet. 
                    It highlights how users interact with the system across different platforms and reveals shifts in usage patterns 
                    over time.
                    <br /><br />
                    By aggregating events per device type within event-time windows, this stream supports downstream analysis 
                    related to product optimization, performance tuning, and user experience decisions. 
                    <br /><br />
                    Its separation into an independent 
                    Gold pipeline ensures that segmentation logic does not interfere with core activity or revenue metrics.
                </p>
                </div>
            }
            right={
                <img
                    src={purchasePerDevice}
                    alt="Year-over-year calculation example table-stream"
                    className="analysis-table-img-stream"
                />
            }
        />

        <div className="analysis-divider-stream" />

        <AnalysisBlock className="analysis-table-stream"
            left={
                <img
                    src={revenuePerWindow}
                    alt="Year-over-year calculation example table-stream"
                    className="analysis-table-img-stream"
                />
            }
            right={
                <div className="analysis-explanation-table-stream">
                <p className="analysis-card-stream">
                    The revenue pipeline focuses exclusively on monetizable events and aggregates 
                    their values within event-time windows. By filtering and aggregating only relevant 
                    event types, this stream isolates financial signals from general activity noise.
                    <br /><br />
                    The resulting metric enables accurate tracking of revenue trends over time and ensures 
                    that duplicate or late purchase events do not inflate reported values. 
                    <br /><br />
                    This pipeline demonstrates how business-critical metrics can be derived safely from a 
                    streaming source without sacrificing correctness.
                </p>
                </div>
            }
        />
    </section>
  );
};
