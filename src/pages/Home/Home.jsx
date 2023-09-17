import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { useState, useEffect } from 'react';
import { getAllTrandingMoviesToday, getMovieDetailsById } from 'utils/api';
import { Container, SectionStyled, SectionTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await getAllTrandingMoviesToday();
        setMovies(results);
        
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
