import React, { useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input, Statistic, Space } from "antd";
import { useGetCryptosQuery } from "../services/cryptoApi";

export default function Cryptocurrencies({ simplified }) {
  const [search, setSearch] = useState("");
  const count = simplified ? 10 : 100;
  const { data, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  console.log(cryptos);

  React.useEffect(() => {
    const filteredDate = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase())
    );
    setCryptos(filteredDate);
  }, [data, search]);
  if (isFetching) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="search-crypto">
        <Input
          placeholder="e.g. BTC"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {cryptos?.map((item) => {
        return (
          <Space direction="vertical" size="middle" style={{ display: "flex" }}>
            <Link to={`/cryptocurrencies/${item.uuid}`}>
              <Card
                title={item.name}
                extra={
                  <img
                    className="crypto-image"
                    src={item.iconUrl}
                    style={{ width: "50px" }}
                  />
                }
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
