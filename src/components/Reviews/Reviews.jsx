const { useParams } = require('react-router-dom');

const Reviews = () => {
  const { movieId } = useParams();
  return <div>Reviews</div>;
};

export default Reviews;
