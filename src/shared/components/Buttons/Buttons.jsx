import PropTypes from 'prop-types';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import scss from './Buttons.module.scss';

const Buttons = ({ page, previousPage, nextPage }) => {
  return (
    <div className={scss.btnBox}>
      {page > 1 && (
        <button className={scss.button} type="button" onClick={previousPage}>
          <IconContext.Provider
            value={{
              style: { width: '20px', height: '20px', fill: 'blue' },
            }}
          >
            <AiOutlineArrowLeft />
          </IconContext.Provider>
        </button>
      )}
      <p className={scss.text}>{page}</p>
      <button className={scss.button} type="button" onClick={nextPage}>
        <IconContext.Provider
          value={{
            style: { width: '20px', height: '20px', fill: 'blue' },
          }}
        >
          <AiOutlineArrowRight />
        </IconContext.Provider>
      </button>
    </div>
  );
};

export default Buttons;

Buttons.propTypes = {
  page: PropTypes.number.isRequired,
  previousPage: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
};
