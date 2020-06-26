import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers/rootReducer';
import rootSaga from '../saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const enhancers = [];
const middleware = [
  sagaMiddleware,
];
const composeEnhancers = composeWithDevTools({});

const composedEnhancers = composeEnhancers(
  applyMiddleware(...middleware),
  ...enhancers,
);

const store = createStore(
  rootReducer,
  composedEnhancers,
);

sagaMiddleware.run(rootSaga);

export default store;