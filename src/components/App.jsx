import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MoviesDetails } from 'pages/MoviesDetails';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          {/* <Route path="cast" element={<Movies />} />
          <Route path="reviews" element={<Movies />} /> */}
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
