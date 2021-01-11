import { all, fork } from 'redux-saga/effects';
import { requestSaga } from './request/requestSaga';
import getBookingHistorySaga from './booking/bookingHistory/getBookingHistorySaga';

const rootSaga = function* root() {
  yield all([fork(requestSaga), fork(getBookingHistorySaga)]);
};

export default rootSaga;
