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
import bggen1 from "../assets/img/bg-generator-1.webp";
import mt1 from "../assets/img/mt-1.webp";
import mt2 from "../assets/img/mt-2.webp";
import mt3 from "../assets/img/mt-3.webp";
import mt4 from "../assets/img/mt-4.webp";
import mt5 from "../assets/img/mt-5.webp";
import mt6 from "../assets/img/mt-6.webp";
import mt7 from "../assets/img/mt-7.webp";
import mt8 from "../assets/img/mt-8.webp";
import mt9 from "../assets/img/mt-9.webp";
import todo1 from "../assets/img/to-do-1.webp";
import todo2 from "../assets/img/to-do-2.webp";
import todo3 from "../assets/img/to-do-3.webp";
import note1 from "../assets/img/main-note-ok.png";
import note2 from "../assets/img/register.png";
import note3 from "../assets/img/login.png";
import note4 from "../assets/img/main-update-note.png"
import note5 from "../assets/img/main-delete.png";
import note6 from "../assets/img/main.png";

export const Projects = () => {
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
                    <ProjectCard
                      projects={[
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
                      ]}
                      activeTab="first"
                    />
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    <ProjectCard
                      projects={[
                        {
                          title: "Gradient Color Generator",
                          description: "HTML/CSS/JS Application, which is used to generate color gradients and take their values in different color schemes.",
                          imgUrl: bggen1,
                          websiteUrl: "https://mihaylov-simeon.github.io/backgroundGenerator/",
                        },
                        {
                          title: "Simple To-Do List",
                          description: "HTML/CSS/JS Application, which is used for simple task management.",
                          imgUrl: todo1,
                          screeshots: [todo1, todo2, todo3],
                          websiteUrl: "https://mihaylov-simeon.github.io/toDoList/",
                        },
                        {
                          title: "The Movie Trailer Spot",
                          description: "Backend: Java/Spring, Frontend: HTML/CSS/JS + ReactJS application for movie trailers.",
                          imgUrl: mt1,
                          screenshots: [mt1, mt2, mt3, mt4, mt5, mt6, mt7, mt8, mt9],
                        },
                        {
                          title: "Notes Manager",
                          description: "Backend: Python/Django, Frontend: HTML/CSS/JS + ReactJS application for personal note management.",
                          imgUrl: note1,
                          screenshots: [note2, note3, note6, note1, note5, note4],
                        },
                      ]}
                      activeTab="second"
                    />
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    <ProjectCard
                      projects={[
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
                      ]}
                      activeTab="third"
                    />
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
