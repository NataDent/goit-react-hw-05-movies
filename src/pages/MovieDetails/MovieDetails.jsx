import { MoviesGalleryItem } from 'components/MoviesgalleryItem/MoviesGalleryItem';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetailsById } from 'utils/api';

const MovieDetails = () => {
  const [details, setDetails] = useState({});

  const { movieId } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      try {
        const { movieDetails } = await getMovieDetailsById(movieId);
        setDetails(movieDetails);
      } catch (error) {
        console.log(error.message);
      }
    };
    getDetails(movieId);
  }, [movieId]);

  const { id, poster_path, original_title, vote_average, overview, genres } =
    details;

  return (
    <div>
      <MoviesGalleryItem
        id={id}
        poster_path={poster_path}
        original_title={original_title}
        vote_average={vote_average}
        overview={overview}
        genres={genres}
      />
    </div>
  );
};

export default MovieDetails;
