import { Map } from 'immutable';

import { put, takeLatest } from 'redux-saga/effects';
import { GET_CURRENT_WEATHER_FAILURE, GET_CURRENT_WEATHER_REQUEST, GET_CURRENT_WEATHER_SUCCESS } from './constants';
import * as api from '../../api';

function* getCurrentWeatherSaga(action) {
  try {

    /** If it were a real api we would do this
     const response = yield call(api.getCurrentWeather, { location: action.payload.get('location') });
     const temperature = response.temperature;
     */

    const min = 30;
    const max = 45;
    const random = Math.floor(Math.random() * (+max - +min)) + +min;

    yield put({ type: GET_CURRENT_WEATHER_SUCCESS, payload: Map({ weather: Map({ temperature: random }) }) });
  } catch (e) {
    yield put({ type: GET_CURRENT_WEATHER_FAILURE, payload: Map({ error: e }) });
  }
}

export default function* demoSaga() {
  yield takeLatest(GET_CURRENT_WEATHER_REQUEST, getCurrentWeatherSaga);
}
