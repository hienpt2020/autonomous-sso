import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { createRequestStartAction, createRequestErrorMessageAction, createRequestEndAction } from 'src/redux/request/requestAction';
import { createLoginAction } from '../userAction'
import { requestLogin, retrieveUserProfile } from './apiUser';
import _ from 'lodash'
import i18next from 'i18next'

export function* requestLoginAction(action: any) {
    yield put(createRequestStartAction())
    const { response, error } = yield call(requestLogin, action.payload.email, action.payload.password);
    if (response) {
        const token = response.data.access_token
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        // user is auto logged in 
        const { userProfile, error } = yield call(retrieveUserProfile, token);
        if (userProfile) {
            //update store 
            userProfile.accessToken = token;
            yield put(createLoginAction(userProfile));
        } else {
            const message = _.get(error, 'errorMessage', i18next.t('common.error'))
            yield put(createRequestErrorMessageAction(message));
        }

    } else {
        const message = _.get(error, 'errorMessage', i18next.t('common.error'))
        yield put(createRequestErrorMessageAction(message))
    }
    yield put(createRequestEndAction())
};