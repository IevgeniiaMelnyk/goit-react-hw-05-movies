import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Section from 'shared/components/Section/Section';
import FilmsList from 'modules/components/FilmsList/FilmsList.jsx';
import { getMoviesPopular } from '../../shared/services/film-app.js';
import Loader from 'shared/components/Loader/Loader.jsx';
import Buttons from 'shared/components/Buttons/Buttons.jsx';
import scss from './homePage.module.scss';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMoviesPopular(page);
        setItems(data.results);
      } catch (error) {
        toast.error(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [page]);

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };

  const previousPage = () => {
    if (page > 1) {
      setPage(prevPage => prevPage - 1);
    }
  };

  return (
    <Section>
      <h1 className={scss.title}>Trending today</h1>
      {loading && <Loader />}
      {items.length && !loading && <FilmsList items={items} />}
      {items.length && !loading && (
        <Buttons page={page} nextPage={nextPage} previousPage={previousPage} />
      )}
    </Section>
  );
};

export default HomePage;
