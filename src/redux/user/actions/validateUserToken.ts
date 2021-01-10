import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { SSOApi } from 'src/services/networking';
import { createLoginAction, createLogoutAction } from '../userAction'
import { createRequestStartAction, createRequestErrorAction, createRequestEndAction } from 'src/redux/request/requestAction';
import { retrieveUserProfile } from './apiUser'


const KEY_ACCESS_TOKEN = 'KEY_ACCESS_TOKEN';
async function validateToken(token: string) {
    try {
        const response = await SSOApi.validateToken(token);
        return ({ active: response.data.active, response: response });
    } catch (error) {
        return ({
            active: false,
            response: error
        });
    }
}

async function retrieveUserToken() {
    try {
        const token = await AsyncStorage.getItem(KEY_ACCESS_TOKEN);
        return ({ token });
    } catch (error) {
        return ({ error });
    }
}

export function* validateUserToken(action: any) {
    yield put(createRequestStartAction())
    const { token, error } = yield call(retrieveUserToken);

    if (token) {
        //check usertoken valid
        const { active } = yield call(validateToken, token);
        if (active) {
            //inject default bearer token to axios
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
            // user is auto logged in 
            const { userProfile, error } = yield call(retrieveUserProfile, token);
            if (userProfile) {
                //update store 
                userProfile.accessToken = token;
                yield put(createLoginAction(userProfile));
            } else {
                //create invalid token & require user re authenticate
                yield put(createRequestErrorAction(error));
            }
        }
    } else {
        yield put(createRequestErrorAction(error))
    }
    yield put(createRequestEndAction())
};