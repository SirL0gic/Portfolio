import React, { useState } from "react";

const DarkModeToggle = () => {
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

let TopHeader = () => {
  return (
    <div className="flex-box-one">
      <DarkModeToggle />
    </div>
  );
};

export default TopHeader;
