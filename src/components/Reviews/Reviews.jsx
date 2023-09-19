import { ReviewsInfo } from 'components/ReviewsInfo/ReviewsInfo';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'utils/api';

export const Reviews = () => {
  const [reviews, setSReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getReviews = async () => {
      try {
        const { results } = await getMovieReviews(movieId);
        setSReviews(results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getReviews();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        'Sorry! There are no any Reviews for this movie'
      ) : (
        <ReviewsInfo reviews={reviews} />
      )}
    </>
  );
};
