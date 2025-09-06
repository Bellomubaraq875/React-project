import React from 'react';
import { Select, Typography, Row, Col, Card, Avatar } from 'antd';
import moment from 'moment';

import { useGetCryptoNewsQuery } from '../Services/cryptoNewsApi';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: 'Cryptocurrency',
    count: simplified ? 6 : 12,
  });

  if (!cryptoNews?.value) return <h2>Loading...</h2>;

  return (
    <Row gutter={[24, 24]}>
      {cryptoNews.value.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>
                  {news.name}
                </Title>
                {news.image?.thumbnail?.contentUrl && (
                  <img
                    style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover' }}
                    src={news.image.thumbnail.contentUrl}
                    alt="news"
                  />
                )}
              </div>
              <p>
                {news.description > 100
                  ? `${news.description.substring(0, 100)}...`
                  : news.description}
              </p>
              <div className="provider-container">
                <Text type="secondary">{moment(news.datePublished).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default News;
