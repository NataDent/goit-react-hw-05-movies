import { Loader } from "utils/Loader";
import { GalleryItemStyled, MovieTitle, MoviesGalleryStyled } from "./MoviesGallery.styled";
import InfiniteScroll from "react-infinite-scroll-component";




export const MoviesGallery = ({movies, loadMore}) => {
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
              <b> You've already seen it all</b>
            </p>
          }
        >
          <MoviesGalleryStyled>
            {movies.map(({id, poster_path, title}) => (
              <GalleryItemStyled key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${poster_path}`}
                  alt={title}
                  width="300px"
                  height="450px"
                />
                <MovieTitle>{title}</MovieTitle>
              </GalleryItemStyled>
            ))}
          </MoviesGalleryStyled>
        </InfiniteScroll>
      )}
    </>
  )
 };






