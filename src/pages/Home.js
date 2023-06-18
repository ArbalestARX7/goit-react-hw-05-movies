import { useEffect, useState } from 'react';
import { getTrendingMovies } from 'sevices/api';
import MoviesList from 'components/MoviesList/MoviesList';

export default function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(response => setTrendingMovies(response.results));
  }, []);

  return (
    <div className="wrapper">
      <h1 className="title">Trending today</h1>
      <MoviesList movies={trendingMovies} />
    </div>
  );
}
