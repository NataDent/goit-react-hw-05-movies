const { useParams } = require('react-router-dom');

const Cast = () => {
  const { movieId } = useParams();

  // useEffect(() => {
  //   first
  // HTTP запрос
  //   return () => {
  //     second
  //   }
  // }, [third])

  return <div>Cast</div>;
};

export default Cast;
