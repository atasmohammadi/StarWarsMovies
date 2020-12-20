/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
import home from '../pages/Home/reducer';
import favoriteCharacters from '../pages/FavoriteCharacters/reducer';
import favoriteMovies from '../pages/FavoriteMovies/reducer';

/**
 * Merges the main reducer with the router state and dynamically injected reducers
 */
export default combineReducers({
    home,
    favoriteCharacters,
    favoriteMovies,
});
