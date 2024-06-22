import React, { useEffect, useState } from "react";
import { fetchNews } from "../utils/api";
import Filters from "../components/filters";
import Header from "../components/header";
import NewsTile from "../components/newsTile";
import { Row, Col, Spin, Pagination, Input } from "antd";
import "../styles/news.css";

const { Search } = Input;

const News = () => {
  const [articles, setArticles] = useState([]);
  const [category, setCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const pageSize = 10; // Number of articles per page

  const loadNews = async (page, query) => {
    setLoading(true);
    try {
      const news = await fetchNews("everything", {
        q: query || category || "news",
        pageSize: pageSize,
        page: page,
      });
      setArticles(news);
      setCurrentPage(page);
    } catch (error) {
      setError("Failed to fetch news. Please try again later.");
      console.error("Error fetching news:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    loadNews(currentPage, searchQuery);
  }, [category, currentPage, searchQuery]);

  const handlePageChange = (page) => {
    loadNews(page, searchQuery);
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  return (
    <div className="app">
      <Header />
      <Filters
        categories={[
          "Business",
          "Entertainment",
          "General",
          "Health",
          "Science",
          "Sports",
          "Technology",
        ]}
        onSelectCategory={setCategory}
      />
      <Row justify="center">
      <Search
        placeholder="Search India news"
        onSearch={handleSearch}
        enterButton
        style={{ maxWidth: 300, margin: "10px auto" }}
      />
      </Row>
      <Row justify="center" gutter={[16, 16]} className="news-container">
        {articles.map((article, index) => (
          <Col key={`${article.url}_${index}`}>
            <NewsTile article={article} context={category} />
          </Col>
        ))}
      </Row>
      {loading && (
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Spin size="large" />
        </div>
      )}
      {error && (
        <div style={{ textAlign: "center", marginTop: 20, color: "red" }}>
          {error}
        </div>
      )}
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <Pagination
          current={currentPage}
          total={100}
          pageSize={pageSize}
          onChange={handlePageChange}
          showSizeChanger={false}
        />
      </div>
    </div>
  );
};

export default News;