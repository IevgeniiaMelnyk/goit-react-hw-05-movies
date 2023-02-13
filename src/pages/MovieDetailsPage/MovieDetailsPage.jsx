import { useRef } from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineBackward } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import scss from './MovieDetailsPage.module.scss';
import { fetchMovieDetails } from '../../shared/services/film-app.js';
import Section from 'shared/components/Section/Section';
import MovieData from 'modules/components/MovieData/MovieData.jsx';
import Loader from 'shared/components/Loader/Loader.jsx';

const MoviesDetailsPage = () => {
  const [movieDetails, setMovieDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const ref = useRef(location.state?.from ?? '/movies');
  const { movieId } = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const data = await fetchMovieDetails(movieId);
        setMovieDetails(data);
        console.log(data);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, []);

  return (
    <Section>
      {loading && <Loader />}
      <Link className={scss.link} to={ref.current}>
        <IconContext.Provider
          value={{
            style: { width: '24px', height: '30px', fill: 'blue' },
          }}
        >
          <AiOutlineBackward />
        </IconContext.Provider>
        GO BACK
      </Link>
      {movieDetails && (
        <MovieData
          url={movieDetails.poster_path}
          tag={movieDetails.title}
          title={movieDetails.title}
          score={movieDetails.vote_average}
          overview={movieDetails.overview}
          genres={movieDetails.genres}
          date={movieDetails.release_date}
        />
      )}
    </Section>
  );
};

export default MoviesDetailsPage;
