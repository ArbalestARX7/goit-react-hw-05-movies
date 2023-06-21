import css from './SearchMovieForm.module.css';
import PropTypes from 'prop-types';

const SearchMovieForm = ({ onSubmit }) => {
  return (
    <form className={css.searchForm} onSubmit={onSubmit}>
      <button className={css.serchButton} type="submit">
        Search
      </button>

      <input
        name="querry"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search Films"
        className={css.searchInput}
      />
    </form>
  );
};

export default SearchMovieForm;

SearchMovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
