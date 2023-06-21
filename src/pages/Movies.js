import { useEffect, useState } from 'react';
import { getMoviesByQuerry } from 'sevices/api';
import { useSearchParams } from 'react-router-dom';
import MoviesList from 'components/MoviesList/MoviesList';
import SearchMovieForm from 'components/SearchMovieForm/SearchMovieForm';

const Movies = () => {
  const [moviesByQuerry, setMoviesByQuerry] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const querry = searchParams.get('searchQuerry') ?? '';

  useEffect(() => {
    getMoviesByQuerry(querry)
      .then(movies => setMoviesByQuerry(movies))
      .catch(error => console.log(error));
  }, [querry]);

  const onFormSubmit = evt => {
    evt.preventDefault();

    const searchForm = evt.target;
    const searchQuerry = searchForm.elements.querry.value;

    if (searchQuerry.trim() === '') {
      alert('Write the name of the movie');
    }

    const nextSearchQuerry = searchQuerry !== '' ? { searchQuerry } : {};
    setSearchParams(nextSearchQuerry);
    searchForm.reset();
  };

  return (
    <div>
      <SearchMovieForm querry={querry} onSubmit={onFormSubmit} />
      <MoviesList movies={moviesByQuerry} />
    </div>
  );
};

export default Movies;
