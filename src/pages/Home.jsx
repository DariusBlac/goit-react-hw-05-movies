import { List } from 'components/List/List';
import { getPopularMovies } from 'helpers/api';
import { useCallback, useEffect, useState } from 'react';

export const Home = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [arrMovies, setArrMovies] = useState([]);

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    try {
      const { results } = await getPopularMovies();
      setArrMovies(results);
    } catch (error) {
      setIsError(true);
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <section>
      <h1>Popular Movies</h1>
      <List arr={arrMovies} />
    </section>
  );
};
