import React, { createContext, useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import TopHeader from "./Header";
import ProfileSection from "./Profile";
import TechStackSection from "./TechStack";
import ProjectsSectionDesktop from "./Projects";
import ProjectSectionMobile from "./ProjectsMobile";
import QuestionsSection from "./Questions";
import FooterSection from "./Footer";

let HomePage = () => {

  // State for holding theme status
  const [darkModeStatus, setDarkModeStatus] = useState(false);

   // Dark mode switch handle
   const handleToggle = () => {
    setDarkModeStatus(!darkModeStatus);
  };

  const MyContext = createContext();
  const sharedData = darkModeStatus;
  // const sharedStatus = useContext(MyContext); use inside componetns

  return (
    <MyContext.Provider value={sharedData}>
    <Container
      fluid
      className="main-container"
      // style={{
      //   background: "#1E1F1F",
      // }}
    >
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
      <Row className="row-projects-desktop">
        <Col className="col-projects-desktop" lg={12}>
          <ProjectsSectionDesktop />
        </Col>
      </Row>
      <Row className="row-projects-mobile">
        <Col className="col-projects-mobile" lg={12}>
          <ProjectSectionMobile />
        </Col>
      </Row>
      <Row className="row-questions">
        <Col className="col-questions" lg={12}>
          <QuestionsSection />
        </Col>
      </Row>
      <Row className="row-footer">
        <Col className="col-footer" lg={12}>
          <FooterSection />
        </Col>
      </Row>
    </Container>
    </MyContext.Provider>
  );
};

export default HomePage;
