import css from './MovieInformation.module.css';
import PropTypes from 'prop-types';

const MovieInformation = ({ movie }) => {
  const { poster_path, title, release_date, vote_average, genres, overview } =
    movie;

  let genresList = '';

  if (genres) {
    genresList = genres.map(genre => genre.name).join(', ');
  }

  const imgBaseUrl = 'https://image.tmdb.org/t/p/w500/';
  const imgUrl = imgBaseUrl.concat(poster_path);
  const defaultImg =
    'https://printworks-manchester.com/cinema-poster/images/film-poster-placeholder.png';

  return (
    <div className={css.MovieDesc}>
      <img width="350px" src={poster_path ? imgUrl : defaultImg} alt={title} />
      <div className={css.inform}>
        <h2 className={css.movieTitle}>{title}</h2>
        <p className={css.movieAbout}>
          <span className={css.movieAbotDesc}>Release date:</span>
          {release_date}
        </p>
        <p className={css.movieAbout}>
          <span className={css.movieAbotDesc}>Rating:</span>
          {vote_average}
        </p>
        <p className={css.movieAbout}>
          <span className={css.movieAbotDesc}>Genres:</span>
          {genresList}
        </p>
        <p className={css.movieAbout}>
          <span className={css.movieAbotDesc}>Overview:</span>
          {overview}
        </p>
      </div>
    </div>
  );
};

export default MovieInformation;

MovieInformation.propTypes = {
  movie: PropTypes.object.isRequired,
};
