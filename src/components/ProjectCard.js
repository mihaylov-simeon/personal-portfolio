import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProjectCard = ({ projects }) => {
  return (
    <>
      {projects.map((project, index) => (
        <Col size={12} sm={6} md={6} lg={4} key={index}>
          <h4 className="proj-title">{project.title}</h4>
          <div className="proj-imgbx">
            <img src={project.imgUrl} alt={project.title} />
            <div className="proj-txtx">
              <span>{project.description}</span>

              {project.route && (
                <Link to={project.route} className="project-link" target="_blank">
                  View project
                </Link>
              )}
            </div>
          </div>
        </Col>
      ))}
    </>
  );
};
