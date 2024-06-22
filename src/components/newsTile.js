import React, { useState } from 'react';
import { Card, Modal, Button, Image } from 'antd';
import { useDispatch } from 'react-redux';
import { addToFavorites, removeFromFavorites } from '../redux/actions/favorites';

const { Meta } = Card;

const NewsTile = ({ article }) => {
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites(article.url));
    } else {
      dispatch(addToFavorites(article));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <>
      <Card
        hoverable
        style={{ maxWidth: 280, margin: '10px' }}
        cover={<img alt={article.title} src={article.urlToImage} />}
        onClick={showModal}
        actions={[
          <Button type={isFavorite ? 'primary' : 'default'} onClick={handleToggleFavorite}>
            {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
          </Button>,
        ]}
      >
        <Meta title={article.title} />
      </Card>
      <Modal
        title={article.title}
        visible={modalVisible}
        onCancel={hideModal}
        footer={[
          <Button key="close" onClick={hideModal} style={{marginRight: 10}}>
            Close
          </Button>,
          <a key="readmore" href={article.url} target="_blank" rel="noopener noreferrer">
            <Button type="primary">
              Read More
            </Button>
          </a>
        ]}
      >
        <Image src={article.urlToImage} />
        <p>{article.description}</p>
      </Modal>
    </>
  );
};

export default NewsTile;
