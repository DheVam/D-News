import React from 'react';
import { useSelector } from 'react-redux';
import { Spin, Card } from 'antd';
import Header from '../components/header';
import "../styles/news.css";


const { Meta } = Card;

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites) || []; 
  console.log('favs:',favorites.favorites)

  if (favorites.favorites.length == 0) {
    return (
      <>
      <Header/>
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h2>No Favorites</h2>
        <p>You haven't added any articles to favorites yet.</p>
      </div>
      </>
    );
  }

  return (
    <div>
      <Header/>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>My Favorites</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {favorites.favorites.map((favorite) => (
          <Card
            key={favorite.url}
            hoverable
            style={{ width: 300, margin: '10px' }}
            cover={<img alt={favorite.title} src={favorite.urlToImage} />}
          >
            <Meta title={favorite.title} description={favorite.description} />
            <div style={{ marginTop: '10px', textAlign: 'right' }}>
              <a href={favorite.url} target="_blank" rel="noopener noreferrer">
                Read full article
              </a>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Favorites;
