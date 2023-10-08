import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { searchMoviesById } from 'helpers/api';
import { Suspense, useCallback, useEffect, useState } from 'react';
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import css from './MovieDetails.module.css';

const MoviesDetails = () => {
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const { movieId } = useParams();
  const navigate = useNavigate();

  const location = useLocation();

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

  const handleBack = () => {
    location.state ? navigate(location.state) : navigate('/');
  };

  return (
    <div className={css.container}>
      {!isLoading && (
        <button onClick={handleBack} className={css.btn}>
          Go back
        </button>
      )}
      {movie && <MovieInfo movie={movie} />}

      {!isLoading && (
        <div className={css.container}>
          <h3>Additional information</h3>
          <ul className={css.list}>
            <li>
              <Link to="reviews" state={location.state}>
                Reviews
              </Link>
            </li>
            <li>
              <Link to="cast" state={location.state}>
                Cast
              </Link>
            </li>
          </ul>
        </div>
      )}
      {isLoading && <div className={css.loader}>Loading...</div>}
      {isError && <div>Try later</div>}
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MoviesDetails;
