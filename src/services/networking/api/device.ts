import Config from 'react-native-config';
import { authHeader } from '../header';
import { _delete as __delete, _get as __get, _post as __post, _put as __put } from '../request';

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

function getPersonalDevices() {
    return _get('/devices/personal');
}

function createPersonalDevice(hubId: string, faChannel: string, fdChannel: string) {
    return _post('/devices/personal', { hub_id: hubId, FAChannel: faChannel, FDChannel: fdChannel });
}

function generatePersonalDeviceCode() {
    return _get('/devices/code-generator?type=personal');
}

function controlStand(hubId: string, workingLayoutId: string) {
    return _put('/devices/modes/stand', { hub_id: hubId, working_layout_id: workingLayoutId });
}

function controlSit(hubId: string, workingLayoutId: string) {
    return _put('/devices/modes/sit', { hub_id: hubId, working_layout_id: workingLayoutId });
}

function gotoHeight(height: number, hubId: string, workingLayoutId: string) {
    return _put('/master/goto-height', {
        device: { hub_id: hubId, working_layout_id: workingLayoutId },
        height: `${height}`,
    });
}

function removeDevice(hubId: string) {
    return _delete(`/personal/${hubId}`);
}

export const DeviceApi = {
    getMqttInfo,
    controlDown,
    controlUp,
    controlStop,
    getDeviceInfo,
    getDevices,
    getPersonalDevices,
    createPersonalDevice,
    generatePersonalDeviceCode,
    controlStand,
    controlSit,
    gotoHeight,
    removeDevice,
};
