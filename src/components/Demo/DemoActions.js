import * as Immutable from 'immutable';
import {
  GET_CURRENT_WEATHER_REQUEST,
} from './constants';

export function getCurrentWeather(location) {
  return {
    type: GET_CURRENT_WEATHER_REQUEST,
    payload: Immutable.Map({ location }),
  };
}
