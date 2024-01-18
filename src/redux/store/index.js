import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import localStorage, { loadState } from '../../middleware/local-storage';

import reducer from '../reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const initialState = loadState();
const storeVar = createStore(
    reducer,
    // initialState,
    composeEnhancers(
        applyMiddleware(
            promise,
            thunk,
            // localStorage(),
            // logger
        ),
    )
);

const store = storeVar;

export default store;