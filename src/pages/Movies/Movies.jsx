import { useState, useEffect } from 'react';
import { searchMovieByKeyword } from 'utils/api';
import { SearchBar } from 'components/Searcbar/Searcbar';
import { toast } from 'react-toastify';
import { useSearchParams } from 'react-router-dom';
import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [movies, setMovies] = useState([]);

  const [error, setError] = useState(null);

  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('movieId');

  useEffect(() => {
    if (!query) return;

    const getMovieId = async () => {
      setIsLoading(true);

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
  }, [query]);

  const handleSubmit = query => {
    setSearchParams({ movieId: query });
  };

  return (
    <div>
      <SearchBar onSubmitForm={handleSubmit} value={query} />
      {error && !isLoading && toast.error('OOPS! THERE WAS AN ERROR!')}
      <MoviesGallery movies={movies} />
    </div>
  );
};

export default Movies;
