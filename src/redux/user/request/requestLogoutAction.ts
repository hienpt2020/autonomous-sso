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
        console.log("step1")
        yield call(requestLogout);
        console.log("step2")
        yield call(AsyncStorage.setItem, KEY_ACCESS_TOKEN, '');
        console.log("step3")
        axios.defaults.headers.common["Authorization"] = ``;
        console.log("step4")
        yield put(createLogoutAction())
    } catch (error) {
        console.log(error)
        yield put(createRequestErrorAction(error))
    }

    yield put(createRequestEndAction())
};