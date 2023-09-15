import { Link, Outlet, useParams } from 'react-router-dom';

export const MovieDetails = () => {
  const { movieId } = useParams();

  const Home = () => {
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
        <Link>Back to movies</Link>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        <Outlet />
      </div>
    );
  };
};