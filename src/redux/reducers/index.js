import { combineReducers } from 'redux';

import app from './app';
import instructors from './instructors';
import form from './form';
import params from './params';

const reducer = combineReducers({
  app,
  instructors,
  form,
  params,
});

export default reducer;