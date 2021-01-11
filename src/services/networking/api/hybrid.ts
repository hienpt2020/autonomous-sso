import { authHeader } from '../header';
import { _get as __get, _post as __post, _delete as __delete, _put as __put } from '../request';
import Config from 'react-native-config';

/**
 * @param url: string, required
 * @param params: string, optional
 */
const baseURL = Config.ENDPOINT_WORKING_PlACE;
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

function getListWorkspace() {
  return _get('/profile/workspaces/private');
}

function getListWorkingLayout(workspaceId: number) {
  return _get(`working-layout/${workspaceId}`);
}

function getListWorkingPlaceById(layoutId: number) {
  return _get(`working-place/${layoutId}`);
}

function getListWorkingPlaceByDate(layoutId: number, from: string, to: string) {
  return _get(`working-place-filter/filter-available-by-date/${layoutId}`, { from, to, layoutID: layoutId });
}

export const HybridApi = {
  getListWorkspace,
  getListWorkingLayout,
  getListWorkingPlaceById,
  getListWorkingPlaceByDate,
};
