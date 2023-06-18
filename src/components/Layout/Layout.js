import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';
import styled from 'styled-components';

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
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
