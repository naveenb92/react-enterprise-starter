import { combineReducers } from 'redux-immutable';

import demoReducer from './components/Demo/demoReducer';
import rehydrationReducer from './rehydrationReducer';

const reducers = {
  demo: demoReducer,
  rehydrated: rehydrationReducer,
};

const rootReducer = combineReducers(reducers);

export default rootReducer;
