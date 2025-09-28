import React, { useState } from "react";
import HTMLReactParser from "html-react-parser";
import { useParams } from "react-router-dom";
import millify from "millify";
import { Col, Row, Typography, Select } from "antd";
import {
  MoneyCollectOutlined,
  DollarCircleOutlined,
  FundOutlined,
  ExclamationCircleOutlined,
  StopOutlined,
  TrophyOutlined,
  CheckOutlined,
  NumberOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";

import {
  useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} from "../Services/coinGeckoApi";
import Loader from "./Loader";
import LineChart from "./LineChart";

const { Title, Text } = Typography;
const { Option } = Select;

const CryptoDetails = () => {
  const { coinId } = useParams();

  // ✅ Map UI-friendly values to CoinGecko-supported `days`
  const timeOptions = [
    { label: "24h", value: "1" },
    { label: "7d", value: "7" },
    { label: "30d", value: "30" },
    { label: "90d", value: "90" },
    { label: "1y", value: "365" },
    { label: "Max", value: "max" },
  ];

  const [timeperiod, setTimeperiod] = useState("7");

  const { data: details, isFetching } = useGetCryptoDetailsQuery(coinId);
  const { data: coinHistory } = useGetCryptoHistoryQuery({
    coinId,
    timeperiod,
  });

  const cryptoDetails = details;

  if (isFetching) return <Loader />;

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.market_data?.current_price?.usd && millify(cryptoDetails.market_data.current_price.usd)}`,
      icon: <DollarCircleOutlined />,
    },
    { title: "Rank", value: cryptoDetails?.market_cap_rank, icon: <NumberOutlined /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails?.market_data?.total_volume?.usd && millify(cryptoDetails.market_data.total_volume.usd)}`,
      icon: <ThunderboltOutlined />,
    },
    {
      title: "Market Cap",
      value: `$ ${cryptoDetails?.market_data?.market_cap?.usd && millify(cryptoDetails.market_data.market_cap.usd)}`,
      icon: <DollarCircleOutlined />,
    },
    {
      title: "All-time-high",
      value: `$ ${cryptoDetails?.market_data?.ath?.usd && millify(cryptoDetails.market_data.ath.usd)}`,
      icon: <TrophyOutlined />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.tickers?.length || "N/A",
      icon: <FundOutlined />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.tickers
        ? new Set(cryptoDetails.tickers.map((t) => t.market.name)).size
        : "N/A",
      icon: <MoneyCollectOutlined />,
    },
    {
      title: "Approved Supply",
      value: cryptoDetails?.market_data?.circulating_supply
        ? <CheckOutlined />
        : <StopOutlined />,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.market_data?.total_supply
          ? millify(cryptoDetails.market_data.total_supply)
          : "N/A"
      }`,
      icon: <ExclamationCircleOutlined />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.market_data?.circulating_supply
          ? millify(cryptoDetails.market_data.circulating_supply)
          : "N/A"
      }`,
      icon: <ExclamationCircleOutlined />,
    },
  ];

  return (
    <Col className="coin-detail-container">
      <Col className="coin-heading-container">
        <Title level={2} className="coin-name">
          {cryptoDetails?.name} ({cryptoDetails?.symbol?.toUpperCase()}) Price
        </Title>
        <p>
          {cryptoDetails?.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </p>
      </Col>

      {/* ✅ Updated time period select */}
      <Select
        defaultValue="7"
        className="select-timeperiod"
        onChange={(value) => setTimeperiod(value)}
      >
        {timeOptions.map((opt) => (
          <Option key={opt.value} value={opt.value}>
            {opt.label}
          </Option>
        ))}
      </Select>

      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(cryptoDetails?.market_data?.current_price?.usd)}
        coinName={cryptoDetails?.name}
      />

      <Col className="stats-container">
        <Col className="coin-value-statistics">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              {cryptoDetails?.name} Value Statistics
            </Title>
            <p>
              An overview showing the statistics of {cryptoDetails?.name}, such
              as the base and quote currency, the rank, and trading volume.
            </p>
          </Col>
          {stats.map(({ icon, title, value }, idx) => (
            <Col className="coin-stats" key={idx}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>

        <Col className="other-stats-info">
          <Col className="coin-value-statistics-heading">
            <Title level={3} className="coin-details-heading">
              Other Stats Info
            </Title>
          </Col>
          {genericStats.map(({ icon, title, value }, idx) => (
            <Col className="coin-stats" key={idx}>
              <Col className="coin-stats-name">
                <Text>{icon}</Text>
                <Text>{title}</Text>
              </Col>
              <Text className="stats">{value}</Text>
            </Col>
          ))}
        </Col>
      </Col>

      <Col className="coin-desc-link">
        <Row className="coin-desc">
          <Title level={3} className="coin-details-heading">
            What is {cryptoDetails?.name}?
          </Title>
          {cryptoDetails?.description?.en &&
            HTMLReactParser(cryptoDetails.description.en)}
        </Row>
        <Col className="coin-links">
          <Title level={3} className="coin-details-heading">
            {cryptoDetails?.name} Links
          </Title>
          {cryptoDetails?.links?.homepage?.map((link, idx) =>
            link ? (
              <Row className="coin-link" key={idx}>
                <Title level={5} className="link-name">
                  Homepage
                </Title>
                <a href={link} target="_blank" rel="noreferrer">
                  {link}
                </a>
              </Row>
            ) : null
          )}
        </Col>
      </Col>
    </Col>
  );
};

export default CryptoDetails;
