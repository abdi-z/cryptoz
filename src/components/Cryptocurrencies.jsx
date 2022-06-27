import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Statistic, Space } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

export default function Cryptocurrencies() {
  const { data, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(data?.data?.coins);
  console.log(cryptos);

  return (
    <div>
      {cryptos.map((item) => {
        return (
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Link to={`/cryptocurrencies/${item.uuid}`}>
              <Card
                title={item.name}
                extra={<img className="crypto-image" src={item.iconUrl} style={{width:"50px"}}/>}
                hoverable>
                <Row gutters={[32, 32]}>
                  <Col span={12}>
                    <Statistic title="Price" value={millify(item.price)} />
                  </Col>
                  <Col span={12}>
                    <Statistic
                      title="Market cap"
                      value={millify(item.marketCap)}
                    />
                  </Col>
                  <Col span={12}>
                    <Statistic title="Volume" value={item.lowVolume} />
                  </Col>

                  <Col span={12}>
                    <Statistic title="Change 1h" value={item.change} />
                  </Col>
                </Row>
              </Card>
            </Link>
          </Space>
        );
      })}
    </div>
  );
}
