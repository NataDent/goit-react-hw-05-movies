import { Routes, Route } from 'react-router-dom';
import { lasy, Suspense } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';

const Home = lasy(() => import('pages/Home/Home.jsx'));
const Movies = lasy(() => import('pages/Movies/Movies.jsx'));
const MovieDetails = lasy(() => import('pages/MovieDetails/MovieDetails.jsx'));
const NotFound = lasy(() => import('pages/NotFound/NotFound.jsx'));

export const App = () => {
  <Suspense fallback={<div>Loading...</div>}></Suspense>;
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
