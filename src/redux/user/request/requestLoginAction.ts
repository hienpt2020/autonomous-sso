import i18next from 'i18next';
import _ from 'lodash';
import { call, put } from 'redux-saga/effects';
import {
    createRequestEndAction,
    createRequestErrorMessageAction,
    createRequestStartAction,
} from 'src/redux/request/requestAction';
import { NetworkingConfig } from 'src/services/networking';
import { requestLogin } from './apiUser';
import { fetchUserData } from './fetchUserData';

export function* requestLoginAction(action: any) {
    yield put(createRequestStartAction());
    const { response, error } = yield call(requestLogin, action.payload.email, action.payload.password);
    if (response) {
        const token = response.data.access_token;
        NetworkingConfig.putCommonHeaderWithToken(token);
        yield call(fetchUserData);
    } else {
        const message = _.get(error, 'errorMessage', i18next.t('common.error_message'));
        yield put(createRequestErrorMessageAction(message));
    }
    yield put(createRequestEndAction());
}
