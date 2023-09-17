import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovieByKeyword } from 'utils/api';
import { SearchBar } from 'components/Searcbar/Searcbar';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  const movieId = searchParams.get('movieId') ?? '';

  useEffect(() => {
    const getMovieId = async () => {
      if (!searchTerm) return;
      setIsLoading(true);
      setSearchTerm(e => e.target.value);
      try {
        const { results } = searchMovieByKeyword(searchTerm);
        setMovies(state => [...state, ...results]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieId(searchTerm);
  }, [searchTerm]);

  const updateQueryString = e => {
    const movieIdValue = e.target.value;
    if (movieIdValue === '') {
      return setSearchParams({});
    }
    setSearchParams({ movieId: movieIdValue });
  };

  const visibleMovies = movies.filter(({ title }) => title.includes(movieId));
  return (
    <div>
      <SearchBar onChange={updateQueryString} value={movieId} />
      {visibleMovies.map(({ id, title }) => {
        return (
          <Link key={id} to={`${id}`} state={{ from: location }}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
