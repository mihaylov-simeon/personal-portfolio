import { Container, Row, Col, Navbar } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";

export const Footer = ({ variant = "default" }) => {
  return (
    <footer className={`footer footer--${variant}`}>
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col xs={12} sm={6}>
            <Navbar.Brand href="/">
              <div><FontAwesomeIcon icon={faTerminal} style={{ marginRight: '5px' }} /><span>SMCODELAB</span></div>
            </Navbar.Brand>
          </Col>
          <Col xs={12} sm={6} className="text-center text-sm-end">
            <div className="footer-links">
              <a href="/">Home</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#connect">Contact</a>
            </div>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/s-mihaylov/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/mihaylov-simeon" target="_blank" rel="noreferrer"><img src={navIcon2} alt="GitHub" /></a>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <p>&copy; &gt;_SMCODELAB. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
