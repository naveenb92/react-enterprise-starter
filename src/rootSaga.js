import { fork } from 'redux-saga/effects';
import demoSaga from './components/Demo/demoSaga';

export default function* rootSaga() {
  yield [fork(demoSaga)];
}
