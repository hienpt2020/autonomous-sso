import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { createRequestStartAction, createRequestErrorAction, createRequestEndAction } from 'src/redux/request/requestAction';
import { createLoginAction } from '../userAction'
import { requestLogin, retrieveUserProfile } from './apiUser';

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
            yield put(createRequestErrorAction(error));
        }

    } else {
        yield put(createRequestErrorAction(error))
    }
    yield put(createRequestEndAction())
};