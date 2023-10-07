import axios from 'axios';
const accept = 'application/json';
const Authorization =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYjIwOWFkYWM0MmMyODFlZDBmMWNjZmMyNTBmNzk5MSIsInN1YiI6IjY1MWE5OGYwOTY3Y2M3MzQyNjA5ZTc2MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.m93T8ZMpr2fyuroo_6h3P7kuR8Mgd_ssuYjfehMO0ko';

const options = {
  method: 'GET',
  headers: {
    accept,
    Authorization,
  },
};

export const getPopularMovies = async () => {
  const { data } = await axios(
    'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
    options
  );
  return data;
};

export const searchMoviesByQuery = async query => {
  const { data } = await axios('https://api.themoviedb.org/3/search/movie', {
    params: { include_adult: 'false', language: 'en-US', page: '1', query },
    headers: {
      accept,
      Authorization,
    },
  });

  return data;
};

export const searchMoviesById = async id => {
  const { data } = await axios(`https://api.themoviedb.org/3/movie/${id}`, {
    params: { language: 'en-US' },
    headers: {
      accept,
      Authorization,
    },
  });

  return data;
};
