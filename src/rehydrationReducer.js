import { REHYDRATE } from 'redux-persist-immutable/constants';

export default function rehydrationReducer(state = false, action) {
  switch (action.type) {
    case REHYDRATE: {
      return true;
    }

    default:
      return state;
  }
}
