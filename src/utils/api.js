import axios from 'axios';

const API_KEY = '2728e017b1cd43438b9630b361421062';
const BASE_URL = 'https://newsapi.org/v2';

export const fetchNews = async (endpoint, params = {}) => {
  try {
    const response = await axios.get(`${BASE_URL}/${endpoint}`, {
      params: { ...params, apiKey: API_KEY },
      headers: {
        'Upgrade-Insecure-Requests': 1, // Ensure secure requests
      },
    });
    console.log("response from api:", response.data.articles);
    const filteredArticles = response.data.articles.filter(article => {
      return article.description !== '[Removed]' && article.urlToImage !== null;
    });
    return filteredArticles;
  } catch (error) {
    console.error('Error fetching news:', error);
    return [];
  }
};