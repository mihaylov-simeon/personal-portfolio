/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircleFill } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

const LazyImage = React.lazy(() => import('./LazyImage'));

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(70);

  const toRotate = [ "Welcome to my portfolio!" ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text, delta]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
    } else if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(prev => prev + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">

          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {() =>
                <div>

                  <span className="tagline txt-rotate">
                    <span className="wrap">{text}</span>
                  </span>

                  <h1>
                    Data Engineer <br />
                    <span className="heading-span">Building scalable data pipelines</span>
                  </h1>

                  <p>
                    I design and build production-ready data pipelines using PySpark, streaming, and medallion architecture.
                    Focused on transforming raw data into reliable, analytics-ready systems.
                  </p>

                  <a href="#projects">
                    <button onClick={() => console.log('projects')}>
                      View Projects <ArrowDownCircleFill size={30} />
                    </button>
                  </a>

                </div>
              }
            </TrackVisibility>
          </Col>

          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {() =>
                <div>
                  <Suspense fallback={<div>Loading...</div>}>
                    <LazyImage />
                  </Suspense>
                </div>
              }
            </TrackVisibility>
          </Col>

        </Row>
      </Container>
    </section>
  )
}