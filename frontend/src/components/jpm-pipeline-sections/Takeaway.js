const TakeawayBlock = ({ left, right }) => {
  return (
    <div className="takeaway-content">
      <div className="takeaway-ghost">
        {left}
      </div>

      <div className="takeaway-text">
        {right}
      </div>      
      <hr />
    </div>
  );
};

export const Takeaway = () => {
  return (
    <section className="takeaway-section">
        <TakeawayBlock className="takeaway-intro"
            right={
                <>
                <p className="takeaway-card">
                    The year-over-year and acceleration metrics reveal not only growth, 
                    but the direction and momentum of that growth.
                </p>
                <p className="takeaway-card">
                    While total assets continue to increase, the deceleration in YoY percentage 
                    change highlights a slowdown in expansion rate — a signal that would be invisible 
                    when observing absolute values alone.
                </p>
                <p className="takeaway-card">
                    By surfacing both level and momentum, the pipeline enables early detection of trend 
                    inflection points and supports more informed financial analysis and decision-making.
                </p>
                </>
            }
            left={
                <p className="takeaway-card-title">
                <h2>Analytical</h2>
                <h2>Takeaway</h2>
                </p>
            }
            />
    </section>
  );
};
