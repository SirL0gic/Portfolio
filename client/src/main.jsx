import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter} from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeContext";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <React.StrictMode>
  <ThemeProvider>
    <App />
    </ThemeProvider>
  </React.StrictMode>
  </BrowserRouter>
)
