import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import { useGetExchangesQuery } from "../Services/coinGeckoApi"; // ✅ Use CoinGecko
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data: exchanges, isFetching } = useGetExchangesQuery();

  if (isFetching) return <Loader />;

  return (
    <>
      <Row style={{ fontWeight: "bold", marginBottom: "10px" }}>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume (BTC)</Col>
        <Col span={6}>Country</Col>
        <Col span={6}>Year</Col>
      </Row>

      <Row>
        {exchanges?.map((exchange) => (
          <Col span={24} key={exchange.id}>
            <Collapse>
              <Panel
                key={exchange.id}
                showArrow={false}
                header={
                  <Row>
                    <Col span={6}>
                      <Text>
                        <strong>{exchange.trust_score_rank}.</strong>
                      </Text>
                      <Avatar
                        className="exchange-image"
                        src={exchange.image}
                        style={{ marginLeft: "8px", marginRight: "8px" }}
                      />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>
                      {millify(exchange.trade_volume_24h_btc)} BTC
                    </Col>
                    <Col span={6}>{exchange.country || "N/A"}</Col>
                    <Col span={6}>
                      {exchange.year_established || "Unknown"}
                    </Col>
                  </Row>
                }
              >
                <p>
                  Official Website:{" "}
                  <a
                    href={exchange.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {exchange.url}
                  </a>
                </p>
              </Panel>
            </Collapse>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Exchanges;
