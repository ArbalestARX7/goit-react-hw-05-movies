import MovieInformation from 'components/MovieInformatiom/MovieInformation';
import { useEffect, useState } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'sevices/api';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();

  useEffect(() => {
    getMovieById(movieId).then(movie => setMovie(movie));
  }, [movieId]);

  return (
    <>
      <MovieInformation movie={movie} />
      <Link to="cast">Cast</Link>
      <Link to="reviews">Reviews</Link>
      <Outlet />
    </>
  );
};

export default MovieDetails;
