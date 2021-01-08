import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import * as reducers from './reducers';
import { RootState } from './types';
import rootSaga from './sagas';

const appReducer = combineReducers<RootState>(reducers);
const sagaMiddleware = createSagaMiddleware();

export default createStore(appReducer, applyMiddleware(sagaMiddleware));

// then run the saga
sagaMiddleware.run(rootSaga);
