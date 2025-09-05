import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col } from "antd";

import { useGetCryptosQuery } from "../Services/CryptoAPI";

const Cryptocurrencies = ({simplified}) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);

  // Update state when data loads
  useEffect(() => {
    if (cryptosList?.data?.coins) {
      setCryptos(cryptosList.data.coins);
    }
  }, [cryptosList]);

  if (isFetching) return <h2>Loading...</h2>;

  return (
    <>
    <h2>Cryptocurrencies</h2>
      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.uuid}
          >
            <Link to={`/crypto/${currency.uuid}`}>
              <Card
                title={`${currency.rank}. ${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currency.iconUrl}
                    alt={currency.name}
                  />
                }
                hoverable
              >
                <p>Price: {millify(Number(currency.price))}</p>
                <p>Market Cap: {millify(Number(currency.marketCap))}</p>
                <p>Daily Change: {currency.change}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
