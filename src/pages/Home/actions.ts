/*
 *
 * Home actions
 *
 */

import * as constants from './constants';

import type { Movie, Planet, People, Vehicle, Species, Starship } from './types';

// Movies
export const loadMovies = () => ({
  type: constants.LOAD_MOVIES,
});

export const loadMoviesSuccess = (movies: Movie[]) => ({
  type: constants.LOAD_MOVIES_SUCCESS,
  payload: {movies},
});

export const loadMoviesFailed = (error: string) => ({
  type: constants.LOAD_MOVIES_FAILED,
  payload: error,
});

// People
export const loadPeoples = () => ({
  type: constants.LOAD_PEOPLES,
});

export const loadPeoplesSuccess = (peoples: People[]) => ({
  type: constants.LOAD_PEOPLES_SUCCESS,
  payload: {peoples},
});

export const loadPeoplesFailed = (error: string) => ({
  type: constants.LOAD_PEOPLES_FAILED,
  payload: error,
});

// Planets
export const loadPlanets = () => ({
  type: constants.LOAD_PLANETS,
});

export const loadPlanetsSuccess = (planets: Planet[]) => ({
  type: constants.LOAD_PLANETS_SUCCESS,
  payload: {planets},
});

export const loadPlanetsFailed = (error: string) => ({
  type: constants.LOAD_PLANETS_FAILED,
  payload: error,
});

// Starships
export const loadStarships = () => ({
  type: constants.LOAD_STARSHIPS,
});

export const loadStarshipsSuccess = (starships: Starship[]) => ({
  type: constants.LOAD_STARSHIPS_SUCCESS,
  payload: {starships},
});

export const loadStarshipsFailed = (error: string) => ({
  type: constants.LOAD_STARSHIPS_FAILED,
  payload: error,
});

// Species
export const loadSpecies = () => ({
  type: constants.LOAD_SPECIES,
});

export const loadSpeciesSuccess = (species: Species[]) => ({
  type: constants.LOAD_SPECIES_SUCCESS,
  payload: {species},
});

export const loadSpeciesFailed = (error: string) => ({
  type: constants.LOAD_SPECIES_FAILED,
  payload: error,
});

// Vehicles
export const loadVehicles = () => ({
  type: constants.LOAD_VEHICLES,
});

export const loadVehiclesSuccess = (vehicles: Vehicle[]) => ({
  type: constants.LOAD_VEHICLES_SUCCESS,
  payload: {vehicles},
});

export const loadVehiclesFailed = (error: string) => ({
  type: constants.LOAD_VEHICLES_FAILED,
  payload: error,
});