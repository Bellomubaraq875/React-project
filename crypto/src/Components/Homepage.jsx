import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { Typography, Row, Col, Statistic } from "antd";
import { useGetCryptosQuery } from "../Services/coinGeckoApi"; // <-- using CoinGecko
import { Cryptocurrencies, News } from "../Components";

const { Title } = Typography;

const Homepage = () => {
  const { data: coins, isFetching } = useGetCryptosQuery(50); // fetch first 50 coins

  if (isFetching) return <h2>Loading...</h2>;

  const totalMarketCap = coins?.reduce(
    (acc, coin) => acc + (coin.market_cap || 0),
    0
  );
  const total24hVolume = coins?.reduce(
    (acc, coin) => acc + (coin.total_volume || 0),
    0
  );

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row>
        <Col span={12}>
          <Statistic
            title="Total Cryptocurrencies"
            value={coins?.length || 0}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap"
            value={`$${millify(totalMarketCap)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={`$${millify(total24hVolume)}`}
          />
        </Col>
        {/* CoinGecko free API doesn’t provide exchanges & markets counts directly */}
        <Col span={12}>
          <Statistic title="Total Exchanges" value="N/A (Free API)" />
        </Col>
        <Col span={12}>
          <Statistic title="Total Markets" value="N/A (Free API)" />
        </Col>
      </Row>

      <div className="home-heading-container">
        <Title level={2} className="home-title">
          Top 10 Cryptocurrencies in the World
        </Title>
        <Title level={3} className="show-more">
          <Link to="/cryptocurrencies">Show More</Link>
        </Title>
      </div>
      <Cryptocurrencies simplified />

      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest News</Title>
        <Title level={3} className="show-more">
          <Link to="/news">Show More</Link>
        </Title>
      </div>
      {/* ✅ simplified shows only 10 news without pagination */}
      <News simplified />
    </>
  );
};

export default Homepage;
