import NotFound from 'pages/NotFound/NotFound';
import { Outlet, useLocation } from 'react-router-dom';
import {
  AddInfoBox,
  ItemContainer,
  LinkCover,
  MovieWrapper,
  OriginalTitle,
  StyledLink,
  TitleMid,
  TitleSm,
} from './MoviesGalleryItem.styled';
import { Link } from 'react-router-dom';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const MoviesGalleryItem = ({
  id,
  poster_path,
  original_title,
  vote_average,
  overview,
  genres = [],
}) => {
  const location = useLocation();
  const image = poster_path ? `${BASE_URL}${poster_path}` : <NotFound />;

  return (
    <ItemContainer key={id}>
      <StyledLink to={location?.state?.from?.pathname ?? '/'}>
        Go Back
      </StyledLink>
      <MovieWrapper>
        <img src={image} alt={original_title} />
        <div>
          <OriginalTitle>{original_title}</OriginalTitle>
          <p>User Score: {Math.round(vote_average) * 10}%</p>
          <TitleMid>Overview</TitleMid>
          <p>{overview}</p>
          <TitleSm>Genres</TitleSm>
          <p>{genres.map(el => el.name).join(', ')}.</p>
        </div>
      </MovieWrapper>
      <AddInfoBox>
        <TitleMid>Additional information</TitleMid>
        <LinkCover>
          <Link>
            <Link to="cast" state={{ from: location }}>
              Cast
            </Link>
          </Link>
          <li>
            <Link to="reviews" state={{ from: location }}>
              Reviews
            </Link>
          </li>
        </LinkCover>
      </AddInfoBox>

      <Outlet />
    </ItemContainer>
  );
};
