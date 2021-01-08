import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import { RootState } from './types';
import rootSaga from './sagas';
import logger from 'redux-logger';

const appReducer = combineReducers<RootState>(reducers);
const sagaMiddleware = createSagaMiddleware();

let enhancers: any;

if (__DEV__) {
  enhancers = compose(applyMiddleware(sagaMiddleware), applyMiddleware(logger));
} else {
  enhancers = compose(applyMiddleware(sagaMiddleware));
}
export default createStore(appReducer, enhancers);

// then run the saga
sagaMiddleware.run(rootSaga);
