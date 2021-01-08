import { all, fork } from 'redux-saga/effects';
import { requestSaga } from './request/requestSaga';

const rootSaga = function* root() {
  yield all([
    fork(requestSaga),
  ]);
};

export default rootSaga;
