import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import _ from 'lodash';
import { call, put } from 'redux-saga/effects';
import { createRequestEndAction, createRequestErrorMessageAction, createRequestStartAction } from 'src/redux/request/requestAction';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { SSOApi, NetworkingConfig } from 'src/services/networking';
import { createSetUserProfileAction } from '../userAction';
import { retrieveUserProfile } from './apiUser';



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
    const { token } = yield call(retrieveUserToken);
    if (token) {
        //check usertoken valid
        const { active, error } = yield call(validateToken, token);
        if (active) {
            //inject default bearer token to axios
            NetworkingConfig.putCommonHeaderWithToken(token)
            // user is auto logged in 
            const { userProfile, error } = yield call(retrieveUserProfile, token);
            if (userProfile) {
                //update store 
                userProfile.accessToken = token;
                yield put(createSetUserProfileAction(userProfile));
            } else {
                //create invalid token & require user re authenticate
                const message = _.get(error, 'errorMessage', i18next.t("common.error"))
                yield put(createRequestErrorMessageAction(message));
            }
        } else {
            const message = i18next.t("common.error")
            yield put(createRequestErrorMessageAction(message));
        }
    } else {
        navigate(RouteName.INTRO, {})
    }
    yield put(createRequestEndAction())
};