import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getMovieCast } from 'utils/api';

import { CastInfo } from 'components/CastInfo/CastInfo';

export const Cast = () => {
  const [casting, setCasting] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const getCasting = async () => {
      try {
        const { cast } = await getMovieCast(movieId);
        setCasting(cast);
      } catch (error) {
        console.log(error.message);
      }
    };
    getCasting();
  }, [movieId]);

  return (
    <>
      {casting.length === 0 ? (
        'Sorry! There is no casting information for this movie'
      ) : (
        <CastInfo actors={casting} />
      )}
    </>
  );
};
