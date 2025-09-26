import React, { useState, useEffect } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Card, Row, Col, Input } from "antd";
import { useGetCryptosQuery } from "../Services/coinGeckoApi";

const Cryptocurrencies = ({ simplified }) => {
  const count = simplified ? 10 : 100;
  const { data: cryptosList, isFetching } = useGetCryptosQuery(count);
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Update filtered list when API data or search term changes
  useEffect(() => {
    if (cryptosList) {
      const filteredData = cryptosList.filter((coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setCryptos(filteredData);
    }
  }, [cryptosList, searchTerm]);

  if (isFetching) return <h2>Loading...</h2>;

  return (
    <>
      {!simplified && (
        <div className="search-crypto">
          <Input
            placeholder="Search Cryptocurrency"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <Row gutter={[32, 32]} className="crypto-card-container">
        {cryptos?.map((currency) => (
          <Col
            xs={24}
            sm={12}
            lg={6}
            className="crypto-card"
            key={currency.id}
          >
            <Link to={`/crypto/${currency.id}`}>
              <Card
                title={`${currency.market_cap_rank}. ${currency.name}`}
                extra={
                  <img
                    className="crypto-image"
                    src={currency.image}
                    alt={currency.name}
                    width="30"
                  />
                }
                hoverable
              >
                <p>Price: ${millify(currency.current_price)}</p>
                <p>Market Cap: ${millify(currency.market_cap)}</p>
                <p>Daily Change: {currency.price_change_percentage_24h?.toFixed(2)}%</p>
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Cryptocurrencies;
