import i18next from 'i18next';
import _ from 'lodash';
import { call, put } from 'redux-saga/effects';
import { Preference } from 'src/common/preference';
import { showPopupAction } from 'src/redux/app/appAction';
import {
    createRequestEndAction,
    createRequestErrorMessageAction,
    createRequestStartAction,
} from 'src/redux/request/requestAction';
import store from 'src/redux/store';
import { requestValidateAccessTokenAction } from '../userSaga';
import { requestRegister } from './apiUser';

export function* requestRegisterAction(action: any) {
    yield put(createRequestStartAction());
    const { response, error } = yield call(
        requestRegister,
        action.payload.email,
        action.payload.password,
        action.payload.confirmPassword,
        action.joinWorkSpaceToken,
    );
    if (response) {
        if (action.joinWorkSpaceToken) {
            const access_token = response.data?.access_token;
            Preference.saveAccessToken(access_token).then(() => {
                store.dispatch(requestValidateAccessTokenAction());
            });
        } else {
            const message = i18next.t('register.verify_email');
            const title = i18next.t('register.register_success');
            yield put(
                showPopupAction(title, message, null, [
                    {
                        title: i18next.t('common.ok'),
                    },
                ]),
            );
        }
    } else {
        const message = _.get(error, 'errorMessage', i18next.t('common.error_message'));
        yield put(createRequestErrorMessageAction(message));
    }
    yield put(createRequestEndAction());
}
