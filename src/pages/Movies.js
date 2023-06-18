import MoviesList from 'components/MoviesList/MoviesList';
import SearchMovieForm from 'components/SearchMovieForm/SearchMovieForm';
import { useEffect, useState } from 'react';
import { getMoviesByQuerry } from 'sevices/api';

const statusStages = {
  IDLE: 'idle',
  PENDING: 'pending',
  REJECTED: 'rejected',
  RESOLVED: 'resolved',
};

const { IDLE, PENDING, REJECTED, RESOLVED } = statusStages;

const Movies = () => {
  const [querry, setQuerry] = useState('');
  const [moviesByQuerry, setMoviesByQuerry] = useState([]);
  const [status, setStatus] = useState(IDLE);

  useEffect(() => {
    getMoviesByQuerry(querry).then(movies => setMoviesByQuerry(movies));
    setStatus(RESOLVED);
  }, [querry]);

  const onSearch = querry => {
    setQuerry(querry);
  };

  return (
    <div>
      <SearchMovieForm onSearch={onSearch} />
      {status === RESOLVED && <MoviesList movies={moviesByQuerry} />}
    </div>
  );
};

export default Movies;
