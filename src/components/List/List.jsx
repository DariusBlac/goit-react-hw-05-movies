import { ListItem } from 'components/ListItem/ListItem';
import { Link, useLocation } from 'react-router-dom';
import plug from '../../images/plug.png';

export const List = ({ arr, location }) => {
  const { pathname } = useLocation();

  return (
    <ul>
      {arr.map(el => (
        <ListItem key={el.id}>
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
        </ListItem>
      ))}
    </ul>
  );
};
