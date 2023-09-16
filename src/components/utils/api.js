import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const AUTH_TOKEN =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0NTA2ZDQ2NjFhMGI5YTRkOWU1NjdjMGJmMTczOWQ2ZCIsInN1YiI6IjY1MDE3YTQxZDdkY2QyMDBjNTM3MmE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.BvYIc2oh9jH6PCTv4dgo9vUSh8wn2Uy1FyWa_e3GWtg';

// Getting trending movies for today
export const getAllTrandingMoviesToday = async page => {
  const { data } = await axios.get('/trending/all/day', {
    params: {
      language: 'en-US',
      page,
    },
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
  return data;
};

// Search movie by keyword
export const searchMovieByKeyword = async (query, page) => {
  const { data } = await axios.get('/search/movie', {
    params: {
      language: 'en-US',
      query,
      page,
    },
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
  return data;
};

// Get details of a movie by ID
export const getMovieDetailsById = async id => {
  const { data } = await axios.get(`/movie/${id}`, {
    params: {
      id,
      language: 'en-US',
    },
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
  return data;
};

// Getting the cast of the movie
export const getMovieCast = async id => {
  const { data } = await axios.get(`/movie/${id}/credits`, {
    paarams: {
      id,
      language: 'en-US',
    },
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
  return data;
};

// Getting the user reviews for a movie
export const getMovieReviews = async id => {
  const { data } = await axios.get(`/movie/${id}/reviews`, {
    paarams: {
      id,
      language: 'en-US',
    },
    headers: {
      Authorization: `Bearer ${AUTH_TOKEN}`,
    },
  });
  return data;
};
