import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';
import { call, put } from 'redux-saga/effects';
import {
    createRequestEndAction,
    createRequestErrorMessageAction,
    createRequestStartAction,
} from 'src/redux/request/requestAction';
import { navigate } from 'src/routers/rootNavigation';
import { RouteName } from 'src/routers/routeName';
import { NetworkingConfig, SSOApi } from 'src/services/networking';
import { fetchUserData } from './fetchUserData';

const KEY_ACCESS_TOKEN = 'KEY_ACCESS_TOKEN';
async function validateToken(token: string) {
    try {
        const response = await SSOApi.validateToken(token);
        return { active: response.data.active, response: response };
    } catch (error) {
        return {
            active: false,
            response: error,
        };
    }
}

async function retrieveUserToken() {
    try {
        const token = await AsyncStorage.getItem(KEY_ACCESS_TOKEN);
        return { token };
    } catch (error) {
        return { error };
    }
}

export function* validateUserToken(action: any) {
    yield put(createRequestStartAction());
    const { token } = yield call(retrieveUserToken);
    if (token) {
        //check usertoken valid
        const { active, error } = yield call(validateToken, token);
        if (active) {
            //inject default bearer token to axios
            NetworkingConfig.putCommonHeaderWithToken(token);
            yield call(fetchUserData);
        } else {
            const message = i18next.t('common.error_message');
            yield put(createRequestErrorMessageAction(message));
        }
    } else {
        navigate(RouteName.LOGIN, {});
    }
    yield put(createRequestEndAction());
}
