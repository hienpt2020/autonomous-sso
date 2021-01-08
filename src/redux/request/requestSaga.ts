// Service
import { takeLatest } from 'redux-saga/effects';
import { SSOApi } from 'src/services/networking';
const testSaga = function* testSaga() {
  try {
    const response = yield SSOApi.login( 'kien.q@autonomous.nyc', '123456','vflozjmgtirdrppu');
    
    console.log('@Test login :', response);
  } catch (e) {
    console.log('@@Error', e);
  }
};

export const requestSaga = function* root() {
  yield takeLatest('TEST_REQUEST', testSaga);
};
