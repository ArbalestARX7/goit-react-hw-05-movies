import { useLocation } from 'react-router-dom';
import MovieCard from 'components/MovieCard/MovieCard';
import PropTypes from 'prop-types';
import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.moviesList}>
      {movies.map(movie => (
        <MovieCard key={movie.id} location={location} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
};
