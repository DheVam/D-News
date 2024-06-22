import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const NewsComponent = ({ article }) => {
  return (
    <Card
      hoverable
      style={{ width: '100%', margin: '20px 0' }}
      cover={<img alt={article.title} src={article.urlToImage} />}
    >
      <Meta title={article.title} description={article.content} />
      <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
    </Card>
  );
};

export default NewsComponent;
