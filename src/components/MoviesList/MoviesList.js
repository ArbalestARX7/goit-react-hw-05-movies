import MovieCard from 'components/MovieCard/MovieCard';

import css from './MoviesList.module.css';

const MoviesList = ({ movies }) => {
  return (
    <ul className={css.moviesList}>
      {movies.map(movie => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </ul>
  );
};

export default MoviesList;
