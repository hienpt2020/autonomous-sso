import { call, put } from 'redux-saga/effects';
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
        yield call(requestLogout);
        yield call(Preference.saveAccessToken, '');
        NetworkingConfig.putCommonHeaderWithToken('');
        yield put(createClearUserProfileAction());
    } catch (error) {
        console.log(error);
        yield put(createRequestErrorAction(error));
    }

    yield put(createRequestEndAction());
}
