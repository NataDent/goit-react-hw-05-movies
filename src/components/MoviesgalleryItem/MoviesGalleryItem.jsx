import NotFound from 'pages/NotFound/NotFound';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { ButtonBack, ItemContainer } from './MoviesGalleryItem.styled';
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
  const navigate = useNavigate();
  const image = poster_path ? `${BASE_URL}${poster_path}` : <NotFound />;

  return (
    <ItemContainer key={id}>
      <ButtonBack
        type="button"
        onClick={() => {
          navigate(location?.state?.from?.pathname ?? '/');
        }}
      >
        Go Back
      </ButtonBack>
      <img src={image} alt={original_title} />
      <h1>{original_title}</h1>
      <p>User Score: {Math.round(vote_average) * 10}%</p>
      <h3>Overview</h3>
      <p>{overview}</p>
      <h4>Genres</h4>
      <p>{genres.map(el => el.name).join(', ')}.</p>

      <div>
        <h3>Additional information</h3>
        <ul>
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
        </ul>
      </div>
      <Outlet />
    </ItemContainer>
  );
};
