import plug from '../../images/plug.png';
import css from './MovieInfo.module.css';

export const MovieInfo = ({
  movie: {
    original_title,
    poster_path,
    release_date,
    overview,
    genres,
    vote_average,
  },
}) => {
  return (
    <div className={css.container}>
      <img
        src={
          poster_path ? `https://image.tmdb.org/t/p/w400${poster_path}` : plug
        }
        alt={original_title}
      />
      <h2>{`${original_title} (${release_date})`}</h2>
      <ul className={css.list}>
        <li>
          <h3>User Score: {vote_average}</h3>
        </li>
        <li>
          <h3>Overview</h3>
          <p>{overview}</p>
        </li>
        <li>
          <h3>Genres</h3>
          <p>{genres.map(el => el.name).join(' ')}</p>
        </li>
      </ul>
    </div>
  );
};
