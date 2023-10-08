import { searchMoviesActors } from 'helpers/api';
import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import plug from '../../images/plug.png';
import css from './Actors.module.css';

const Actors = () => {
  const [actors, setActors] = useState(null);
  const { movieId } = useParams();

  const fetchMovieActors = useCallback(async () => {
    try {
      const { cast } = await searchMoviesActors(movieId);
      setActors(cast);
    } catch (error) {
      console.log(error);
    }
  }, [movieId]);

  useEffect(() => {
    fetchMovieActors();
  }, [fetchMovieActors]);

  return (
    <>
      {actors && actors.length < 1 && (
        <div>We don't have ani cast for this movie.</div>
      )}
      <ul className={css.list}>
        {actors &&
          actors.map(el => {
            return (
              <li key={el.id} className={css.item}>
                <img
                  src={
                    el.profile_path
                      ? `https://image.tmdb.org/t/p/w200${el.profile_path}`
                      : plug
                  }
                  width={100}
                  height={150}
                  alt={el.name}
                />
                <h3>{el.name}</h3>
                <p>Character: {el.character}</p>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Actors;
