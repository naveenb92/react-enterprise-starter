import { Map } from 'immutable';
import localforage from 'localforage';
import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore } from 'redux-persist-immutable';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const initialState = Map({});

/* eslint no-underscore-dangle: 0 */
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(sagaMiddleware)));

persistStore(store, {
  key: 'demoApp',
  storage: localforage,
  blacklist: ['telemetryReport'],
});

sagaMiddleware.run(rootSaga);

export default store;