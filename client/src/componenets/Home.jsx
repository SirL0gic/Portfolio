import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./Header";

let HomePage = () => {
  return (
    <Container fluid className="main-container">
      <Row>
        <Col>
          {" "}
          <TopHeader />
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
