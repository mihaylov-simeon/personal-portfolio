import analysisTable from "../../assets/img/analysis-table.png"
import analysisChart from "../../assets/img/analysis-chart.png"


const AnalysisBlock = ({ left, right }) => {
  return (
    <div className="analysis-content">
      <div className="analysis-text">
        {left}
      </div>
      
      <div className="analysis-ghost">
        {right}
      </div>
     <hr />
    </div>
  );
};

export const Analysis = () => {
  return (
    <section className="analysis-section">
        <AnalysisBlock className="analysis-intro"
            left={
                <>
                <p className="analysis-card">
                    Once the transformation logic is applied, the dataset becomes suitable for 
                    in-depth analysis of the YoY performance across dates and business categories.
                </p>
                <p className="analysis-card">
                    This section focuses on JPMorgan's total assets by revealing YoY % Change and 
                    acceleration metrics to highlight growth trends over time.
                </p>
                </>
            }
            right={
                <p className="analysis-card-title">
                    <h2>PIPELINE</h2>
                    <h2>ANALYSIS</h2>
                </p>
            }
            />

       <AnalysisBlock className="analysis-table"
            left={
                <img
                    src={analysisTable}
                    alt="Year-over-year calculation example table"
                    className="analysis-table-img"
                />
            }
            right={
                <div className="analysis-explanation-table">
                <p className="analysis-card">
                    This example illustrates how year-over-year metrics are derived using
                    window functions. Each row is compared against the previous reporting
                    period within the same category.
                </p>

                <p className="analysis-card">
                    The first period has no prior reference, while subsequent rows expose
                    both absolute (YoY Change) and relative (YoY %) movement.
                </p>
                </div>
            }
        />

        <div className="analysis-divider" />

        <AnalysisBlock className="analysis-matplotlib"
            right={
                <img
                    src={analysisChart}
                    alt="Year-over-year calculation example table"
                    className="analysis-chart-img"
                />
            }
            left={
                <div className="analysis-explanation-chart">
                <p className="analysis-card">
                    This example illustrates how year-over-year metrics are derived using
                    window functions. Each row is compared against the previous reporting
                    period within the same category.
                </p>

                <p className="analysis-card">
                    The first period has no prior reference, while subsequent rows expose
                    both absolute (YoY Change) and relative (YoY %) movement.
                </p>
                <p className="analysis-card">
                    The key takeaways from this analysis are:

                    <ul className="analysis-list analysis-card">
                        <li>Peak YoY growth is in 2024</li>
                        <li>Decelerating momentum afterwards</li>
                        <li>Growth is still positive but slowing</li>
                    </ul>
                </p>
                </div>
            }
            />
    </section>
  );
};
