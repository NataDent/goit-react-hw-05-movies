import { Outlet } from 'react-router-dom';
import { Container, Header, StyledLink } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        {/* <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>{' '}
          GoMerch Store
        </Logo> */}
        <nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/movies">Movies</StyledLink>
          <StyledLink to="/movies/:movieId">MovieDetails</StyledLink>
        </nav>
      </Header>
      <main>
        <Outlet />
      </main>
    </Container>
  );
};
