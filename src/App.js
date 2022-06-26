import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import {
  Navbar,
  Home,
  Cryptocurrencies,
  Exchanges,
  Coin,
  News,
} from "./components";

function App() {
  return (
    <div className="app">
      <div className="main">
        <Layout>
          <div className="routes">
            <BrowserRouter>
              <div className="navbar">
                <Navbar />
              </div>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route
                  path="/cryptocurrencies"
                  element={<Cryptocurrencies />}
                />
                <Route path="/cryptocurrencies/:coinId" element={<Coin />} />
                <Route path="/exchanges" element={<Exchanges />} />
                <Route path="/news" element={<News />} />
              </Routes>
            </BrowserRouter>
          </div>
        </Layout>
      </div>
      <div className="footer"></div>
    </div>
  );
}

export default App;
