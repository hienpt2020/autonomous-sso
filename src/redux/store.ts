import { applyMiddleware, combineReducers, createStore, StoreEnhancer } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { applyAppEnhances } from '../config';
import * as reducers from './reducers';
import rootSaga from './sagas';
import { RootState } from './types';

const appReducer = combineReducers<RootState>(reducers);
const sagaMiddleware = createSagaMiddleware();

let enhancers: StoreEnhancer;

enhancers = applyAppEnhances([applyMiddleware(sagaMiddleware)]);

export default createStore(appReducer, enhancers);

// then run the saga
sagaMiddleware.run(rootSaga);
