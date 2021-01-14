import Config from 'react-native-config';
import { authHeader } from '../header';
import { _delete as __delete, _get as __get, _post as __post, _put as __put } from '../request';
import { DEFAULT_REQUEST_LIMIT } from './../../../common/constant';

/**
 * @param url: string, required
 * @param params: string, optional
 */
const baseURL = Config.ENDPOINT_DEVICE;
function _get(url: string, params?: object) {
    return __get(baseURL, url, authHeader(), params);
}
function _post(url: string, body?: object) {
    return __post(baseURL, url, authHeader(), body ? body : {});
}
function _delete(url: string, params?: object) {
    return __delete(baseURL, url, authHeader(), params);
}
function _put(url: string, body: object, params?: object) {
    return __put(baseURL, url, authHeader(), body, params);
}

/**List all API below */

function getMqttInfo() {
    return _get('/master/get-info');
}

export const DeviceApi = {
    getMqttInfo,
};
