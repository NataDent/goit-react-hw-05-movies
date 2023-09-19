import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { searchMovieByKeyword } from 'utils/api';
import { SearchBar } from 'components/Searcbar/Searcbar';
import { toast, ToastContainer } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const query = searchParams.get('movieId');

  useEffect(() => {
    const getMovieId = async () => {
      if (!query) return;
      setIsLoading(true);
      setSearchParams(e => e.target.value);

      try {
        const { results } = await searchMovieByKeyword(query);
        setMovies(state => [...state, ...results]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getMovieId(query);
  }, [setSearchParams, query]);

  // const visibleMovies = movies.filter(({ title }) => title.includes(movieId));
  const handleSubmit = searchParams({ movieId: query });
  return (
    <div>
      <ToastContainer autoclose={5000} />
      <SearchBar handleSubmit={handleSubmit} value={query} />
      {error && !isLoading && toast.error('OOPS! THERE WAS AN ERROR!')}
      {movies.map(({ id, title }) => {
        return (
          <Link key={id} to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
