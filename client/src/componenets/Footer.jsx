import React, { createContext, useContext, useState } from "react";
import { MyContext } from "../providers/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import lineLogo from "../assets/line.svg";
import lineLogoDark from "../assets/line-dark.svg";
import gitHubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.svg";
import instagramLogo from "../assets/instagram.svg";
import gitHubLogoDark from "../assets/github-dark.svg"
import linkedinLogoDark from "../assets/link-dark.svg";
import twitterLogo from "../assets/twitter.svg";
import twitterLogoDark from "../assets/twitter-dark.svg";

let Nav = () => {
  const { darkModeStatus } = useContext(MyContext);
  return (
    <div id="footer-menu" className="nav-bar-container">
      <ul className={darkModeStatus ? "nav-bar-list-dark" : "nav-bar-list"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="https://github.com/SirL0gic">Projects</a>
        </li>
        <li>
          <a href="mailto:someone@yoursite.com">Contact</a>
        </li>
      </ul>
    </div>
  );
};

let Social = () => {
  const { darkModeStatus } = useContext(MyContext);
  return (
    <div id="footer-social-media" className="social-media-container">
      <ul className="social-media-list">
        <li>
          <a href="https://github.com/SirL0gic" target="_blank">
            <img src={darkModeStatus ? gitHubLogoDark : gitHubLogo} className="github-logo" alt="github logo" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/abisali/" target="_blank">
            <img
              src={darkModeStatus ? linkedinLogoDark : linkedinLogo}
              className="linkedin-logo"
              alt="linkedin logo"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank">
            <img
              src={darkModeStatus ? twitterLogoDark : twitterLogo}
              className="instagram-logo"
              alt="twitter logo"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

let FooterSection = () => {
  const { darkModeStatus } = useContext(MyContext);
  return (
    <Container className="footer-container">
      <Row className="row-footer-one">
        <Col className="col-footer-one" lg={12}>
          <img src={ darkModeStatus ? lineLogoDark : lineLogo} alt="line" className="line-image" />
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
