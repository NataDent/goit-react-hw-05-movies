import { Routes, Route } from 'react-router-dom';
import { lasy, Suspense } from 'react';
import { SharedLayout } from '../components/SharedLayout';

const Home = lasy(() => import('../../src/pages/Home'));
const Movies = lasy(() => import('../../src/pages/Movies'));
const MovieDetails = lasy(() => import('../../src/pages/MovieDetails'));
const NotFound = lasy(() => import('../../src/pages/NotFound'));

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
