// Service
import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_APP_INITIAL } from './appType';
import { validateUserToken } from 'src/redux/user/request/requestValidateUserToken';
import { createAppFinishInitialAction } from './appAction';

function* requestAppInitial() {
    yield call(validateUserToken);
    yield put(createAppFinishInitialAction());
}

export function createRequestAppInitial(): object {
    return {
        type: REQUEST_APP_INITIAL,
    };
}
export const appSaga = function* root() {
    yield takeLatest(REQUEST_APP_INITIAL, requestAppInitial);
};
