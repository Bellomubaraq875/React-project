import React, { useState } from "react";
import { Select, Typography, Row, Col, Card, Button } from "antd";
import moment from "moment";
import { useGetCryptoNewsQuery } from "../Services/cryptoNewsApi";

const { Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const [pageToken, setPageToken] = useState("");
  const [category, setCategory] = useState("cryptocurrency"); // ✅ default category

  const { data: cryptoNews, isFetching } = useGetCryptoNewsQuery({
    newsCategory: category,
    page: simplified ? "" : pageToken,
    size: simplified ? 10 : 20,
  });

  if (isFetching) return <h2>Loading...</h2>;
  if (!cryptoNews?.results?.length) return <h2>No news found.</h2>;

  const newsList = cryptoNews.results;

  return (
    <div>
      {/* ✅ Show category filter only on full news page */}
      {!simplified && (
        <div style={{ marginBottom: "20px" }}>
          <Select
            value={category}
            style={{ width: 200 }}
            onChange={(val) => {
              setCategory(val);
              setPageToken(""); // reset pagination when category changes
            }}
          >
            <Option value="cryptocurrency">All</Option>
            <Option value="bitcoin">Bitcoin</Option>
            <Option value="ethereum">Ethereum</Option>
            <Option value="blockchain">Blockchain</Option>
            <Option value="defi">DeFi</Option>
            <Option value="nft">NFT</Option>
          </Select>
        </div>
      )}

      <Row gutter={[24, 24]}>
        {newsList.map((news, i) => (
          <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className="news-card">
              <a href={news.link} target="_blank" rel="noreferrer">
                <div className="news-image-container">
                  <Title level={4}>{news.title}</Title>
                </div>
                <p>{news.description?.slice(0, 100) || "No description"}</p>
                <div className="provider-container">
                  <small>{moment(news.pubDate).startOf("ss").fromNow()}</small>
                </div>
              </a>
            </Card>
          </Col>
        ))}
      </Row>

      {/* ✅ Pagination only for full page */}
      {!simplified && (
        <div style={{ display: "flex", justifyContent: "center", margin: "20px 0" }}>
          <Button
            type="default"
            disabled={!cryptoNews?.previousPage}
            onClick={() => setPageToken(cryptoNews.previousPage)}
            style={{ marginRight: "10px" }}
          >
            Previous
          </Button>
          <Button
            type="primary"
            disabled={!cryptoNews?.nextPage}
            onClick={() => setPageToken(cryptoNews.nextPage)}
          >
            Next
          </Button>
        </div>
      )}
    </div>
  );
};

export default News;
