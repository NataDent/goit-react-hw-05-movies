import {
  GalleryItemImageStyled,
  GalleryItemStyled,
  MovieTitle,
  MoviesGalleryStyled,
  LinkStyled,
} from './MoviesGallery.styled';

import { useLocation } from 'react-router-dom';

import { Loader } from 'utils/Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

const BASE_URL = 'https://image.tmdb.org/t/p/w500';
const errorImage =
  'https://as2.ftcdn.net/v2/jpg/02/17/34/67/1000_F_217346796_TSg5VcYjsFxZtIDK6Qdctg3yqAapG7Xa.jpg';

export const MoviesGallery = ({ movies, loadMore }) => {
  const location = useLocation();

  return (
    <>
      {movies.length > 0 && (
        <InfiniteScroll
          dataLength={movies.length} //This is important field to render the next data
          next={loadMore}
          hasMore={true}
          loader={<Loader key={0} loading={true} />}
          endMessage={
            <p style={{ textAlign: 'center' }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          <MoviesGalleryStyled>
            {movies.map(({ id, title, backdrop_path }) => {
              const image = backdrop_path
                ? `${BASE_URL}${backdrop_path}`
                : errorImage;

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
        </InfiniteScroll>
      )}
    </>
  );
};
