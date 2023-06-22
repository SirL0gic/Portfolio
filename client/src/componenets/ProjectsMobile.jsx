import React, { useEffect } from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import linkImage from "../assets/link.svg";

let ProjectCard = () => {
  return (
    <Card className="project-card" style={{ width: "22rem" }}>
      <Card.Img
        className="project-card-image"
        variant="top"
        src="https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg"
      />
      <Card.Body>
        <Card.Title className="card-title">Card Title</Card.Title>
        <Card.Text className="card-dec">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Card.Text className="card-teach-stack">Tech Stack:</Card.Text>
        <div className="card-links-flex-box">
          {" "}
          <img src={linkImage}></img>
          <a className="card-link-one">Link Preview</a>
          <a className="card-link-two">View Code</a>
        </div>
      </Card.Body>
    </Card>
  );
};

let ProjectSectionMobile = () => {
  return (
    <Container className="project-section-container-mobile">
      <Row className="row-projects-section-title">
        <Col className="col-projects-title" lg={12} sm={12}>
          <div className="project-title-box">
            <h2>Projects</h2>
            <h3>Where code comes to life</h3>
          </div>
        </Col>
      </Row>

      <Row className="row-projects-carousel">
        <Col sm={12}>
          <div className="all-carousel">
            <Carousel>
              <Carousel.Item>
                <ProjectCard />
              </Carousel.Item>
              <Carousel.Item>
                <ProjectCard />
              </Carousel.Item>
              {/* Add more Carousel.Items with ProjectCard components */}
            </Carousel>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProjectSectionMobile;
