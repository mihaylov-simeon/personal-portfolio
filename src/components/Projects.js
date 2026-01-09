import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import dummyImage from "../assets/img/financial-wallpaper.jpg"

export const Projects = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Projects</h2>

            <p>
              A selection of data-focused projects showcasing end-to-end pipelines
              and practical tools. Each project emphasizes clarity, correctness,
              and real-world applicability.
            </p>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Data Pipelines</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Data Tools</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                {/* ================= Data Pipelines ================= */}
                <Tab.Pane eventKey="first">
                  <Row>
                    <ProjectCard
                      projects={[
                        {
                          title: "JPM Financial Statements Pipeline",
                          description:
                            "Apache Spark pipeline with Bronze / Silver / Gold layers and YoY analytics.",
                          imgUrl: dummyImage,
                          route: "/projects/jpm-pipeline"
                        },
                      ]}
                    />
                  </Row>
                </Tab.Pane>

                {/* ================= Data Tools ================= */}
                <Tab.Pane eventKey="second">
                  <Row>
                    <ProjectCard
                      projects={[
                        {
                          title: "SQL → Spark Converter",
                          description:
                            "Tool that converts SQL queries into equivalent PySpark transformations.",
                          imgUrl: dummyImage,
                          route: "/projects/jpm-pipeline"
                        },
                      ]}
                    />
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
