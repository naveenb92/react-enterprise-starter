import { get } from './utils';

const endpoints = {
  Weather: 'https://api.naveen.me/weather?location={location}'
};

export const getCurrentWeather = ({ location }) => {
  return get(endpoints.Weather.replace('{location}', location));
};
