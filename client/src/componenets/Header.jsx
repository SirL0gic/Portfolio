import React, { useState } from "react";

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

let Nav = () => {
    return null;

};

let Social = () => {
    return null;

};

let TopHeader = () => {
  return (
    <div className="flex-box-one">
      <DarkModeToggle />
      <Nav/>
      <Social/>
    </div>
  );
};

export default TopHeader;
