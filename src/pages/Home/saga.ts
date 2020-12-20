import {call, put, takeLatest} from 'redux-saga/effects';
import {apiURLs} from '../../constants';
import request from '../../utils/request';

import {LOAD_MOVIES} from './constants';

import {loadMoviesFailed, loadMoviesSuccess} from './actions';

function* loadMovies() {
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  };
  const requestURL = `${apiURLs.films}`;
  try {
    const {
      data: {/*count, next, previous,*/ results} /* headers */,
    } = yield call(request, requestURL, options);
    yield put(loadMoviesSuccess(results));
  } catch (error) {
    yield put(loadMoviesFailed(error.response.status));
  }
}

export default function* HomeSaga() {
  yield takeLatest(LOAD_MOVIES, loadMovies);
}
