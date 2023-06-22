import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";

let ProjectSectionMobile = () => {
  return (
    <Container className="project-section-container-mobile">
      <Row className="row-projects-section-title">
        <Col className="col-projects-title" lg={12}>
          <div className="project-title-box">
            <h2>Projects</h2>
            <h3>Where code comes to life</h3>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectSectionMobile;

