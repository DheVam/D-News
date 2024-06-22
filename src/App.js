import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import News from './pages/news';
import LatestNews from './pages/latest-news';
import IndiaNews from './pages/india-news';
import NewsDetail from './pages/news-detail';
import './styles/news.css';
import './styles/header.css';
import Favorites from './pages/favorites';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<News />} />
      <Route path="/latest-news" element={<LatestNews />} />
      <Route path="/india-news" element={<IndiaNews />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/news/:id" element={<NewsDetail />} />

    </Routes>
  </Router>
);


export default App;