import { call, put, all } from 'redux-saga/effects';
import { Preference } from 'src/common/preference';
import {
    createRequestEndAction,
    createRequestErrorAction,
    createRequestStartAction,
} from 'src/redux/request/requestAction';
import { createClearUserProfileAction } from 'src/redux/user/userAction';
import { NetworkingConfig } from 'src/services/networking';
import { requestLogout } from './apiUser';

export function* requestLogoutAction(action: any) {
    yield put(createRequestStartAction());
    try {
        yield all([
            call(requestLogout),
            put(createClearUserProfileAction()),
            call(Preference.saveAccessToken, '')]);
        NetworkingConfig.putCommonHeaderWithToken('');
    } catch (error) {
        console.log(error);
        yield put(createRequestErrorAction(error));
    }

    yield put(createRequestEndAction());
}
