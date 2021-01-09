import { all, fork } from 'redux-saga/effects';
import { requestSaga } from './request/requestSaga';
import { workplaceSaga } from './workplace/workplaceSaga';
import { workspaceSaga } from './workspace/workspaceSaga';

const rootSaga = function* root() {
  yield all([fork(requestSaga), fork(workplaceSaga), fork(workspaceSaga)]);
};

export default rootSaga;
