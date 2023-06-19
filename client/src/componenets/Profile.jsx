import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "../assets/pro.webp"
import hand from "../assets/hand.svg";

let ProfileSection = () => {
  return (
    <Container fluid className="profile-container">
      <Row className="row-three">
        <Col className="col-three" lg={6} s={12}>
          <div className="profile-text-area">
            <p>
            Hi
            <img
              src={hand}
              alt="hand"
              className="hand-image"
              style={{ width: "70px", height: "70px" }}
            />
              ,
            </p>
            <p>I’m Abis</p>
            <p>&amp; I build digital solutions</p>
          </div>
        </Col>
        <Col className="col-four" lg={6} s={12}>
          <div className="profile-image-area">
            <img
              src={profile}
              alt="profile"
              className="profile-image"
              style={{ width: "350px", height: "350px" }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProfileSection;
