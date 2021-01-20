import { all, fork } from 'redux-saga/effects';
import { requestSaga } from './request/requestSaga';

import { workspaceSaga } from './workspace/workspaceSaga';
import { userSaga } from './user/userSaga';

const rootSaga = function* root() {
    yield all([fork(requestSaga), fork(userSaga), fork(workspaceSaga)]);
};

export default rootSaga;
