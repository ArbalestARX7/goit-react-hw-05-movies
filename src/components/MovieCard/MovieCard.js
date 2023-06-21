import css from './MovieCard.module.css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieCard = ({ movie, location }) => {
  const { poster_path, title, id } = movie;

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const imgUrl = imgBaseUrl.concat(poster_path);
  const defaultImg =
    'https://printworks-manchester.com/cinema-poster/images/film-poster-placeholder.png';

  return (
    <li className={css.movieCard}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <img
          width="500px"
          src={poster_path ? imgUrl : defaultImg}
          alt={title}
        />
        <h2 className={css.movieTitle}>{title}</h2>
      </Link>
    </li>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};
