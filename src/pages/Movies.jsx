import { Form } from 'components/Form/Form';
import { List } from 'components/List/List';
import { searchMoviesByQuery } from 'helpers/api';
import { useCallback, useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [arrMovies, setArrMovies] = useState([]);
  const [searchParam, setSearchParam] = useSearchParams('');
  const searchValue = searchParam.get('query');

  const setQueryMovies = value => {
    setSearchParam({ query: value });
  };

  const fetchMoviesByQuery = useCallback(async () => {
    setIsLoading(true);
    try {
      const { results } = await searchMoviesByQuery(searchValue);
      setArrMovies(results);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  }, [searchValue]);

  useEffect(() => {
    if (!searchValue) return;
    fetchMoviesByQuery();
  }, [searchValue, fetchMoviesByQuery]);

  return (
    <section>
      <Form setQuery={setQueryMovies} />
      {arrMovies && <List arr={arrMovies} />}
    </section>
  );
};
