// Service
import { takeLatest, call, put } from 'redux-saga/effects';
import { REQUEST_LOGOUT_ACTION, REQUEST_LOGIN_ACTION, REQUEST_VALIDATE_ACCESS_TOKEN } from './userType';
import { requestLoginAction } from './actions/requestLoginAction';
import { requestLogoutAction } from './actions/requestLogoutAction';
import { validateUserToken } from './actions/validateUserToken';





export const userSaga = function* root() {
  yield takeLatest(REQUEST_VALIDATE_ACCESS_TOKEN, validateUserToken);
  yield takeLatest(REQUEST_LOGIN_ACTION, requestLoginAction);
  yield takeLatest(REQUEST_LOGOUT_ACTION, requestLogoutAction);
};


