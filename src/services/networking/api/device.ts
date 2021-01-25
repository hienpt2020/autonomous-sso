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
    return _get('/master/set-up-hub-device');
}

function controlDown(hubId: string, workingLayoutId: string) {
    return _put('/master/down', { hub_id: hubId, working_layout_id: workingLayoutId });
}

function controlUp(hubId: string, workingLayoutId: string) {
    return _put('/master/up', { hub_id: hubId, working_layout_id: workingLayoutId });
}

function controlStop(hubId: string, workingLayoutId: string) {
    return _put('/master/stop', { hub_id: hubId, working_layout_id: workingLayoutId });
}

function getDeviceInfo(hubId: string, workingLayoutId: string) {
    return _get('/master/info', { hub_id: hubId, working_layout_id: workingLayoutId });
}

function getDevices() {
    // let query = `?is_checkin=${isCheckin}`;
    // if (from && to) {
    //     query += `&from=${from}&to=${to}`;
    // }
    return _get('/devices/control/now');
}

export const DeviceApi = {
    getMqttInfo,
    controlDown,
    controlUp,
    controlStop,
    getDeviceInfo,
    getDevices,
};
