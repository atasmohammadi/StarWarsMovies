/*
 *
 * Favorite Movies reducer
 *
 */

import produce from 'immer';
import * as constants from './constants';
import type { InitialStateType } from './types';

export const initialState: InitialStateType = {
  movies: [],
};

/* eslint-disable default-case, no-param-reassign */
const favoriteMoviesReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.ADD_FAVORITE:
        if(!state.movies.find(m => m.title === action.payload.movie.title)) draft.movies.push(action.payload.movie);
        break;
      case constants.REMOVE_FAVORITE:
        draft.movies = draft.movies.filter(c => c.title !== action.payload.movie.title);
        break;
    }
  });

export default favoriteMoviesReducer;
