import React, { useState } from "react";
import { Col, Modal, Carousel } from "react-bootstrap";
import { FaImages } from "react-icons/fa";

export const ProjectCard = ({ projects, activeTab }) => {
  const [showCarousel, setShowCarousel] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleClose = () => {
    setShowCarousel(false);
    setSelectedProject(null);
  };

  const handleShow = (project) => {
    setShowCarousel(true);
    setSelectedProject(project);
  };

  return (
    <>
      {projects.map((project, index) => (
        <Col size={12} sm={6} md={6} lg={4} key={index}>
          <div className="proj-imgbx" onClick={() => activeTab === "second" && handleShow(project)}>
            <img src={project.imgUrl} alt={project.title} />
            <div className="proj-txtx">
              <h4>{project.title}</h4>
              <span>{project.description}</span>
              {project.websiteUrl && (
                <a href={project.websiteUrl} target="_blank" rel="noopener noreferrer">
                  Visit the website
                </a>
              )}
              {activeTab === "second" && index === 2 && (
              <div className="gallery-icon">
                <FaImages size={30} color="#fff" />
              </div>
            )}
            {activeTab === "second" && index === 3 && (
              <div className="gallery-icon">
                <FaImages size={30} color="#fff" />
              </div>
            )}
            </div>
          </div>
        </Col>
      ))}

      {selectedProject && selectedProject.screenshots && (
        <Modal show={showCarousel} onHide={handleClose} centered size="xl">
          <Modal.Body>
            <Carousel>
              {selectedProject.screenshots.map((screenshot, index) => (
                <Carousel.Item key={index}>
                  <img className="d-block w-100" src={screenshot} alt={`Screenshot ${index}`} />
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
};
