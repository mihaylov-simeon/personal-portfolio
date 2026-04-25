const OutputAndUseCases = ({ left, right }) => {
  return (
    <div className="takeaway-content engineering-desicions output-and-use">
      <div className="takeaway-ghost">
        {left}
      </div>

      <div className="takeaway-text engineering-desicions">
        {right}
      </div>
    </div>
  );
};

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

export const FinancialOutputAndUseCases = () => {
    return (
        <section className="takeaway-section engineering-decisions">
            <OutputAndUseCases className="takeaway-intro"
                right={
                    <>
                        <div className="takeaway-card engineering-desicions">
                            <p>
                                <strong>Gap & Intraday Volatility Screening</strong><br /><br />
                                Calculates how much a stock junps when the market is closed and how wide each session trades
                                compared to it's 20-day baseline.
                                The usage of the pipeline is to identify abnormal trading sessions for gap trading and volatility
                                breakout strategies.
                            </p>
                            <DataTable
                                headers={['SYMBOL', 'DATE', 'GAP_AMOUNT', 'GAP_DIRECTION', 'INTRADAY_RANGE_PCT', '20D_AVG_RANGE_PCT']}
                                rows={[
                                    ['AACG', '2008-01-30', '0.0', 'NO_GAP', '9.9990', '16.2285'],
                                    ['AACG', '2008-01-31', '-0.0100', 'DOWN', '18.9528', '13.1142'],
                                ]}
                            />
                        </div><hr />
                        <div className="takeaway-card engineering-desicions">
                            <p>
                                <strong>Volume & Liquidity Analysis</strong><br /><br />
                                Measures daily volume against 5 and 20-day rolling averages to determine whether participation is
                                spiking or not.
                                The usage of the pipeline is to confirm whether a price move is backed by real trading activity or
                                is low-conviction.
                            </p>
                            <DataTable
                                headers={['SYMBOL', 'DATE', 'PREV_VOLUME', 'VOL_CHANGE_PCT', 'VOL_DIRECTION', '5D_AVG_VOL', '20D_AVG_VOL']}
                                rows={[
                                    ['AA', '2016-11-02', '32,216,510', '-66.61', 'DOWN', '3.221E7', '3.221E7'],
                                    ['AA', '2016-11-03', '10,755,328', '-24.85', 'DOWN', '2.145E7', '2.145E7'],
                                ]}
                            />
                        </div><hr />
                        <div className="takeaway-card engineering-desicions">
                            <p>
                                <strong>Earnings Surprise Signal Validation</strong><br /><br />
                                Computes how much EPS beat or missed analysts estimates, then checks if the price reaction and volume
                                were directionally consistent with that surprise. Classifies the day after earnings as a continuation
                                or reversal of the initial reaction using LAG and LEAD window functions accross a 3-day event window.
                                The usage of the pipeline is to filter where the market genuinely priced in the result vs. reacted
                                irrationally and to identify stock positions in the day after the earnings announcement.
                            </p>
                            <DataTable
                                headers={['SYMBOL', 'DATE', 'EPS_SURPRISE', 'EARN_DAY_RET', 'NEXT_DAY_RET', 'DRIFT_DIR', 'DRIFT_ALIGN']}
                                rows={[
                                    ['AAC', '2014-10-02', 'NULL', 'NULL', '0.8108', 'UP', 'NULL'],
                                    ['AAC', '2014-10-03', 'NULL', '0.8108', '3.1635', 'UP', 'CONTINUATION'],
                                ]}
                            />
                        </div><hr />
                        <div className="takeaway-card engineering-desicions">
                            <p>
                                <strong>Risk-Adjusted Return Ranking</strong><br /><br />
                                Determines whether it's a good idea to enter the market or not. If two stocks both return
                                10% over a 20-day period - but one did it smoothly, the other swung 5% up and down daily.
                                Dividing the return by the volatility penalises the volatile one and rewards the stable one.
                                The usage of the pipeline is to rank stocks by how efficiantly they made their return, not only
                                how much.
                            </p>
                            <DataTable
                                headers={['SYMBOL', 'DATE', 'ROLL_VOL_20D', 'MAX_DRAWDOWN', 'ROLL_RET_20D', 'RISK_ADJ_RET']}
                                rows={[
                                    ['AAC', '2014-10-30', '3.1274', '-0.0597', '0.1459', '0.0466'],
                                    ['AAC', '2014-10-31', '3.0687', '-0.0597', '0.1678', '0.0546'],
                                ]}
                            />
                        </div><hr />
                        <div className="takeaway-card engineering-desicions">
                            <p>
                                <strong>Relative Strength Rotation</strong><br /><br />
                                Subtracts SPY's 20-day return from each stock's 20-day return daily, then tracks whether that gap
                                is widening or narrowing.
                                The usage of the pipeline is screen for which stocks are gaining momentum relative to the market for
                                rotational strategies.
                            </p>
                            <DataTable
                                headers={['SYMBOL', 'DATE', 'INDEX_RET_20D', 'ROLL_RET_20D', 'REL_STR_20D', 'RS_DIRECTION', 'RS_TREND']}
                                rows={[
                                    ['A', '1999-12-20', '-0.0059', '0.1609', '0.1668', 'OUTPERFORM', 'STRENGTHENING'],
                                    ['AA', '2016-12-01', '0.0468', '0.2605', '0.2137', 'OUTPERFORM', 'WEAKENING'],
                                ]}
                            />
                        </div><hr />
                        <div className="takeaway-card engineering-desicions">
                            <p>
                                <strong>Market Regime Detection</strong><br /><br />
                                Computes 30, 100, and 180-day SMAs alongside trend slopes to classify whether a stock is in a rising
                                or falling structural trend under stable or volatile conditions.
                                The usage of the pipeline is to avoid taking signals against the prevailing trend.
                            </p>
                            <DataTable
                                headers={['SYMBOL', 'DATE', '30D_SMA', '100D_SMA', '6M_SMA', '5D_TREND', '30D_TREND', 'VOL_REGIME']}
                                rows={[
                                    ['AACG', '2008-01-30', '8.7500', '8.7500', '8.7500', 'NULL', 'NULL', 'LOW'],
                                    ['AACG', '2008-02-06', '9.1534', '9.1534', '9.1534', '0.0806', 'NULL', 'NORMAL'],
                                ]}
                            />
                        </div><hr />
                        <div className="takeaway-card engineering-desicions">
                            <p>
                                <strong>Market Breadth as a Filter Layer</strong><br /><br />
                                Instead of asking "is the S&P500 index up today?", the pipeline will ask "what percentage of all stocks
                                in the dataset are up today?". If only 20% of stocks are rising, the index going up is likely being pulled
                                by large stocks - the market is not broadly healthy.
                                The usage of the pipeline is to determine if you should be taking long signals at all on a given day.
                            </p>
                            <DataTable
                                headers={['DATE', 'TOTAL_STOCKS', 'PCT_UP', 'PCT_DOWN', 'AVG_VOLATILITY', 'BREADTH_REGIME']}
                                rows={[
                                    ['2000-01-26', '2338', '0.4345', '0.4110', '4.7346', 'NEUTRAL'],
                                    ['2000-03-10', '2349', '0.3541', '0.4861', '4.7385', 'BEAR'],
                                ]}
                            />
                        </div>
                    </>
                }
                left={
                    <p className="takeaway-card-title engineering-decisions">
                        <h2>Financial Output</h2>
                        <h2>And Use Cases</h2>
                    </p>
                }
            />
        </section>
    )
}
