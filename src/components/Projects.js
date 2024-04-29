import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import matsmart from "../assets/img/matsmart-img.webp";
import enigma from "../assets/img/enigma-img.webp";
import kbc from "../assets/img/kbc-test-fest-img.webp";
import sofrino from "../assets/img/sofrino-img.webp";
import braainy from "../assets/img/braainy-logo.webp";
import chefandgastro from "../assets/img/chef&gastro.webp";
import decoristic from "../assets/img/decoristic-logo.webp";
import labelle from "../assets/img/la-belle-logo.webp";
import ntbis from "../assets/img/ntbis-logo.webp";
import vedra from "../assets/img/vedra-logo.webp";
import bggenerator from "../assets/img/background-generator.webp"


export const Projects = () => {

  const websites = [
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

  const web = [
    {
      title: "Web application for gradient color generation",
      description: "Design & Development",
      imgUrl: bggenerator,
      websiteUrl: "https://mihaylov-simeon.github.io/backgroundGenerator/"
    },
  ];

  const designs = [
    {
      title: "Logo design for a cooking company",
      description: "Design",
      imgUrl: chefandgastro,
    },
    {
      title: "Logo design for a fashion studio",
      description: "Design",
      imgUrl: labelle,
    },
    {
      title: "Logo design for a technical writing company",
      description: "Design",
      imgUrl: ntbis,
    },
    {
      title: "Logo design for a decor company",
      description: "Design",
      imgUrl: decoristic,
    },
    {
      title: "Logo design for a tech company",
      description: "Design",
      imgUrl: braainy,
    },
    {
      title: "Logo design for an accounting company",
      description: "Design",
      imgUrl: vedra,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
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
              <Tab.Content id="slideInUp">
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      websites.map((project, index) => {
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
                      web.map((project, index) => {
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
                      designs.map((project, index) => {
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
          </Col>
        </Row>
      </Container>
    </section>
  )
}
