import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./Header";
import ProfileSection from "./Profile";
import TechStackSection from "./TechStack";

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
    </Container>
  );
};

export default HomePage;
