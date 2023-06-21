import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

let ProjectCard = () => {
  return (
    <Card className="project-card" style={{ width: "22rem" }}>
      <Card.Img
      className="project-card-image"
        variant="top"
        src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text>Tech Stack:</Card.Text>
        <div className="card-links-flex-box">
          {" "}
          <a>Link Preview</a>
          <a>View Code</a>
        </div>
      </Card.Body>
    </Card>
  );
};

let ProjectsSection = () => {
  return (
    <Container className="project-section-container-desktop">
      <Row className="row-projects-section-title">
        <Col className="col-projects-title" lg={12}>
          <div className="project-title-box">
            <h2>Projects</h2>
            <h3>Where code comes to life</h3>
          </div>
        </Col>
      </Row>
      <Row className="row-projects-list-one">
        <Col lg={4}>
          <ProjectCard />
        </Col>
        <Col lg={4}>
          {" "}
          <ProjectCard />
        </Col>
        <Col lg={4}>
          {" "}
          <ProjectCard />
        </Col>
      </Row>
      <Row className="row-projects-list-two">
        <Col lg={4}>
          {" "}
          <ProjectCard />
        </Col>
        <Col lg={4}>
          {" "}
          <ProjectCard />
        </Col>
        <Col lg={4}>
          {" "}
          <ProjectCard />
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectsSection;
