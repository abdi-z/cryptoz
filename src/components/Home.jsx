import React from "react";
import millify from "millify";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";

const { Title } = Typography;

export default function Home() {
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Market Stats
      </Title>
    </>
  );
}
