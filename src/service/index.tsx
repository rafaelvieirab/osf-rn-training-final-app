import axios from 'axios';
import { MovieSession } from '../models/MovieSession';
import { Movie } from '../models/Movie';
import { City } from '../models/City';

const cityFortalezaId = '36';

const api = axios.create({
  baseURL: 'https://osf-rn-training-bff.herokuapp.com',
});

export const getMovies = () => {
  return api.get<Movie[]>('movies');
};

export const getMoviesSessions = (
  movieId: string,
  date: string,
  cityId: string = cityFortalezaId,
) => {
  return api.get<MovieSession[]>(
    `movies/${movieId}/sessions/date/${date}?cityId=${cityId}`,
  );
};

export const getCities = () => {
  return api.get<City[]>('cities');
};

export const getMoviesByCity = (cityId: string) => {
  return api.get<City[]>(`movies/city/${cityId}`);
};
