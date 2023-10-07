import plug from '../../images/plug.png';

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
    <div>
      <img
        src={
          poster_path ? `https://image.tmdb.org/t/p/w400${poster_path}` : plug
        }
        alt={original_title}
      />
      <h2>{`${original_title} (${release_date})`}</h2>
      <p>User Score: {vote_average}</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h3>Genres</h3>
      <p>{genres.map(el => el.name).join(' ')}</p>
    </div>
  );
};
