import { all, fork } from 'redux-saga/effects';
import { requestSaga } from './request/requestSaga';
import { workplaceSaga } from './workplace/workplaceSaga';
import { workspaceSaga } from './workspace/workspaceSaga';
import { userSaga } from './user/userSaga';

const rootSaga = function* root() {
  yield all([fork(requestSaga), fork(userSaga), fork(workplaceSaga), fork(workspaceSaga)]);
};

export default rootSaga;
