import {
  GalleryItemImageStyled,
  GalleryItemStyled,
  MovieTitle,
  MoviesGalleryStyled,
  LinkStyled,
} from './MoviesGallery.styled';

import { useLocation } from 'react-router-dom';
import NotFound from 'pages/NotFound/NotFound';
// import { Loader } from 'utils/Loader';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { useState } from 'react';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const MoviesGallery = ({ movies }) => {
  // const [page, setPage] = useState(1);
  const location = useLocation();
  // const loadMore = setPage(prevPage => prevPage + 1);
  return (
    <>
      {movies.length > 0 && (
        <MoviesGalleryStyled>
          {movies.map(({ id, title, backdrop_path }) => {
            const image = backdrop_path ? (
              `${BASE_URL}${backdrop_path}`
            ) : (
              <NotFound />
            );

            return (
              <GalleryItemStyled key={id}>
                <LinkStyled to={`/movies/${id}`} state={{ from: location }}>
                  <GalleryItemImageStyled
                    src={image}
                    alt={title}
                    width="300px"
                    height="450px"
                  />
                  <MovieTitle>{title}</MovieTitle>
                </LinkStyled>
              </GalleryItemStyled>
            );
          })}
        </MoviesGalleryStyled>
      )}
    </>
  );
};
