import { combineReducers } from 'redux';

import app from './app';
import form from './form';
import instructors from './instructors';

const reducer = combineReducers({
  app,
  form,
  instructors,
});

export default reducer;