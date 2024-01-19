import { combineReducers } from 'redux';

import app from './app';
import instructors from './instructors';
import form from './form';

const reducer = combineReducers({
  app,
  instructors,
  form,
});

export default reducer;