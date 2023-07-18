import React from 'react'
import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeContext";
import "./App.css";
import HomePage from "./componenets/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </>
  );
}

export default App;
