import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import linkImage from "../assets/link.svg";

import AOS from "aos";
import "aos/dist/aos.css";

let project_list = [
  {
    id: 1,
    image: "https://i.imgur.com/ApP42ec.jpg",
    title: "ELEMNTS E-Com",
    description:
      "An e-commerce website created for a sustainable fashion brand on Shopify.",
    stack: "Liquid - Node - HTML - CSS - JS",
    live: "elemnts.com",
    code: "",
  },

  {
    id: 2,
    image: "",
    title: "Hire Hub",
    description:
      "Open-source job application system that simplifies the job search process!",
    stack: "React - Node/Express - MongoDB",
    live: "https://onedrive.live.com/?authkey=%21AKSxo4ZO4Lr7Lgc&id=D6B7302631DC2497%211355&cid=D6B7302631DC2497&parId=root&parQt=sharedby&o=OneUp",
    code: "https://github.com/SirL0gic/HireHub",
  },
];

let ProjectCard = (props) => {
  return (
    <Card className="project-card" style={{ width: "22rem" }}>
      <Card.Img className="project-card-image" variant="top" src={props.img} />
      <Card.Body>
        <Card.Title className="card-title">{props.title}</Card.Title>
        <Card.Text className="card-dec">{props.description}</Card.Text>
        <Card.Text className="card-teach-stack">
          Tech Stack: {props.stack}
        </Card.Text>
        <div className="card-links-flex-box">
          {" "}
          <img src={linkImage}></img>
          <a className="card-link-one" href={props.live}>
            Link Preview
          </a>
          <a className="card-link-two" href={props.code}>
            View Code
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

let ProjectsSectionDesktop = () => {
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <Container className="project-section-container-desktop">
      <Row className="row-projects-section-title">
        <Col className="col-projects-title" lg={12}>
          <div className="project-title-box">
            <h2>Projects</h2>
            <h3>Where code comes to life</h3>
          </div>
        </Col>
      </Row>
      <div data-aos="flip-up" data-aos-duration="1000">
        <Row className="row-projects-list-one">
          <Col className="col-card-hold" lg={4}>
            <ProjectCard
              img={project_list[0].image}
              title={project_list[0].title}
              description={project_list[0].description}
              stack={project_list[0].stack}
              live={project_list[0].live}
              code={project_list[0].code}
            />
          </Col>
          <Col className="col-card-hold" lg={4}>
            {" "}
            <ProjectCard />
          </Col>
          <Col className="col-card-hold" lg={4}>
            {" "}
            <ProjectCard />
          </Col>
        </Row>
      </div>

      <div data-aos="flip-up" data-aos-duration="1000">
        <Row className="row-projects-list-two">
          <Col className="col-card-hold" lg={4}>
            {" "}
            <ProjectCard />
          </Col>
          <Col className="col-card-hold" lg={4}>
            {" "}
            <ProjectCard />
          </Col>
          <Col className="col-card-hold" lg={4}>
            {" "}
            <ProjectCard />
          </Col>
          <br />
          <a className="see-all-proj" href="https://github.com/SirL0gic">
            See All Projects
          </a>
        </Row>
      </div>
    </Container>
  );
};

export default ProjectsSectionDesktop;
