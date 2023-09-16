import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

const Movies = () => {
  const [movies] = useState(['movie - 1', 'movie - 2', 'movie - 3']);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('movieId') ?? '';
  // useEffect(() => {
  //   first
  // HTTP запрос коллекции фильмов
  //   return () => {
  //     secondc
  //   }
  // }, [third])

  const updateQueryString = e => {
    const movieIdValue = e.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  const visibleMovies = movies.filter(movie => movie.includes(movieId));
  return (
    <div>
      <input type="text" onChange={updateQueryString} value={movieId} />;
      {visibleMovies.map(movie => {
        return (
          <Link key={movie} to={`${movie}`} state={{ from: location }}>
            {movie}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
