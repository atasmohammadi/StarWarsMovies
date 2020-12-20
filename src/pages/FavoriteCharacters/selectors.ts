import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the Favorite Characters state domain
 */

const selectDomain = (state) => state.favoriteCharacters || initialState;

/**
 * Other specific selectors
 */

const makeSelectCharacters = () =>
  createSelector(selectDomain, (subState) => subState.characters);

/**
 * Default selector used by Home
 */

const makeSelectFavoriteCharacters = () =>
  createSelector(selectDomain, (subState) => subState);

export default makeSelectFavoriteCharacters;

export {makeSelectCharacters};
