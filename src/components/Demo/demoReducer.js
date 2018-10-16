import { Map } from 'immutable';
import { GET_CURRENT_WEATHER_SUCCESS } from "./constants";

const initialState = Map({ weather: Map({ temperature: 0 }) });

export default function demoReducer(state = initialState, action) {
  switch (action.type) {

    case GET_CURRENT_WEATHER_SUCCESS: {
      return state.set('weather', action.payload.get('weather'));
    }

    default:
      return state;
  }
}
