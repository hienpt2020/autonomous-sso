import { all, fork } from 'redux-saga/effects';
import { requestSaga } from './request/requestSaga';

import { workplaceSaga } from './workplace/workplaceSaga';
import { workspaceSaga } from './workspace/workspaceSaga';
import { userSaga } from './user/userSaga';
import getBookingHistorySaga from './booking/bookingHistory/getBookingHistorySaga';
import getPlaceDetailSaga from './workplace/getPlaceDetail/getPlaceDetailSaga';

const rootSaga = function* root() {
  yield all([
    fork(requestSaga),
    fork(userSaga),
    fork(workplaceSaga),
    fork(workspaceSaga),
    fork(getBookingHistorySaga),
    fork(getPlaceDetailSaga),
  ]);
};

export default rootSaga;
