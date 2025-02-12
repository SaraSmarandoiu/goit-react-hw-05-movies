import axios from 'axios';

const API_KEY = 'a23610388808b879b8f614586097c9a9';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchTrendingMovies = async () => {
  const response = await axios.get(`${BASE_URL}/trending/movie/day`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};

export const searchMovies = async query => {
  const response = await axios.get(`${BASE_URL}/search/movie`, {
    params: {
      api_key: API_KEY,
      query,
    },
  });
  return response.data.results;
};

export const fetchMovieDetails = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data;
};

export const fetchMovieCredits = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/credits`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.cast;
};

export const fetchMovieReviews = async movieId => {
  const response = await axios.get(`${BASE_URL}/movie/${movieId}/reviews`, {
    params: {
      api_key: API_KEY,
    },
  });
  return response.data.results;
};
