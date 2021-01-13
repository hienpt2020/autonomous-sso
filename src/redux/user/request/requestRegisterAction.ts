import _ from 'lodash';
import { call, put } from 'redux-saga/effects';
import i18next from 'i18next';
import { createRequestEndAction, createRequestErrorMessageAction, createRequestStartAction } from 'src/redux/request/requestAction';
import { requestRegister } from './apiUser';

export function* requestRegisterAction(action: any) {
    yield put(createRequestStartAction())
    const { response, error } = yield call(requestRegister, action.payload.email, action.payload.password, action.payload.confirmPassword);
    if (response) {
        const message = i18next.t('register.verify_email')
        yield put(createRequestErrorMessageAction(message))
    } else {
        const message = _.get(error, 'errorMessage', i18next.t("common.error"))
        yield put(createRequestErrorMessageAction(message))
    }
    yield put(createRequestEndAction())
};