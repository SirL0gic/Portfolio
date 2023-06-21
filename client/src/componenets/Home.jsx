import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./Header";
import ProfileSection from "./Profile";
import TechStackSection from "./TechStack";
import ProjectsSection from "./Projects";

let HomePage = () => {
  return (
    <Container fluid className="main-container">
      <Row className="row-one">
        <Col className="col-one" lg={12}>
          <TopHeader />
        </Col>
      </Row>
      <Row className="row-two">
        <Col className="col-two" lg={12}>
          <ProfileSection />
        </Col>
      </Row>
      <Row className="row-four">
        <Col className="col-five" lg={12}>
          <TechStackSection />
        </Col>
      </Row>
      <Row className="row-projects-desktop">
        <Col className="col-projects-desktop" lg={12}>
          <ProjectsSection />
        </Col>
      </Row>
      <Row className="row-projects-mobile">
        <Col></Col>
      </Row>
    </Container>
  );
};

export default HomePage;
