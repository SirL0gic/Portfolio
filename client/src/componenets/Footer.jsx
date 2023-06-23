import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import lineLogo from "../assets/line.svg";
import gitHubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.svg";
import instagramLogo from "../assets/instagram.svg";

let Nav = () => {
  return (
    <div id="footer-menu" className="nav-bar-container">
      <ul className="nav-bar-list">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="https://github.com/SirL0gic">Projects</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>
    </div>
  );
};

let Social = () => {
  return (
    <div id="footer-social-media" className="social-media-container">
      <ul className="social-media-list">
        <li>
          <a href="https://github.com/SirL0gic" target="_blank">
            <img src={gitHubLogo} className="github-logo" alt="github logo" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/abisali/" target="_blank">
            <img
              src={linkedinLogo}
              className="linkedin-logo"
              alt="linkedin logo"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank">
            <img
              src={instagramLogo}
              className="instagram-logo"
              alt="instagram logo"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

let FooterSection = () => {
  return (
    <Container className="footer-container">
      <Row className="row-footer-one">
        <Col className="col-footer-one" lg={12}>
          <img src={lineLogo} alt="line" className="line-image" />
        </Col>
      </Row>

      <Row className="row-footer-two">
        <Col className="col-footer-two" lg={4} sm={12}>
          <Nav />
        </Col>

        <Col className="col-footer-three" lg={4} sm={12}>
          <Social />
        </Col>

        <Col className="col-footer-four" lg={4} sm={12}>
          <div className="name-box">
            <p className="name-text">Designed by @Abis</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FooterSection;
