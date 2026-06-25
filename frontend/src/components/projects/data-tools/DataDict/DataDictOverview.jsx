import "./DataDict.css";
import financialCode from "../../../../assets/img/financial-code-image.png";

export const DataDictOverview = () => {
  return (
    <section
      className="dd-hero"
      style={{ backgroundImage: `url(${financialCode})` }}
    >
      <div className="dd-hero-overlay" />

      <div className="dd-hero-content">
        <span className="dd-hero-tag">React · Vite · Tailwind CSS · Pandas · Polars · PySpark</span>
        <h1 className="dd-hero-title">
          Data Function<br />Dictionary
        </h1>
        <p className="dd-hero-sub">
          An interactive browser-based reference for data engineers. Click any function,
          see it run against real data, and get the exact code in Pandas, Polars,
          or PySpark - instantly.
        </p>
        <a
          href="https://datadict-dun.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="dd-hero-btn"
        >
          Open Tool →
        </a>
      </div>

      <span className="dd-hero-scroll">↓ scroll to explore</span>
    </section>
  );
};
