// Service
import { takeLatest } from 'redux-saga/effects';
import { REQUEST_LOGOUT_ACTION, REQUEST_LOGIN_ACTION, REQUEST_VALIDATE_ACCESS_TOKEN } from './userType';
import { requestLoginAction } from './request/requestLoginAction';
import { requestLogoutAction } from './request/requestLogoutAction';
import { validateUserToken } from './request/validateUserToken';





export const userSaga = function* root() {
  yield takeLatest(REQUEST_VALIDATE_ACCESS_TOKEN, validateUserToken);
  yield takeLatest(REQUEST_LOGIN_ACTION, requestLoginAction);
  yield takeLatest(REQUEST_LOGOUT_ACTION, requestLogoutAction);
};


