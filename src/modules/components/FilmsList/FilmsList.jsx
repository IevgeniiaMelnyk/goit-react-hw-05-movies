import { memo } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import scss from './FilmsList.module.scss';

const FilmsList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, original_title }) => (
    <li className={scss.item} key={id}>
      <Link
        className={scss.link}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        {original_title}
      </Link>
    </li>
  ));
  return <ul className={scss.list}>{elements}</ul>;
};

export default memo(FilmsList);

FilmsList.defaultProps = {
  items: [],
};
