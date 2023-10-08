import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

import css from './Header.module.css';

export const Header = () => {
  return (
    <>
      <header>
        <ul className={css.list}>
          <li>
            <NavLink to="/" className={css.link}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" className={css.link}>
              Movies
            </NavLink>
          </li>
        </ul>
      </header>

      <Suspense>
        <Outlet />
      </Suspense>
    </>
  );
};
