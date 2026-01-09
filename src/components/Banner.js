import React, { useState, useEffect, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircleFill } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

const LazyImage = React.lazy(() => import('../components/LazyImage'));

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(130);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Data Engineer", "Software Engineer" ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
    } else if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      // Increase deletion duration by 1 second
      setDelta(prevDelta => prevDelta + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {() =>
              <div>
                <span className="tagline">Welcome to my Website!</span>
                <h1>{`Hi! I'm Simeon`} <br />
                <span className="txt-rotate" dataperiod="300" data-rotate='[ "Data Engineer", "Web Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>In the world of data-driven systems, technology alone is not enough — structure, correctness, and trust matter.
                     I am a Data Engineer focused on designing and building reliable data pipelines that transform raw data into analytics-ready assets.
                     <br></br><br></br>
                     Grounded in strong software engineering principles, I work with scalable data platforms, batch processing, and data validation to ensure accuracy, 
                     performance, and maintainability. My work bridges raw data and business insight, with a strong emphasis on data quality, reproducibility, 
                     and real-world usability.</p>
                    <a href="#projects">
                      <button onClick={() => console.log('projects')}>Want to know more? <ArrowDownCircleFill size={30} /></button>
                    </a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {() =>
                <div>
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyImage />
                  </Suspense>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
