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
import { useRef } from 'react';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const errorImage =
  ' https://i.ebayimg.com/00/s/NDAwWDQwMA==/z/mrYAAOSwWk5kux96/$_1.JPG?set_id=8800005007';

export const MoviesGalleryItem = ({
  id,
  poster_path,
  original_title,
  vote_average,
  overview,
  genres = [],
}) => {
  const location = useLocation();
  const image = poster_path ? `${BASE_URL}${poster_path}` : errorImage;
  const GoBack = useRef(location?.state?.from ?? '/');

  return (
    <ItemContainer key={id}>
      <StyledLink to={GoBack.current}>Go Back</StyledLink>
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
          <li>
            <Link to="cast" state={{ from: location }}>
              Cast
            </Link>
          </li>
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
