/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, websiteUrl }) => {
  return (
    <Col size={12} sm={6} md={6} lg={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br />
            {websiteUrl && <a href={websiteUrl} target="_blank" rel="noreferrer">Visit the website!</a>}
        </div>
      </div>
    </Col>
  );
};
