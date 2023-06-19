import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import profile from "../assets/pro.webp";
import hand from "../assets/hand.svg";

const TypingEffect = ({ text, typingDelay }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let typingInterval;

    if (currentIndex < text.length) {
      typingInterval = setInterval(() => {
        setDisplayedText((prevText) => prevText + text[currentIndex]);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, typingDelay);
    } else {
      clearInterval(typingInterval);
    }

    return () => {
      clearInterval(typingInterval);
    };
  }, [text, currentIndex, typingDelay]);

  return <span>{displayedText}</span>;
};

const ProfileSection = () => {
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
              />
              ,
            </p>
            <p>
              <TypingEffect text="I’m Abis" typingDelay={50} />
            </p>
            <p>
              <TypingEffect text="& I build digital solutions" typingDelay={100} />
            </p>
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
