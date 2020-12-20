import {call, put, takeLatest} from 'redux-saga/effects';
import {apiURLs} from '../../constants';
import request from '../../utils/request';

import * as constants from './constants';

import * as actions from './actions';

function* loadMovies(action: any, url = null): any {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const requestURL = url ? url : `${apiURLs.films}`;
  try {
    const {
      data: {
        next,
        results,
      },
      /* headers */
    } = yield call(request, requestURL, options);
    yield put(actions.loadMoviesSuccess(results));
    if (next) yield loadMovies(action, next);
  } catch (error) {
    yield put(actions.loadMoviesFailed(error.response.status));
  }
}

function* loadPlanets(action: any, url = null): any {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const requestURL = url ? url : `${apiURLs.planets}`;
  try {
    const {
      data: {
        next,
        results,
      },
      /* headers */
    } = yield call(request, requestURL, options);
    yield put(actions.loadPlanetsSuccess(results));
    if (next) yield loadPlanets(action, next);
  } catch (error) {
    yield put(actions.loadPlanetsFailed(error.response.status));
  }
}

function* loadPeoples(action: any, url = null): any {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const requestURL = url ? url : `${apiURLs.people}`;
  try {
    const {
      data: {
        next,
        results,
      },
      /* headers */
    } = yield call(request, requestURL, options);
    yield put(actions.loadPeoplesSuccess(results));
    if (next) yield loadPeoples(action, next);
  } catch (error) {
    yield put(actions.loadPeoplesFailed(error.response.status));
  }
}

function* loadSpecies(action: any, url = null): any {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const requestURL = url ? url : `${apiURLs.species}`;
  try {
    const {
      data: {
        next,
        results,
      },
      /* headers */
    } = yield call(request, requestURL, options);
    yield put(actions.loadSpeciesSuccess(results));
    if (next) yield loadSpecies(action, next);
  } catch (error) {
    yield put(actions.loadSpeciesFailed(error.response.status));
  }
}

function* loadStarships(action: any, url = null): any {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const requestURL = url ? url : `${apiURLs.starships}`;
  try {
    const {
      data: {
        next,
        results,
      },
      /* headers */
    } = yield call(request, requestURL, options);
    yield put(actions.loadStarshipsSuccess(results));
    if (next) yield loadStarships(action, next);
  } catch (error) {
    yield put(actions.loadStarshipsFailed(error.response.status));
  }
}

function* loadVehicles(action: any, url = null): any {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const requestURL = url ? url : `${apiURLs.vehicles}`;
  try {
    const {
      data: {
        next,
        results,
      },
      /* headers */
    } = yield call(request, requestURL, options);
    yield put(actions.loadVehiclesSuccess(results));
    if (next) yield loadVehicles(action, next);
  } catch (error) {
    yield put(actions.loadVehiclesFailed(error.response.status));
  }
}

export default function* HomeSaga() {
  yield takeLatest(constants.LOAD_MOVIES, loadMovies);
  yield takeLatest(constants.LOAD_VEHICLES, loadVehicles);
  yield takeLatest(constants.LOAD_STARSHIPS, loadStarships);
  yield takeLatest(constants.LOAD_SPECIES, loadSpecies);
  yield takeLatest(constants.LOAD_PEOPLES, loadPeoples);
  yield takeLatest(constants.LOAD_PLANETS, loadPlanets);
}
