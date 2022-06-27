import React from "react";
import millify from "millify";
import axios from "axios";
import { Typography, Row, Col, Statistic } from "antd";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";

const { Title } = Typography;

export default function Home() {
  const { data, isFetching } = useGetCryptosQuery();
  const globalStats=data?.data?.stats
  console.log(data);

  if(isFetching) {
    return <div>Loading...</div>
    }
  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Market Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Market cap" value={millify(globalStats.totalMarketCap)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total 24h volume" value={millify(globalStats.total24hVolume)} />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} />
        </Col>
      </Row>
    </>
  );
}
