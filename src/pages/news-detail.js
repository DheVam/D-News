import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { fetchNews } from '../utils/api';
import { Card, Spin, Alert } from 'antd';
import "../styles/news.css";

const { Meta } = Card;

const NewsDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const context = location.state?.context || 'news';
        const news = await fetchNews('everything', { q: context });
        const decodedId = decodeURIComponent(id);
        const foundArticle = news.find(item => item.url === decodedId);
        if (foundArticle) {
          setArticle(foundArticle);
        } else {
          throw new Error('Article not found');
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadArticle();
  }, [id, location.state]);

  if (loading) {
    return <Spin />;
  }

  if (error) {
    return <Alert message="Error" description={error} type="error" />;
  }

  if (!article) {
    return <div>No article found.</div>;
  }

  return (
    <div className="app">
      <Card
        hoverable
        style={{ maxWidth: '800px', margin: '20px auto' }}
        cover={<img alt={article.title} src={article.urlToImage} style={{ maxHeight: '400px', objectFit: 'cover' }} />}
      >
        <Meta title={article.title} description={article.content} />
        <div style={{ marginTop: '10px', textAlign: 'right' }}>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read full article</a>
        </div>
      </Card>
    </div>
  );
};

export default NewsDetail;
