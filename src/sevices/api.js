import axios from 'axios';

const API_KEY = 'c7ca8a74e600bcb8b6add51ea98a0474';

export async function getTrendingMovies() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  );
  const { data } = response;

  return data;
}

export async function getMovieById(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );
  const { data } = response;

  return data;
}

export async function getMoviesByQuerry(querry) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${querry}`
  );

  const { data } = response;

  return data.results;
}

export async function getCastById(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );
  const { data } = response;

  return data;
}

export async function getReviewsById(id) {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
  );
  const { data } = response;

  return data;
}
