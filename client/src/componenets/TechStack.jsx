import React, {useContext, useEffect } from "react";
import { MyContext } from "../providers/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import AOS from "aos";
import "aos/dist/aos.css";

import htmlLogo from "../assets/html.svg";
import cssLogo from "../assets/css.svg";
import jsLogo from "../assets/js.svg";
import nodeLogo from "../assets/node.svg";
import pythonLogo from "../assets/python.svg";
import gitLogo from "../assets/git.svg";
import reactLogo from "../assets/react.svg";
import awsLogo from "../assets/aws.svg";
import figmaLogo from "../assets/figma.svg";
import githubLogo from "../assets/hub.svg";
import mongoLogo from "../assets/mongo.svg";
import CodeLogo from "../assets/vscode.svg";
import awsDark from "../assets/aws-dark.svg";
import gitDark from "../assets/git-dark.svg";
import nodeDark from "../assets/node-dark.svg"; 

let TechStackSection = () => {
  const { darkModeStatus } = useContext(MyContext);
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <Container className="tech-stack-container">
      <Row className="row-five">
        <Col className="col-six" lg={12} sm={6}>
          <div className="tech-stack-headings">
            <h1
              style={{
                color: darkModeStatus ? "white" : "",
              }}
            >
              My Tech Stack
            </h1>
            <h2
              style={{
                color: darkModeStatus ? "grey" : "",
              }}
            >
              {" "}
              Technologies I love working with ❤️
            </h2>
          </div>
        </Col>
      </Row>
      <Row className="row-six">
        <Col className="col-seven" lg={6} sm={12}>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <div className="tech-items-box-one">
              <ul className="tech-items-list-one">
                <li>
                  {" "}
                  <img src={htmlLogo} alt="html" className="html-logo" />
                </li>
                <li>
                  {" "}
                  <img src={cssLogo} alt="css" className="css-logo" />
                </li>
                <li>
                  {" "}
                  <img src={jsLogo} alt="js" className="js-logo" />
                </li>
              </ul>
              <ul className="tech-items-list-two">
                <li>
                  {" "}
                  <img src={darkModeStatus ? nodeDark : nodeLogo} alt="node" className="node-logo" />
                </li>
                <li>
                  {" "}
                  <img src={pythonLogo} alt="python" className="python-logo" />
                </li>
                <li>
                  {" "}
                  <img src={gitLogo } alt="git" className="git-logo" />
                </li>
              </ul>
            </div>
          </div>
        </Col>

        <Col className="col-eight" lg={6} sm={12}>
          <div data-aos="zoom-in" data-aos-duration="1000">
            <div className="tech-items-box-two">
              <ul className="tech-items-list-one">
                <li>
                  {" "}
                  <img src={reactLogo} alt="react" />
                </li>
                <li>
                  {" "}
                  <img src={darkModeStatus ? awsDark : awsLogo } alt="aws" />
                </li>
                <li>
                  {" "}
                  <img src={mongoLogo} alt="mongo" />
                </li>
              </ul>
              <ul className="tech-items-list-two">
                <li>
                  {" "}
                  <img src={figmaLogo} alt="figma" />
                </li>
                <li>
                  {" "}
                  <img src={CodeLogo} alt="vscode" />
                </li>
                <li>
                  {" "}
                  <img src={darkModeStatus ? gitDark : githubLogo} alt="github" />
                </li>
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TechStackSection;
