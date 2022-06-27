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
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value="204" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value="204" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market cap" value="204" />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h volume" value="204" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value="204" />
        </Col>
      </Row>
    </>
  );
}
