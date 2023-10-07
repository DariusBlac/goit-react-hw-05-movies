import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { searchMoviesById } from 'helpers/api';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();

  const fetchMovieById = useCallback(async () => {
    setIsLoading(true);
    try {
      const data = await searchMoviesById(movieId);
      setMovie(data);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovieById();
  }, [fetchMovieById]);

  return movie && <MovieInfo movie={movie} />;
};
