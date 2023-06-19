import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

let TechStackSection = () => {
  return (
    <Container className="tech-stack-container">
      <Row className="row-five">
        <Col className="col-six" lg={12}>
          <div className="tech-stack-headings">
            <h1>My Tech Stack</h1>
            <h2> Technologies I love working with ❤️</h2>
          </div>
        </Col>
      </Row>
      <Row className="row-six">
        <Col className="col-seven"></Col>
        <Col className="col-eight"></Col>
      </Row>
    </Container>
  );
};

export default TechStackSection;
