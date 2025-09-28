import React from "react";
import millify from "millify";
import { Collapse, Row, Col, Typography, Avatar } from "antd";
import { useGetExchangesQuery } from "../Services/coinGeckoApi";
import Loader from "./Loader";

const { Text } = Typography;
const { Panel } = Collapse;

const Exchanges = () => {
  const { data: exchanges, isFetching } = useGetExchangesQuery();

  if (isFetching) return <Loader />;
  if (!exchanges || !Array.isArray(exchanges)) return <p>No exchange data available.</p>;

  return (
    <>
      <Row style={{ fontWeight: "bold", marginBottom: "10px" }}>
        <Col span={6}>Exchanges</Col>
        <Col span={6}>24h Trade Volume</Col>
        <Col span={6}>Trust Score</Col>
        <Col span={6}>Year Established</Col>
      </Row>

      <Row>
        {exchanges.map((exchange) => (
          <Col span={24} key={exchange.id}>
            <Collapse>
              <Panel
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
                        style={{ marginLeft: "10px", marginRight: "10px" }}
                      />
                      <Text>
                        <strong>{exchange.name}</strong>
                      </Text>
                    </Col>
                    <Col span={6}>${millify(exchange.trade_volume_24h_btc || 0)} BTC</Col>
                    <Col span={6}>{exchange.trust_score || "N/A"}</Col>
                    <Col span={6}>{exchange.year_established || "N/A"}</Col>
                  </Row>
                }
              >
                <p>
                  <a href={exchange.url} target="_blank" rel="noreferrer">
                    Visit {exchange.name}
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
