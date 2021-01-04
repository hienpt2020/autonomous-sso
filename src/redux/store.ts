import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import * as reducers from './reducers';
import { RootState } from './types';

const appReducer = combineReducers<RootState>(reducers);

export default createStore(appReducer, applyMiddleware(thunk));
