import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import jsLogo from "../assets/js.svg";
import nodeLogo from "../assets/node.svg";
import pythonLogo from "../assets/python.svg";
import gitLogo from "../assets/git.svg"
import reactLogo from "../assets/react.svg"
import awsLogo from "../assets/aws.svg"
import figmaLogo from "../assets/figma.svg"
import githubLogo from "../assets/hub.svg"
import mongoLogo from "../assets/mongo.svg"
import CodeLogo from "../assets/vscode.svg"

let TechStackSection = () => {
  return (
    <Container className="tech-stack-container">
      <Row className="row-five">
        <Col className="col-six" lg={12} sm={6}>
          <div className="tech-stack-headings">
            <h1>My Tech Stack</h1>
            <h2> Technologies I love working with ❤️</h2>
          </div>
        </Col>
      </Row>
      <Row className="row-six">
        <Col className="col-seven" lg={6} sm={12}>
          <div className="tech-items-box-one">
            <ul className="tech-items-list-one">
              <li>
                {" "}
                <img src={htmlLogo} alt="html" className="html-logo"/>
              </li>
              <li>
                {" "}
                <img src={cssLogo} alt="css" className="css-logo"/>
              </li>
              <li>
                {" "}
                <img src={jsLogo} alt="js" className="js-logo"/>
              </li>
            </ul>
            <ul className="tech-items-list-two">
              <li>
                {" "}
                <img src={nodeLogo} alt="node" className="node-logo"/>
              </li>
              <li>
                {" "}
                <img src={pythonLogo} alt="python" className="python-logo"/>
              </li>
              <li>
                {" "}
                <img src={gitLogo} alt="git" className="git-logo"/>
              </li>
            </ul>
          </div>
        </Col >
        <Col className="col-eight" lg={6} sm={12}>
        <div className="tech-items-box-two">
            <ul className="tech-items-list-one">
              <li>
                {" "}
                <img src={reactLogo} alt="react"/>
              </li>
              <li>
                {" "}
                <img src={awsLogo} alt="aws"/>
              </li>
              <li>
                {" "}
                <img src={mongoLogo} alt="mongo"/>
              </li>
            </ul>
            <ul className="tech-items-list-two">
              <li>
                {" "}
                <img src={figmaLogo} alt="figma"/>
              </li>
              <li>
                {" "}
                <img src={CodeLogo} alt="vscode"/>
              </li>
              <li>
                {" "}
                <img src={githubLogo} alt="github"/>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TechStackSection;
