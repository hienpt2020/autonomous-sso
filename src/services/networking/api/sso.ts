import { authHeader } from '../header';
import { _get as __get, _post as __post, _delete as __delete, _put as __put } from '../request';
import Config from 'react-native-config';

/**
 * @param url: string, required
 * @param params: string, optional
 */
const baseURL = Config.ENDPOINT_SSO
function* get(url: string, params?: object) {
    return yield* __get(baseURL, url, authHeader, params)
}
function* post(url: string, body?: object) {
    return yield* __post(baseURL, url, authHeader(), body ? body : {})
}
function* _delete(url: string, params?: object) {
    return yield* __delete(baseURL, url, authHeader(), params)
}
function* put(url: string, body: object, params?: object) {
    return yield* __put(baseURL, url, authHeader(), body, params)
}
/**List all API below */
function* login(email: string, password: string, client_id: string){
    return yield* post('/auth/login', {email, password, client_id})
}


export const SSOApi = { login }

