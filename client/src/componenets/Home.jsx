import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./Header";

let HomePage = () => {
  return (
    <Container fluid className="main-container">
      <Row className='row-one'>
        <Col className='col-one' lg={12}>
          <TopHeader />
        </Col>
      </Row>
      <Row className='row-two'>
        <Col className='col-two'></Col>
      </Row>
    </Container>
  );
};

export default HomePage;
