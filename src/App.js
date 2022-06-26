import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, Home, About, Contact } from "./components";

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
