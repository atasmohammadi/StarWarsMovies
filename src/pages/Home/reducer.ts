/*
 *
 * Home reducer
 *
 */

import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  movies: {},
  peoples: {},
  planets: {},
  starships: {},
  species: {},
  vehicles: {},
  error: false,
  success: false,
  loading: false,
};

/* eslint-disable default-case, no-param-reassign */
const homeReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case constants.LOAD_MOVIES:
      case constants.LOAD_PEOPLES:
      case constants.LOAD_PLANETS:
      case constants.LOAD_STARSHIPS:
      case constants.LOAD_SPECIES:
      case constants.LOAD_VEHICLES:
        draft.loading = true;
        break;
      case constants.LOAD_MOVIES_SUCCESS:
        // to cache the results and also have the offline capability, instead
        // of replacing the movies with results from API, we would append new
        // data into existing one. To avoid having duplicate entries array
        // is converted to object.
        const movies = action.payload.movies.reduce((obj, item) => {
          obj[item.title] = item;
          return obj;
        }, {});
        draft.movies = Object.assign({}, state.movies, movies);
        draft.success = true;
        draft.loading = false;
        draft.error = false;
        break;
      case constants.LOAD_PEOPLES_SUCCESS:
        const peoples = action.payload.peoples.reduce((obj, item) => {
          obj[item.name] = item;
          return obj;
        }, {});
        draft.peoples = Object.assign({}, state.peoples, peoples);
        draft.success = true;
        draft.loading = false;
        draft.error = false;
        break;
      case constants.LOAD_PLANETS_SUCCESS:
        const planets = action.payload.planets.reduce((obj, item) => {
          obj[item.name] = item;
          return obj;
        }, {});
        draft.planets = Object.assign({}, state.planets, planets);
        draft.success = true;
        draft.loading = false;
        draft.error = false;
        break;
      case constants.LOAD_STARSHIPS_SUCCESS:
        const starships = action.payload.starships.reduce((obj, item) => {
          obj[item.name] = item;
          return obj;
        }, {});
        draft.starships = Object.assign({}, state.starships, starships);
        draft.success = true;
        draft.loading = false;
        draft.error = false;
        break;
      case constants.LOAD_SPECIES_SUCCESS:
        const species = action.payload.species.reduce((obj, item) => {
          obj[item.name] = item;
          return obj;
        }, {});
        draft.species = Object.assign({}, state.species, species);
        draft.success = true;
        draft.loading = false;
        draft.error = false;
        break;
      case constants.LOAD_VEHICLES_SUCCESS:
        const vehicles = action.payload.vehicles.reduce((obj, item) => {
          obj[item.name] = item;
          return obj;
        }, {});
        draft.vehicles = Object.assign({}, state.vehicles, vehicles);
        draft.success = true;
        draft.loading = false;
        draft.error = false;
        break;
      case constants.LOAD_MOVIES_FAILED:
      case constants.LOAD_PEOPLES_FAILED:
      case constants.LOAD_PLANETS_FAILED:
      case constants.LOAD_STARSHIPS_FAILED:
      case constants.LOAD_SPECIES_FAILED:
      case constants.LOAD_VEHICLES_FAILED:
        draft.error = action.payload;
        draft.success = false;
        draft.loading = false;
        break;
    }
  });

export default homeReducer;
