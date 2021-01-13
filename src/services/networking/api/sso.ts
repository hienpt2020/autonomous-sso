import Config from 'react-native-config';
import reactotron from 'src/config/configReactoron';
import { authHeader } from '../header';
import { _delete as __delete, _get as __get, _post as __post, _put as __put } from '../request';

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
function login(email: string, password: string) {
    return _post('/auth/login', { email, password, CLIENT_ID })
}
function logout() {
    return _get('/auth/logout')
}
function validateToken(token: string) {
    return _post('/auth/introspect', { token, CLIENT_ID })
}
function retrieveUserProfile() {
    return _get('/me/profile')
}
function activeAccount(token: string) {
    return _post('/auth/activate', { token })
}

function forgotPassword(email: string) {
    return _post(`/auth/forgot-password`, { email })
}

function resetPassword(token: string, password: string) {
    return _post(`/auth/reset-forgot-password`, { token, password })
}

function register(email: string, password: string, confirmPassword: string) {
    reactotron.log(email, password, confirmPassword)
    return _post('/auth/register', {
        email,
        password,
        confirm_password: confirmPassword
    })
}



export const SSOApi = {
    forgotPassword,
    login,
    logout,
    validateToken,
    retrieveUserProfile,
    activeAccount,
    register, 
    resetPassword, 
}

