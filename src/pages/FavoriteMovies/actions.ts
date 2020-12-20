/*
 *
 * Favorite Movies actions
 *
 */

import * as constants from './constants';

import type { Movie } from './types';

export const addFavorite = (movie: Movie) => ({
  type: constants.ADD_FAVORITE,
  payload: {movie},
});

export const removeFavorite = (movie: Movie) => ({
  type: constants.REMOVE_FAVORITE,
  payload: {movie},
});