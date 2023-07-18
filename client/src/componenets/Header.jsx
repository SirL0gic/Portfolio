import React, { createContext, useContext, useState } from "react";
import { MyContext } from "../providers/ThemeContext";
import DarkModeToggle from "./ThemeMode";
import gitHubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.svg";
import instagramLogo from "../assets/instagram.svg";

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
  return (
    <div className="nav-bar-container">
      <ul className="nav-bar-list">
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
  return (
    <div className="social-media-container">
      <ul className="social-media-list">
        <li>
          <a href="https://github.com/SirL0gic" target="_blank">
            <img src={gitHubLogo} className="github-logo" alt="github logo" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/abisali/" target="_blank">
            <img
              src={linkedinLogo}
              className="linkedin-logo"
              alt="linkedin logo"
            />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com" target="_blank">
            <img
              src={instagramLogo}
              className="instagram-logo"
              alt="instagram logo"
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
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <div className="hamburger-line"></div>
      <ul className={`menu-items ${isOpen ? "open" : ""}`}>
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
