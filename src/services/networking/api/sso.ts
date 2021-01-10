import { authHeader } from '../header';
import { _get as __get, _post as __post, _delete as __delete, _put as __put } from '../request';
import Config from 'react-native-config';

/**
 * @param url: string, required
 * @param params: string, optional
 */
const baseURL = Config.ENDPOINT_SSO
function _get(url: string, params?: object) {
    return __get(baseURL, url, authHeader(), params)
}
function _post(url: string, body?: object) {
    return __post(baseURL, url, authHeader(), body ? body : {})
}
function _delete(url: string, params?: object) {
    return __delete(baseURL, url, authHeader(), params)
}
function _put(url: string, body: object, params?: object) {
    return __put(baseURL, url, authHeader(), body, params)
}
const CLIENT_ID = "vflozjmgtirdrppu"
/**List all API below */
function login(email: string, password: string){
    return _post('/auth/login', {email, password, CLIENT_ID})
}
function validateToken(token: string){
    return _post('/auth/introspect', {token, CLIENT_ID})
}
function retrieveUserProfile(token: string){
    return _get('/me/profile')
}


export const SSOApi = { login, validateToken, retrieveUserProfile }

