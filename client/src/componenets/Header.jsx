import React, { useState } from "react";
import gitHubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.svg";
import instagramLogo from "../assets/instagram.svg";

// Dark Mode toggle
let DarkModeToggle = () => {
  const [darkModeStatus, setDarkModeStatus] = useState(false);

  const handleToggle = () => {
    setDarkModeStatus(!darkModeStatus);
  };

  return (
    <label
      className={`toggle-switch ${
        darkModeStatus ? "dark-theme" : "light-theme"
      }`}
    >
      <input type="checkbox" checked={darkModeStatus} onChange={handleToggle} />
      <span className="slider round"></span>
    </label>
  );
};

// Navigation Bar
let Nav = () => {
  return (
    <div className="nav-bar-container">
      <ul className="nav-bar-list">
        <li>Home</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

//Soical Media Icons
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
          {" "}
          <a href="https://www.linkedin.com/in/abisali/" target="_blank">
            <img
              src={linkedinLogo}
              className="linkedin-logo"
              alt="linkedin logo"
            />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/abisali/" target="_blank">
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

let HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  let toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <DarkModeToggle />
        </li>
        <li>About</li>
        <li>Contact</li>
        <li><Social/></li>
      </ul>
    </div>
  );
};

// Main component
let TopHeader = () => {
  return (
    <div className="flex-box-header">
      <HamburgerMenu />
      <div className="mobile-box">
        {" "}
        <DarkModeToggle />
        <Nav />
        <Social />
      </div>
    </div>
  );
};

export default TopHeader;
