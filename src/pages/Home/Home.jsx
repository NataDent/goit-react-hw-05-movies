import { useState, useEffect } from 'react';
import { getAllTrandingMoviesToday } from 'components/api';

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getMovies = async () => {
      try {
        const { result } = await getAllTrandingMoviesToday();
        setMovies(result);
      } catch (error) {
        console.log(error.message);
      }
    };
    getMovies();
  }, []);

  return (
    <section>
      <div>
        <h2>Trending today</h2>
        <ul movies={movies}></ul>
      </div>
    </section>
  );
};

export default Home;
