import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import matsmart from "../assets/img/matsmart-img.jpg";
import enigma from "../assets/img/enigma-img.jpg";
import kbc from "../assets/img/kbc-test-fest-img.jpg";
import sofrino from "../assets/img/sofrino-img.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Company Website for Commercial Purposes",
      description: "Design & Development",
      imgUrl: matsmart,
      websiteUrl: "https://matsmart.bg/",
    },
    {
      title: "Company Website for Commercial Purposes",
      description: "Collaboration Design & Development",
      imgUrl: enigma,
      websiteUrl: "https://enigmadesign-bg.com/",
    },
    {
      title: "Company Website for QA Testing Event",
      description: "Design & Development",
      imgUrl: kbc,
      websiteUrl: "https://mihaylov-simeon.github.io/Test-Fest-KBC/"
    },
    {
      title: "Company Website for Commercial Purposes",
      description: "Collaboration Design & Development",
      imgUrl: sofrino,
      websiteUrl: "https://sofrino.eu/",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Dive into the digital world guided by the creative hand of an innovative developer. 
                  With a passion for crafting seamless experiences and a flair for transforming ideas 
                  into captivating realities! I strive to create intuitive and elegant experiences that 
                  resonate with audiences. Let's collaborate and bring your ideas to life with thoughtful 
                  development and attention to detail.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                      <Nav.Link eventKey="first">Websites</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Web applications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Designs</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    
                      </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>                    
                      </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
