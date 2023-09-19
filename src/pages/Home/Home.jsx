import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { useState, useEffect } from 'react';
import { getAllTrandingMoviesToday, getMovieDetailsById } from 'utils/api';
import { Container, SectionStyled, SectionTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  // const [page, setPage] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await getAllTrandingMoviesToday();
        setMovies(results);
        // setPage(prevPage => prevPage + 1);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovies();
  }, []);

  return (
    <SectionStyled>
      <Container>
        <SectionTitle>Trending today</SectionTitle>

        <MoviesGallery movies={movies} onClick={getMovieDetailsById} />
      </Container>
    </SectionStyled>
  );
};

export default Home;
