/*
 *
 * Home actions
 *
 */

import {
  LOAD_MOVIES,
  LOAD_MOVIES_SUCCESS,
  LOAD_MOVIES_FAILED,
} from './constants';

import type { Movie } from './types';

export const loadMovies = () => ({
  type: LOAD_MOVIES,
});

export const loadMoviesSuccess = (movies: Movie[]) => ({
  type: LOAD_MOVIES_SUCCESS,
  payload: {movies},
});

export const loadMoviesFailed = (error: string) => ({
  type: LOAD_MOVIES_FAILED,
  payload: error,
});
