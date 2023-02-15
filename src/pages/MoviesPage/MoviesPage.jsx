import { useSearchParams } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getMoviesSearch } from 'shared/services/film-app';
import Section from 'shared/components/Section/Section';
import MoviesSearchForm from 'modules/components/MoviesSearchForm/MoviesSearchForm';
import Loader from 'shared/components/Loader/Loader';
import FilmsList from 'modules/components/FilmsList/FilmsList';
import Buttons from 'shared/components/Buttons/Buttons';
import scss from './MoviesPage.module.scss';

const MoviesPage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search');
  const page = searchParams.get('page');

  useEffect(() => {
    if (search === '' || search === null) {
      return;
    }

    const fetchMovies = async () => {
      try {
        setLoading(true);
        const data = await getMoviesSearch(page, search);
        setItems(data.results);
        if (!data.results.length) {
          toast.info('Sorry, no results were found for your search(');
        }
      } catch ({ response }) {
        toast.error(response.data.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [page, search]);

  const onSearchMovies = useCallback(({ search }) => {
    setSearchParams({ search, page: 1 });
    setItems([]);
  }, []);

  const nextPage = useCallback(() => {
    if (page > 0) {
      setSearchParams({ search, page: Number(page) + 1 });
    }
  });

  const previousPage = useCallback(() => {
    setSearchParams({ search, page: Number(page) - 1 });
  });

  return (
    <Section>
      <MoviesSearchForm onSubmit={onSearchMovies}></MoviesSearchForm>
      <h1 className={scss.title}>
        {items.length > 0
          ? `Search results: ${search}`
          : 'Please start searching'}
      </h1>
      {loading && <Loader />}
      {items.length > 0 && !loading && <FilmsList items={items} />}
      {items.length > 0 && !loading && (
        <Buttons page={page} nextPage={nextPage} previousPage={previousPage} />
      )}
    </Section>
  );
};

export default MoviesPage;
