import React, { useState, useEffect, Suspense } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowDownCircleFill } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen';

const LazyImage = React.lazy(() => import('../components/LazyImage'));

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(170);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "Web Designer", "Graphic Designer" ];

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
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Simeon `} <span className="txt-rotate" dataperiod="300" data-rotate='[ "Web Developer", "Web Designer", Graphic Designer ]'><span className="wrap">{text}</span></span></h1>
                  <p>In the realm of digital creation, there are many skilled professional, but not all of them have the vision and client 
                    approach  – I am a web developer and designer. Grounded in both technical proficiency and design principles, 
                    I try to build online platforms with precision and purpose. My expertise lies in crafting user-friendly interfaces, 
                    optimizing performance, and ensuring compatibility across various devices and browsers. With a focus on functionality 
                    and usability, I strive to deliver solutions that meet the needs of clients and users alike, adhering to industry standards 
                    and best practices in web development.</p>
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
