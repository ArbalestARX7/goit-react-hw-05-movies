import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import styled from 'styled-components';
import { Puff } from 'react-loader-spinner';

const StyledLink = styled(NavLink)`
  &.active {
    color: orange;

    border-bottom: 2px solid orange;
  }
`;

const Layout = () => {
  return (
    <>
      <header className={css.header}>
        <nav>
          <StyledLink className={css.navLink} to="/">
            Home
          </StyledLink>
          <StyledLink className={css.navLink} to="movies">
            Movies
          </StyledLink>
        </nav>
      </header>
      <main>
        <Suspense
          fallback={<Puff color="#3B5249" wrapperClass="spiner"></Puff>}
        >
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};

export default Layout;
