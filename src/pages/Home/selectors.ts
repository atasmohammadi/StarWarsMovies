import {createSelector} from 'reselect';
import {initialState} from './reducer';

/**
 * Direct selector to the Home state domain
 */

const selectHomeDomain = (state) => state.home || initialState;

/**
 * Other specific selectors
 */

const makeSelectLoading = () =>
  createSelector(selectHomeDomain, (subState) => subState.loading);

const makeSelectMovies = () =>
  createSelector(selectHomeDomain, (subState) => subState.movies);

const makeSelectPeoples = () =>
  createSelector(selectHomeDomain, (subState) => subState.peoples);

const makeSelectStarships = () =>
  createSelector(selectHomeDomain, (subState) => subState.starships);

const makeSelectSpecies = () =>
  createSelector(selectHomeDomain, (subState) => subState.species);

const makeSelectVehicles = () =>
  createSelector(selectHomeDomain, (subState) => subState.vehicles);

const makeSelectPlanets = () =>
  createSelector(selectHomeDomain, (subState) => subState.planets);

const makeSelectError = () =>
  createSelector(selectHomeDomain, (subState) => subState.error);

const makeSelectSuccess = () =>
  createSelector(selectHomeDomain, (subState) => subState.success);

/**
 * Default selector used by Home
 */

const makeSelectHome = () =>
  createSelector(selectHomeDomain, (subState) => subState);

export default makeSelectHome;
export {
  selectHomeDomain,
  makeSelectLoading,
  makeSelectMovies,
  makeSelectPeoples,
  makeSelectStarships,
  makeSelectSpecies,
  makeSelectVehicles,
  makeSelectPlanets,
  makeSelectError,
  makeSelectSuccess,
};
