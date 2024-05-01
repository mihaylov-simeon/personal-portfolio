import React, { useState } from "react";
import { Col, Modal, Carousel } from "react-bootstrap";

export const ProjectCard = ({ projects, activeTab }) => {
  const [showCarousel, setShowCarousel] = useState(false);

  const handleClose = () => setShowCarousel(false);
  const handleShow = () => setShowCarousel(true);

  return (
    <>
      {projects.map((project, index) => (
        <Col size={12} sm={6} md={6} lg={4} key={index}>
          <div className="proj-imgbx" onClick={activeTab === "second" ? handleShow : null}>
            <img src={project.imgUrl} alt={project.title} />
            <div className="proj-txtx">
              <h4>{project.title}</h4>
              <span>{project.description}</span><br />
              {project.websiteUrl && (
                <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                  Visit the website
                </a>
              )}
            </div>
          </div>

          {activeTab === "second" && (
            <Modal show={showCarousel} onHide={handleClose} centered size="xl">
              <Modal.Body>
                <Carousel>
                  {project.screenshots && project.screenshots.length > 0 ? (
                    project.screenshots.map((screenshot, index) => (
                      <Carousel.Item key={index}>
                        <img className="d-block w-100" src={screenshot} alt={`Screenshot ${index}`} />
                      </Carousel.Item>
                    ))
                  ) : (
                    <p>No screenshots available</p>
                  )}
                </Carousel>
              </Modal.Body>
            </Modal>
          )}
        </Col>
      ))}
    </>
  );
};
