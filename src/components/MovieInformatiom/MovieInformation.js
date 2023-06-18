import css from './MovieInformation.module.css';
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
      <div>
        <h2>{title}</h2>
        <p>Release date:{release_date}</p>
        <p>Rating:{vote_average}</p>
        <p>Genres:{genresList}</p>
        <p>Overview: {overview}</p>
      </div>
    </div>
  );
};

export default MovieInformation;
