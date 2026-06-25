const DataTable = ({ headers, rows }) => (
  <div className="output-data-table-wrapper">
    <table className="output-data-table">
      <thead>
        <tr>{headers.map(h => <th key={h}>{h}</th>)}</tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i}>{row.map((cell, j) => <td key={j}>{cell}</td>)}</tr>
        ))}
      </tbody>
    </table>
  </div>
);

const outputs = [
  {
    title: "Gap & Intraday Volatility Screening",
    description: "Calculates how much a stock jumps when the market is closed and how wide each session trades compared to its 20-day baseline. Used to identify abnormal trading sessions for gap trading and volatility breakout strategies.",
    headers: ['SYMBOL', 'DATE', 'GAP_AMOUNT', 'GAP_DIRECTION', 'INTRADAY_RANGE_PCT', '20D_AVG_RANGE_PCT'],
    rows: [
      ['AACG', '2008-01-30', '0.0', 'NO_GAP', '9.9990', '16.2285'],
      ['AACG', '2008-01-31', '-0.0100', 'DOWN', '18.9528', '13.1142'],
    ],
  },
  {
    title: "Volume & Liquidity Analysis",
    description: "Measures daily volume against 5 and 20-day rolling averages to determine whether participation is spiking or drying up. Used to confirm whether a price move is backed by real trading activity or is low-conviction.",
    headers: ['SYMBOL', 'DATE', 'PREV_VOLUME', 'VOL_CHANGE_PCT', 'VOL_DIRECTION', '5D_AVG_VOL', '20D_AVG_VOL'],
    rows: [
      ['AA', '2016-11-02', '32,216,510', '-66.61', 'DOWN', '3.221E7', '3.221E7'],
      ['AA', '2016-11-03', '10,755,328', '-24.85', 'DOWN', '2.145E7', '2.145E7'],
    ],
  },
  {
    title: "Earnings Surprise Signal Validation",
    description: "Computes how much EPS beat or missed analyst estimates, then checks if the price reaction and volume were directionally consistent with that surprise. Classifies the day-after-earnings as a continuation or reversal using LAG/LEAD window functions across a 3-day event window.",
    headers: ['SYMBOL', 'DATE', 'EPS_SURPRISE', 'EARN_DAY_RET', 'NEXT_DAY_RET', 'DRIFT_DIR', 'DRIFT_ALIGN'],
    rows: [
      ['AAC', '2014-10-02', 'NULL', 'NULL', '0.8108', 'UP', 'NULL'],
      ['AAC', '2014-10-03', 'NULL', '0.8108', '3.1635', 'UP', 'CONTINUATION'],
    ],
  },
  {
    title: "Risk-Adjusted Return Ranking",
    description: "Determines whether it is a good idea to enter the market. Divides the 20-day rolling return by rolling volatility — penalising volatile stocks and rewarding stable ones. Used to rank stocks by how efficiently they made their return, not only how much.",
    headers: ['SYMBOL', 'DATE', 'ROLL_VOL_20D', 'MAX_DRAWDOWN', 'ROLL_RET_20D', 'RISK_ADJ_RET'],
    rows: [
      ['AAC', '2014-10-30', '3.1274', '-0.0597', '0.1459', '0.0466'],
      ['AAC', '2014-10-31', '3.0687', '-0.0597', '0.1678', '0.0546'],
    ],
  },
  {
    title: "Relative Strength Rotation",
    description: "Subtracts SPY's 20-day return from each stock's 20-day return daily, then tracks whether that gap is widening or narrowing. Used to screen which stocks are gaining momentum relative to the market for rotational strategies.",
    headers: ['SYMBOL', 'DATE', 'INDEX_RET_20D', 'ROLL_RET_20D', 'REL_STR_20D', 'RS_DIRECTION', 'RS_TREND'],
    rows: [
      ['A', '1999-12-20', '-0.0059', '0.1609', '0.1668', 'OUTPERFORM', 'STRENGTHENING'],
      ['AA', '2016-12-01', '0.0468', '0.2605', '0.2137', 'OUTPERFORM', 'WEAKENING'],
    ],
  },
  {
    title: "Market Regime Detection",
    description: "Computes 30, 100, and 180-day SMAs alongside trend slopes to classify whether a stock is in a rising or falling structural trend under stable or volatile conditions. Used to avoid taking signals against the prevailing trend.",
    headers: ['SYMBOL', 'DATE', '30D_SMA', '100D_SMA', '6M_SMA', '5D_TREND', '30D_TREND', 'VOL_REGIME'],
    rows: [
      ['AACG', '2008-01-30', '8.7500', '8.7500', '8.7500', 'NULL', 'NULL', 'LOW'],
      ['AACG', '2008-02-06', '9.1534', '9.1534', '9.1534', '0.0806', 'NULL', 'NORMAL'],
    ],
  },
  {
    title: "Market Breadth as a Filter Layer",
    description: "Instead of asking \"is the index up today?\", this pipeline asks what percentage of all stocks are up. If only 20% are rising but the index is up, it is being pulled by large-caps — the market is not broadly healthy. Used to determine whether long signals should be taken at all on a given day.",
    headers: ['DATE', 'TOTAL_STOCKS', 'PCT_UP', 'PCT_DOWN', 'AVG_VOLATILITY', 'BREADTH_REGIME'],
    rows: [
      ['2000-01-26', '2338', '0.4345', '0.4110', '4.7346', 'NEUTRAL'],
      ['2000-03-10', '2349', '0.3541', '0.4861', '4.7385', 'BEAR'],
    ],
  },
];

export const FinancialOutputAndUseCases = () => {
  return (
    <section className="jpm-takeaway">
      <span className="jpm-section-label">Gold Layer Outputs</span>
      <h2 className="jpm-takeaway-title">Financial Output &amp; Use Cases</h2>

      {outputs.map((output, i) => (
        <div key={i} className="jpm-output-block">
          <span className="jpm-section-label">{output.title}</span>
          <p>{output.description}</p>
          <DataTable headers={output.headers} rows={output.rows} />
        </div>
      ))}
    </section>
  );
};
