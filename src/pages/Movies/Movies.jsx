import { Link } from 'react-router-dom';

const Movies = () => {
  // useEffect(() => {
  //   first
  // HTTP запрос коллекции фильмов
  //   return () => {
  //     second
  //   }
  // }, [third])

  return (
    <div>
      {Movies.map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>
            {movie}
          </Link>
        );
      })}
    </div>
  );
};

export default Movies;
