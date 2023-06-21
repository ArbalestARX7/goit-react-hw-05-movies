import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'sevices/api';
import MoviesList from 'components/MoviesList/MoviesList';
import { useLocation } from 'react-router-dom';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    getTrendingMovies()
      .then(response => setTrendingMovies(response.results))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="wrapper">
      <h1 className="title">Trending today</h1>
      <MoviesList location={location} movies={trendingMovies} />
    </div>
  );
}
