import React, {useContext, useEffect, useRef } from "react";
import { MyContext } from "../providers/ThemeContext";
import emailLogo from "../assets/email.svg";

const QuestionsSection = () => {
  const { darkModeStatus } = useContext(MyContext);
  const emailRef = useRef(null);

  useEffect(() => {
    const emailElement = emailRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.5 } // Adjust this value based on your needs
    );

    observer.observe(emailElement);

    return () => {
      observer.unobserve(emailElement);
    };
  }, []);

  return (
    <div id="q-box" className="questions-box">
      <h1 style={{
                color: darkModeStatus ? "white" : "",
              }}>For any questions:</h1>
      <img
        src={emailLogo}
        alt="mail"
        className="mail-image"
        ref={emailRef}
      />
    </div>
  );
};

export default QuestionsSection;
