import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from 'modules/components/Navbar/Navbar';
import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import MoviesDetailsPage from 'pages/MovieDetailsPage/MovieDetailsPage';
import Cast from 'modules/components/Cast/Cast';
import Reviews from 'modules/components/Reviews/Reviews';

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MoviesDetailsPage />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<div>NotFound</div>} />
      </Routes>
    </BrowserRouter>
  );
};
