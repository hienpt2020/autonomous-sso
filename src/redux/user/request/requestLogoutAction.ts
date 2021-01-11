import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { createRequestStartAction, createRequestEndAction, createRequestErrorAction } from 'src/redux/request/requestAction';
import { createLogoutAction } from 'src/redux/user/userAction';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_ACCESS_TOKEN } from '../userType';
import { requestLogout } from './apiUser';

export function* requestLogoutAction(action: any) {
    yield put(createRequestStartAction())
    try {
        yield call(requestLogout);
        yield call(AsyncStorage.setItem, KEY_ACCESS_TOKEN, '');
        axios.defaults.headers.common["Authorization"] = ``;
        yield put(createLogoutAction())
    } catch (error) {
        console.log(error)
        yield put(createRequestErrorAction(error))
    }

    yield put(createRequestEndAction())
};