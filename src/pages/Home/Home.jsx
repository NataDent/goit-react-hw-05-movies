import { MoviesGallery } from 'components/MoviesGallery/MoviesGallery';
import { useState, useEffect } from 'react';
import { getAllTrandingMoviesToday, getMovieDetailsById } from 'utils/api';
import { Container, SectionStyled, SectionTitle } from './Home.styled';
import { Loader } from "utils/Loader";
import InfiniteScroll from "react-infinite-scroll-component";


const Home = () => {
  const [movies, setMovies] = useState([]);
  const[page,setPage]=useState(1);

  useEffect(() => {
    const getMovies = async () => {
      try {
        const { results } = await getAllTrandingMoviesToday();
        setMovies(results);
        setPage(prevPage=> prevPage+1);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovies(page);
  }, [page]);

  return (
    <SectionStyled>
      <Container>
        <SectionTitle>Trending today</SectionTitle>
        <InfiniteScroll
          dataLength={movies.length} //This is important field to render the next data
          next={getAllTrandingMoviesToday}
          hasMore={true}
          loader={<Loader key={0} loading={true} />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b> You've already seen it all</b>
            </p>
          }
        >
        <MoviesGallery movies={movies} onClick={getMovieDetailsById} />
        </InfiniteScroll>
      </Container>
    </SectionStyled>
  );
};

export default Home;
