import { Loader } from "utils/Loader";
import { GalleryItemStyled, MovieTitle, MoviesGalleryStyled } from "./MoviesGallery.styled";
import InfiniteScroll from "react-infinite-scroll-component";
import { ToastContainer, toast } from 'react-toastify';
import { Link, useLocation } from "react-router-dom";



const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const MoviesGallery = ({movies, loadMore}) => {
  const location = useLocation();
  return (
    <>
    <ToastContainer autoclose={5000}/>
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
            {movies.map(({id,  title,  backdrop_path}) => {
            const image = backdrop_path ? `${BASE_URL}${backdrop_path}` : toast.error('Oops! There was an error!');
            return(
               <GalleryItemStyled key={id}>

                <Link to={`/movies/${id}`} state={{ from: location }}>
                <img
                  src={image}
                  alt={title}
                  width="300px"
                  height="450px"
                />
                <MovieTitle>{title}</MovieTitle>
                </Link>

              </GalleryItemStyled>)
})}
          </MoviesGalleryStyled>
        </InfiniteScroll>
      )}
    </>
  )
 };






