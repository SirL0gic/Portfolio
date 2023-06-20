import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import jsLogo from "../assets/js.svg";

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
        <Col className="col-seven">
          <div className="tech-items-box-one">
            <ul className="tech-items-list-one">
              <li>
                {" "}
                <img src={htmlLogo} alt="htmp"/>
              </li>
              <li>
                {" "}
                <img src={cssLogo} alt="css"/>
              </li>
              <li>
                {" "}
                <img src={jsLogo} alt="js"/>
              </li>
            </ul>
            <ul className="tech-items-list-two">
              <li>
                {" "}
                <img src={htmlLogo} alt="htmp"/>
              </li>
              <li>
                {" "}
                <img src={cssLogo} alt="css"/>
              </li>
              <li>
                {" "}
                <img src={jsLogo} alt="js"/>
              </li>
            </ul>
          </div>
        </Col>
        <Col className="col-eight"></Col>
      </Row>
    </Container>
  );
};

export default TechStackSection;
