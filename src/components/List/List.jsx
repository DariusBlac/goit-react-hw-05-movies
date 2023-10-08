import { Link, useLocation } from 'react-router-dom';
import plug from '../../images/plug.png';
import css from './List.module.css';

export const List = ({ arr, location }) => {
  const { pathname } = useLocation();

  return (
    <ul className={css.list}>
      {arr.map(el => (
        <li key={el.id} className={css.item}>
          <Link
            to={pathname === '/movies' ? `${el.id}` : `movies/${el.id}`}
            state={location}
          >
            <img
              src={
                el.poster_path
                  ? `https://image.tmdb.org/t/p/w200${el.poster_path}`
                  : plug
              }
              alt={el.original_title}
              width={200}
              height={300}
            />
            <h3>{el.original_title}</h3>
          </Link>
        </li>
      ))}
    </ul>
  );
};
