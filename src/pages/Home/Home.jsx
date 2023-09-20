import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { useState, useEffect } from 'react';
import { getAllTrandingMoviesToday } from 'utils/api';
import { Container, SectionStyled, SectionTitle } from './Home.styled';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await getAllTrandingMoviesToday(page);
        setMovies(prevState => [...results, ...results]);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovies();
  }, [page]);

  return (
    <SectionStyled>
      <Container>
        <SectionTitle>Trending today</SectionTitle>

        <MoviesGallery movies={movies} loadMore={loadMore} />
      </Container>
    </SectionStyled>
  );
};

export default Home;
