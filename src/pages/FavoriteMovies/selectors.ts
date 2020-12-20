import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the Favorite Movies state domain
 */

const selectDomain = (state) => state.favoriteMovies || initialState;

/**
 * Other specific selectors
 */

const makeSelectMovies = () =>
  createSelector(selectDomain, (subState) => subState.movies);

/**
 * Default selector used by Home
 */

const makeSelectFavoriteMovies = () =>
  createSelector(selectDomain, (subState) => subState);

export default makeSelectFavoriteMovies;

export {makeSelectMovies};
