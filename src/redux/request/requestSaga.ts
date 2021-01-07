// Service
import { takeLatest } from 'redux-saga/effects';
import { apiPost } from '../../services/networking';
import Config from 'react-native-config';
const testSaga = function* testSaga() {
  try {
    const response = yield apiPost(Config.ENDPOINT_SSO, '/auth/login', {
      email: 'kien.q@autonomous.nyc',
      password: '123456',
      client_id: 'vflozjmgtirdrppu',
    });
    console.log('@Test login:', response);
  } catch (e) {
    console.log('@@Error', e);
  }
};

export const requestSaga = function* root() {
  yield takeLatest('TEST_REQUEST', testSaga);
};
