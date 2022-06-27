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
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="e.g. BTC"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      )}
      <Row gutter={[42, 42]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}>
            {/* Note: Change currency.id to currency.uuid  */}
            <Link key={currency.uuid} to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={<img className="crypto-image" src={currency.iconUrl} />}
                hoverable>
                <p>Price: {millify(currency.price)}</p>
                <p>Market Cap: {millify(currency.marketCap)}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
}
