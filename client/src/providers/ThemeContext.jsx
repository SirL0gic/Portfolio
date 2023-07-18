import React, { createContext, useState } from "react";

export const MyContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkModeStatus, setDarkModeStatus] = useState(false);

  const handleToggle = () => {
    setDarkModeStatus(!darkModeStatus);
  };

  return (
    <MyContext.Provider value={{darkModeStatus, handleToggle}}>
        {children}
    </MyContext.Provider>
  )
};
