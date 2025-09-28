import React from "react";
import { Line } from "react-chartjs-2";
import { Col, Row, Typography } from "antd";

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName }) => {
  if (!coinHistory || !coinHistory.prices) {
    return <p>No chart data available</p>;
  }

  // Extract prices & timestamps from CoinGecko response
  const coinPrice = coinHistory.prices.map((price) => price[1]);
  const coinTimestamp = coinHistory.prices.map((price) =>
    new Date(price[0]).toLocaleDateString()
  );

  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: "Price in USD",
        data: coinPrice,
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: {
        display: true,
        text: `${coinName} Price Chart`,
      },
    },
    scales: {
      x: { display: true },
      y: { display: true, beginAtZero: false },
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart
        </Title>
        <Col className="price-container">
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
