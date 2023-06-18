import React, { useState } from "react";
import gitHubLogo from "../assets/github.svg";
import linkedinLogo from "../assets/linkedin.svg";
import instagramLogo from "../assets/instagram.svg";

// Dark Mode toggle
let DarkModeToggle = ({ darkModeStatus, handleToggle }) => {
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
        <li><a href="https://github.com/SirL0gic">Home</a></li>
        <li><a href="https://github.com/SirL0gic">Projects</a></li>
        <li><a href="https://github.com/SirL0gic">Contact</a></li>
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

let HamburgerMenu = ({ darkModeStatus, handleToggle }) => {
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
          <DarkModeToggle darkModeStatus={darkModeStatus} handleToggle={handleToggle} />
        </li>
        <li className="ham-menu-list-li"><a className="ham-menu-list-mob-a" href="https://github.com/SirL0gic">Home</a></li>
        <li className="ham-menu-list-li"><a className="ham-menu-list-mob-a" href="https://github.com/SirL0gic">Projects</a></li>
        <li className="ham-menu-list-li"><a className="ham-menu-list-mob-a" href="https://github.com/SirL0gic">Contact</a></li>
        <li><Social/></li>
      </ul>
    </div>
  );
};

// Main component
let TopHeader = () => {
  const [darkModeStatus, setDarkModeStatus] = useState(false);

  const handleToggle = () => {
    setDarkModeStatus(!darkModeStatus);
  };

  return (
    <div className="flex-box-header">
      <HamburgerMenu darkModeStatus={darkModeStatus} handleToggle={handleToggle} />
      <div className="mobile-box">
        <DarkModeToggle darkModeStatus={darkModeStatus} handleToggle={handleToggle} />
        <Nav />
        <Social />
      </div>
    </div>
  );
};

export default TopHeader;
