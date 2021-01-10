// Service
import { takeLatest, call, put } from 'redux-saga/effects';
import { createRequestStartAction, createRequestErrorAction, createRequestSuccessAction, createRequestEndAction } from 'src/redux/request/requestAction';
import { RequestLoginAction, createInvalidTokenAction } from './userAction';
import { USER_REQUEST_LOGIN, SET_INVALID_USER_TOKEN, VALIDATE_USER_TOKEN } from './userType';
import { SSOApi } from 'src/services/networking';
import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY_ACCESS_TOKEN = 'USER_TOKEN';
async function requestLogin(user: string, password: string) {

  try {
    const response = await SSOApi.login(user, password);
    const { access_token } = response.data;
    AsyncStorage.setItem(KEY_ACCESS_TOKEN, access_token);
    const response_1 = ({ response });
    return ({ response });
  } catch (error) {
    return ({ error });
  }
}
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
async function retrieveUserProfile(token: string) {
  try {
    const userProfile = await SSOApi.retrieveUserProfile(token)
    return ({ userProfile })
  } catch (error) {
    return ({ error })
  }
}
function* login(action: RequestLoginAction) {
  yield put(createRequestStartAction())
  const { response, error } = yield call(requestLogin, action.payload.email, action.payload.password);
  console.log(action.payload, response, error)
  if (response) {
    yield put(createRequestSuccessAction(response))
  } else {
    yield put(createRequestErrorAction(error))
  }
  yield put(createRequestEndAction())
};

function* autoLoin() {
  yield put(createRequestStartAction())
  const { token, error } = yield call(retrieveUserToken);
  console.log("check token valid", "token: ", token)
  /*check token is valid first (not empty & check valid at server)
  if yes => get user profile 
  if no => beck to login. 
  */


  if (token) {
    //check usertoken valid
    const { active, response } = yield call(validateToken, token);
    if (active) {
      // user is auto logged in 

      //yield put(createValidateTokenAction())
    } else {
      console.log(`update store `)
      yield put(createInvalidTokenAction())
    }
  } else {

  }
  yield put(createRequestEndAction())
}

export const userSaga = function* root() {
  yield takeLatest(VALIDATE_USER_TOKEN, autoLoin);
  yield takeLatest(USER_REQUEST_LOGIN, login);
};
