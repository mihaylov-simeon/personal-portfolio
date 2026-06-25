import analysisTable from "../../../../assets/img/analysis-table.png";
import analysisChart from "../../../../assets/img/analysis-chart.png";

export const Analysis = () => {
  return (
    <section className="jpm-analysis">
      <div className="jpm-analysis-header">
        <span className="jpm-section-label">Analysis</span>
        <h2>Pipeline Output & Findings</h2>
        <p>
          Once transformation logic is applied, the dataset supports in-depth analysis
          of YoY performance across dates and business categories.
        </p>
      </div>

      <div className="jpm-analysis-block">
        <div className="jpm-analysis-img-wrap">
          <img
            src={analysisTable}
            alt="Year-over-year calculation example table"
          />
          <p className="jpm-analysis-caption">
            Window function output — YoY change per reporting period
          </p>
        </div>
        <div className="jpm-analysis-text">
          <p>
            This table illustrates how year-over-year metrics are derived using
            window functions. Each row is compared against the previous reporting
            period within the same business category.
          </p>
          <p>
            The first period has no prior reference, while subsequent rows expose
            both absolute (YoY Change) and relative (YoY %) movement — making
            trend detection immediate.
          </p>
        </div>
      </div>

      <div className="jpm-analysis-block jpm-analysis-block--rev">
        <div className="jpm-analysis-img-wrap">
          <img
            src={analysisChart}
            alt="Matplotlib YoY percentage change chart"
          />
          <p className="jpm-analysis-caption">
            Matplotlib visualization — YoY % Change and acceleration trend
          </p>
        </div>
        <div className="jpm-analysis-text">
          <p>
            The chart surfaces not just growth, but the rate at which growth is
            changing — revealing inflection points that raw values alone would hide.
          </p>
          <p>Key findings from this analysis:</p>
          <ul className="jpm-analysis-list">
            <li>Peak YoY growth recorded in 2024</li>
            <li>Decelerating momentum in subsequent periods</li>
            <li>Growth remains positive but rate of expansion is slowing</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
