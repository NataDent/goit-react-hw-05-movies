import { useRef, Suspense } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';

const MovieDetails = () => {
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();

  // useEffect(() => {
  //   first
  // HTTP запрос
  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <div>
      <h1>MovieDetails: {movieId}</h1>
      <Link to={backLinkLocationRef.current}>Back to movies</Link>
      <ul>
        <li>
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Suspense fallback={<div>Loading information...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
