import { List } from 'components/List/List';
import { getPopularMovies } from 'helpers/api';
import { useCallback, useEffect, useState } from 'react';

const Home = () => {
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
      {isLoading && <div>Loading...</div>}
      {isError && <div>Try later</div>}
      <List arr={arrMovies} />
    </section>
  );
};

export default Home;
