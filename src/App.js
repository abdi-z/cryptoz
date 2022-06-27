import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
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
    
        <div className="navbar">
          <Navbar />
        </div>

        <div className="main">
          <Layout>
            <div className="routes">
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
            </div>
          </Layout>

          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}>
              Made with <Space>❤</Space> by {"Abdul Rehman Aziz "}
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/cryptocurrencies">Cryptocurrencies</Link>              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
     
    </div>
  );
}

export default App;
