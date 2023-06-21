import MovieInformation from 'components/MovieInformatiom/MovieInformation';
import { Suspense, useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getMovieById } from 'sevices/api';
import { Puff } from 'react-loader-spinner';
import css from './MovieDetails.module.css';

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const location = useLocation();
  const backLocationLink = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    getMovieById(movieId)
      .then(movie => setMovie(movie))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <div className="wrapper">
      <Link className={css.Link} to={backLocationLink.current}>
        Back
      </Link>
      <MovieInformation movie={movie} />
      <Link className={css.Link} to="cast">
        Cast
      </Link>
      <Link className={css.Link} to="reviews">
        Reviews
      </Link>
      <Suspense fallback={<Puff color="#3B5249"></Puff>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
