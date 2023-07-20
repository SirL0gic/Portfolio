import React, { createContext, useContext, useState, useEffect } from "react";
import { MyContext } from "../providers/ThemeContext";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import linkImage from "../assets/link.svg";
import linkImageDark from "../assets/linkimage-dark.svg";

import AOS from "aos";
import "aos/dist/aos.css";

let project_list = [
  {
    id: 0,
    image: "https://i.imgur.com/ApP42ec.jpg",
    title: "ELEMNTS",
    description:
      "An e-commerce website created for a sustainable fashion brand on Shopify.",
    stack: "Liquid - Node - HTML - CSS - JS",
    live: "elemnts.com",
    code: "/",
  },

  {
    id: 1,
    image: "https://i.imgur.com/3eAvSjV.jpg",
    title: "Opes Project",
    description: "A micro SaaS platform that democratizes investment education",
    stack: "React - Node/Express - Notion",
    live: "https://opesproject.com/",
    code: "/",
  },

  {
    id: 2,
    image: "https://i.imgur.com/HK4uPVl.png",
    title: "Hire Hub",
    description:
      "Open-source job application system that simplifies the job search process!",
    stack: "React - Node/Express - MongoDB",
    live: "https://onedrive.live.com/?authkey=%21AKSxo4ZO4Lr7Lgc&id=D6B7302631DC2497%211355&cid=D6B7302631DC2497&parId=root&parQt=sharedby&o=OneUp",
    code: "https://github.com/SirL0gic/HireHub",
  },

  {
    id: 3,
    image:
      "https://camo.githubusercontent.com/89dd51383ea8a975003bcae842cb97c2e12e429f981569ee19901c859ee067c5/68747470733a2f2f692e696d6775722e636f6d2f716f4c484b61442e706e67",
    title: "Recipely",
    description: "A food based web application for creating recipes",
    stack: "React - Node/Express - MongoDB",
    live: "https://1drv.ms/v/s!Apck3DEmMLfWih1RhIuJZiZqA1EN",
    code: "https://github.com/SirL0gic/Recipely",
  },

  {
    id: 4,
    image:
      "https://camo.githubusercontent.com/a0a3bb45497d466fc174f7a6e347759200060b08b550869ada5dba483499a399/68747470733a2f2f692e696d6775722e636f6d2f6e334b345478612e706e67",
    title: "The React Post",
    description: "News web application that displays latest news articles",
    stack: "React",
    live: "https://1drv.ms/v/s!Apck3DEmMLfWihxii4hcayJXfowz?e=NLos4g",
    code: "https://github.com/SirL0gic/The-React-Post",
  },

  {
    id: 5,
    image: "https://i.imgur.com/5tRhebY.png",
    title: "Productivity Web App",
    description: "A productivity tool that helps you organise your tasks",
    stack: "React",
    live: "https://1drv.ms/v/s!Apck3DEmMLfWih9YJxfmPuTVJFDc?e=gaYp7M",
    code: "https://github.com/SirL0gic/Productivity-App",
  },
];

let ProjectCard = (props) => {
  const { darkModeStatus } = useContext(MyContext);
  return (
    <Card
      className="project-card"
      style={{
        width: "22rem",
        background: darkModeStatus ? "#363636" : "white",
      }}
    >
      <Card.Img
        className="project-card-image"
        variant="top"
        src={props.img}
        alt="project-image"
      />
      <Card.Body style={{ borderRadius: "25px" }}>
        <Card.Title
          className="card-title"
          style={{
            color: darkModeStatus ? "white" : "",
          }}
        >
          {props.title}
        </Card.Title>
        <Card.Text
          className="card-dec"
          style={{
            color: darkModeStatus ? "#dbdbda" : "",
          }}
        >
          {props.description}
        </Card.Text>
        <Card.Text
          className="card-teach-stack"
          style={{
            color: darkModeStatus ? "white" : "",
          }}
        >
          Tech Stack: {props.stack}
        </Card.Text>
        <div className="card-links-flex-box">
          {" "}
          <img src={darkModeStatus ? linkImageDark : linkImage } alt="link-img" />
          <a
            className="card-link-one"
            href={props.live}
            style={{
              color: darkModeStatus ? "white" : "",
            }}
          >
            Link Preview
          </a>
          <a
            className="card-link-two"
            href={props.code}
            style={{
              color: darkModeStatus ? "white" : "",
            }}
          >
            View Code
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

let ProjectsSectionDesktop = () => {
  const { darkModeStatus } = useContext(MyContext);
  useEffect(() => {
    AOS.init(); // Initialize AOS library
  }, []);

  return (
    <Container className="project-section-container-desktop">
      <Row className="row-projects-section-title">
        <Col className="col-projects-title" lg={12}>
          <div className="project-title-box">
            <h2
              style={{
                color: darkModeStatus ? "white" : "",
              }}
            >
              Projects
            </h2>
            <h3
              style={{
                color: darkModeStatus ? "grey" : "",
              }}
            >
              Where code comes to life
            </h3>
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
            <ProjectCard
              img={project_list[1].image}
              title={project_list[1].title}
              description={project_list[1].description}
              stack={project_list[1].stack}
              live={project_list[1].live}
              code={project_list[1].code}
            />
          </Col>
          <Col className="col-card-hold" lg={4}>
            {" "}
            <ProjectCard
              img={project_list[2].image}
              title={project_list[2].title}
              description={project_list[2].description}
              stack={project_list[2].stack}
              live={project_list[2].live}
              code={project_list[2].code}
            />
          </Col>
        </Row>
      </div>

      <div data-aos="flip-up" data-aos-duration="1000">
        <Row className="row-projects-list-two">
          <Col className="col-card-hold" lg={4}>
            {" "}
            <ProjectCard
              img={project_list[3].image}
              title={project_list[3].title}
              description={project_list[3].description}
              stack={project_list[3].stack}
              live={project_list[3].live}
              code={project_list[3].code}
            />
          </Col>
          <Col className="col-card-hold" lg={4}>
            {" "}
            <ProjectCard
              img={project_list[4].image}
              title={project_list[4].title}
              description={project_list[4].description}
              stack={project_list[4].stack}
              live={project_list[4].live}
              code={project_list[4].code}
            />
          </Col>
          <Col className="col-card-hold" lg={4}>
            {" "}
            <ProjectCard
              img={project_list[5].image}
              title={project_list[5].title}
              description={project_list[5].description}
              stack={project_list[5].stack}
              live={project_list[5].live}
              code={project_list[5].code}
            />
          </Col>
          <br />
          <a
            style={{
              color: darkModeStatus ? "white" : "",
            }}
            className="see-all-proj"
            href="https://github.com/SirL0gic"
          >
            See All Projects
          </a>
        </Row>
      </div>
    </Container>
  );
};

export default ProjectsSectionDesktop;
