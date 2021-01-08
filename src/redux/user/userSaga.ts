// Service
import { takeLatest, call } from 'redux-saga/effects';
import { RequestLoginAction  } from './userAction';
import { USER_REQUEST_LOGIN } from './userType';
import { SSOApi } from 'src/services/networking';
const login = function* login(action: RequestLoginAction) {
  try {
    const response = yield call(SSOApi.login, action.payload.email, action.payload.password);
    
    console.log('@Test login :', response);
  } catch (e) {
    console.log('@@Error', e);
  }
};

export const userSaga = function* root() {
  yield takeLatest(USER_REQUEST_LOGIN, login);
};
