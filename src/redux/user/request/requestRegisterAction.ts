import _ from 'lodash';
import { call, put } from 'redux-saga/effects';
import i18next from 'i18next';
import {
    createRequestEndAction,
    createRequestErrorMessageAction,
    createRequestStartAction,
} from 'src/redux/request/requestAction';
import { requestRegister } from './apiUser';
import { showPopup } from 'src/components';

export function* requestRegisterAction(action: any) {
    yield put(createRequestStartAction());
    const { response, error } = yield call(
        requestRegister,
        action.payload.email,
        action.payload.password,
        action.payload.confirmPassword,
    );
    if (response) {
        const message = i18next.t('register.verify_email');
        const title = i18next.t('register.register_success');
        showPopup(title, message, null, [
            {
                title: i18next.t('common.ok'),
            },
        ]);
    } else {
        const message = _.get(error, 'errorMessage', i18next.t('common.error_message'));
        yield put(createRequestErrorMessageAction(message));
    }
    yield put(createRequestEndAction());
}
