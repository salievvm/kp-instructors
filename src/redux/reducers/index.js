import { combineReducers } from 'redux';

import app from './app';
import instructors from './instructors';

const reducer = combineReducers({
  app,
  instructors,
});

export default reducer;