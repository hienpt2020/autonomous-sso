import { SSOApi } from 'src/services/networking';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { KEY_ACCESS_TOKEN } from '../userType';

async function retrieveUserProfile(token: string) {
  try {
    const response = await SSOApi.retrieveUserProfile()
    return ({
      userProfile: response.data,
      status: response.status,
    })
  } catch (error) {
    return (error)
  }
}

async function requestLogin(user: string, password: string) {

  try {
    const response = await SSOApi.login(user, password);
    const { access_token } = response.data;
    AsyncStorage.setItem(KEY_ACCESS_TOKEN, access_token);
    return ({ response });
  } catch (error) {
    return ({ error });
  }
}

async function requestLogout() {
  try {
    const response = await SSOApi.logout();
    return ({ response });
  } catch (error) {
    return ({ error });
  }
}
export { requestLogin, retrieveUserProfile, requestLogout }
export const apiUser = { requestLogin, retrieveUserProfile, requestLogout } 