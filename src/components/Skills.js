/* eslint-disable jsx-a11y/img-redundant-alt */
import 'react-multi-carousel/lib/styles.css';

export const Skills = () => {
  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technologies</h2>

              <p>
                I focus on building reliable, scalable data systems that transform
                raw data into analytics-ready assets. My core skills span distributed
                data processing, orchestration, cloud platforms, and data storage,
                with a strong emphasis on correctness and maintainability.
              </p>

              <div className="skill-section">
                {/* ================= Row 1 ================= */}
                <div className="flex-wrapper">
                  {/* Apache Spark */}
                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart orange">
                      <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="circle" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <image href='/assets/skills/spark.svg' x="8" y="7" width="20" height="20" />
                    </svg>
                  </div>

                  {/* Python */}
                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart p-yellow">
                      <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="circle" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <image href="/assets/skills/python.svg" x="8" y="8" width="20" height="20" />
                    </svg>
                  </div>

                  {/* SQL */}
                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart r-blue">
                      <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="circle" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <image href="/assets/skills/sql.svg" x="10" y="8" width="17" height="20" />
                    </svg>
                  </div>
                </div>

                {/* ================= Row 2 ================= */}
                <div className="flex-wrapper">
                  {/* Apache Airflow */}
                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart s-green">
                      <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="circle" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <image href="/assets/skills/airflow.svg" x="9" y="8" width="17" height="19" />
                    </svg>
                  </div>

                  {/* AWS */}
                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart a-blue">
                      <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="circle" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <image href="/assets/skills/aws.svg" x="8" y="8" width="20" height="20" />
                    </svg>
                  </div>

                  {/* PostgreSQL / Parquet */}
                  <div className="single-chart">
                    <svg viewBox="0 0 36 36" className="circular-chart s-blue">
                      <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <path className="circle" strokeDasharray="100, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                      <image href="/assets/skills/postgresql.svg" x="8" y="9" width="19" height="20" />
                    </svg>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
