/*
 *
 * Favorite Characters actions
 *
 */

import * as constants from './constants';

import type { People } from './types';

export const addFavorite = (character: People) => ({
  type: constants.ADD_FAVORITE,
  payload: {character},
});

export const removeFavorite = (character: People) => ({
  type: constants.REMOVE_FAVORITE,
  payload: {character},
});