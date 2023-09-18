
import { GalleryItemStyled, MovieTitle, MoviesGalleryStyled } from "./MoviesGallery.styled";

import { Link, useLocation } from "react-router-dom";
import NotFound from "pages/NotFound/NotFound";



const BASE_URL = 'https://image.tmdb.org/t/p/w500';

export const MoviesGallery = ({movies}) => {
  const location = useLocation();
  return (
    <>
          {movies.length > 0 && (
        
          <MoviesGalleryStyled>
            {movies.map(({id,  title,  backdrop_path}) => {
            const image = backdrop_path ? `${BASE_URL}${backdrop_path}` : <NotFound />

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
      
      )}
    </>
  )
 };






