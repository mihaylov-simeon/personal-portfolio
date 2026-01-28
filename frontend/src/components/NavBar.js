import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import { HashLink } from 'react-router-hash-link';

export const NavBar = ({ variant = "default" }) => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    // Hide the menu when a link is clicked
    const navbarCollapse = document.getElementById('basic-navbar-nav');
    if (navbarCollapse.classList.contains('show')) {
      navbarCollapse.classList.remove('show');
    }
  }

  return (
      <Navbar expand="md" className={` ${scrolled ? "scrolled" : ""} navbar-${variant}`}>
        <Container>
          <Navbar.Brand href="/">
            <div><FontAwesomeIcon icon={faTerminal} style={{ marginLeft: '5px' }} /><span>SMCODELAB</span></div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">

              <Nav.Link
                as={HashLink}
                to="/#home"
                className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("home")}
              >
                Home
              </Nav.Link>

              {variant === "default" && (
                <>
                  <Nav.Link
                    as={HashLink}
                    to="/#skills"
                    className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                    onClick={() => onUpdateActiveLink("skills")}
                  >
                    Skills
                  </Nav.Link>

                  <Nav.Link
                    as={HashLink}
                    to="/#projects"
                    className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                    onClick={() => onUpdateActiveLink("projects")}
                  >
                    Projects
                  </Nav.Link>
                </>
              )}

            </Nav>

            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/s-mihaylov/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://github.com/mihaylov-simeon" target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd" onClick={() => {
                  // Hide the menu when the Contact Me button is clicked
                  const navbarCollapse = document.getElementById('basic-navbar-nav');
                  if (navbarCollapse.classList.contains('show')) {
                    navbarCollapse.classList.remove('show');
                  }
                }}><span>Contact me</span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}
