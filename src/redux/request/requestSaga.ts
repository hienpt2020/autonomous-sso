// Service
import { takeLatest, call } from 'redux-saga/effects';
import { SSOApi } from 'src/services/networking';
const testSaga = function* testSaga(action: object) {
    try {
        console.log(action);
        const response = yield call(SSOApi.login, 'kien.q@autonomous.nyc', '123456');

        console.log('@Test login :', response);
    } catch (e) {
        console.log('@@Error', e);
    }
};

export const requestSaga = function* root() {
    yield takeLatest('LOGIN', testSaga);
};
