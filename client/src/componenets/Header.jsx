import React, { createContext, useContext, useState } from "react";
import { MyContext } from "../providers/ThemeContext";
import DarkModeToggle from "./ThemeMode";
import gitHubLogo from "../assets/github.svg";
import gitHubLogoDark from "../assets/github-dark.svg";
import linkedinLogo from "../assets/linkedin.svg";
import linkedinLogoDark from "../assets/link-dark.svg";
import instagramLogo from "../assets/instagram.svg";
import twitterLogo from "../assets/twitter.svg";
import twitterLogoDark from "../assets/twitter-dark.svg";

//Scroll Effect
const scrollToTarget = (event) => {
  event.preventDefault();
  const targetElement = document.getElementById("q-box");
  targetElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

// Navigation Bar
let Nav = () => {
  const { darkModeStatus } = useContext(MyContext);
  return (
    <div className="nav-bar-container">
      <ul className={darkModeStatus ? "nav-bar-list-dark" : "nav-bar-list"}>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="https://github.com/SirL0gic">Projects</a>
        </li>
        <li>
          <a href="/" onClick={scrollToTarget}>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

// Social Media Icons
let Social = () => {
  const { darkModeStatus } = useContext(MyContext);
  return (
    <div className="social-media-container">
      <ul className="social-media-list">
        <li>
          <a href="https://github.com/SirL0gic" target="_blank">
            <img
              src={darkModeStatus ? gitHubLogoDark : gitHubLogo}
              className="github-logo"
              alt="github logo"
            />
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
          <a href="https://www.twitter.com" target="_blank">
            <img
              src={darkModeStatus ? twitterLogoDark : twitterLogo}
              className="instagram-logo"
              alt="twitterlogo"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

let HamburgerMenu = ({ darkModeStatus, handleToggle }) => {
  const [isOpen, setIsOpen] = useState(false);

  let toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //Scroll Effect
  const scrollToTarget = (event) => {
    event.preventDefault();
    const targetElement = document.getElementById("q-box");
    targetElement.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div
      className={`hamburger-menu ${isOpen ? "open" : ""}`}
      onClick={toggleMenu}
    >
      <div
        className="hamburger-line"
        style={{
          background: darkModeStatus ? "white" : "",
        }}
      ></div>
      <div
        className="hamburger-line"
        style={{
          background: darkModeStatus ? "white" : "",
        }}
      ></div>
      <div
        className="hamburger-line"
        style={{
          background: darkModeStatus ? "white" : "",
        }}
      ></div>
      <ul
        className={`menu-items ${isOpen ? "open" : ""}`}
        // style={{
        //   backgroundColor: darkModeStatus ? "1E1F1F" : "",
        // }}
      >
        <li>
          <DarkModeToggle
            darkModeStatus={darkModeStatus}
            handleToggle={handleToggle}
          />
        </li>
        <li className="ham-menu-list-li">
          <a className="ham-menu-list-mob-a" href="/">
            Home
          </a>
        </li>
        <li className="ham-menu-list-li">
          <a className="ham-menu-list-mob-a" href="https://github.com/SirL0gic">
            Projects
          </a>
        </li>
        <li className="ham-menu-list-li">
          <a
            className="ham-menu-list-mob-a"
            href="mailto:someone@yoursite.com"
            onClick={scrollToTarget}
          >
            Contact
          </a>
        </li>
        <li>
          <Social />
        </li>
      </ul>
    </div>
  );
};

// Main component
let TopHeader = () => {
  const { darkModeStatus, handleToggle } = useContext(MyContext); // Access context values

  return (
    <div className="flex-box-header">
      <HamburgerMenu
        darkModeStatus={darkModeStatus}
        handleToggle={handleToggle}
      />
      <div className="mobile-box">
        <DarkModeToggle
          darkModeStatus={darkModeStatus}
          handleToggle={handleToggle}
        />
        <Nav />
        <Social />
      </div>
    </div>
  );
};

export default TopHeader;
