import { authHeader } from '../header';
import { _get as __get, _post as __post, _delete as __delete, _put as __put } from '../request';
import Config from 'react-native-config';

/**
 * @param url: string, required
 * @param params: string, optional
 */
const baseURL = Config.ENDPOINT_WORKING_PlACE;
function* get(url: string, params?: object) {
  return yield* __get(baseURL, url, authHeader, params);
}
function* post(url: string, body?: object) {
  return yield* __post(baseURL, url, authHeader(), body ? body : {});
}
function* _delete(url: string, params?: object) {
  return yield* __delete(baseURL, url, authHeader(), params);
}
function* put(url: string, body: object, params?: object) {
  return yield* __put(baseURL, url, authHeader(), body, params);
}

/**List all API below */

function* getListWorkspace() {
  return yield* get('/profile/workspaces/private/');
}

function* getListWorkingLayout(placeId: string) {
  return yield* get(`working-layout/${placeId}`);
}

function* getListWorkingPlaceById(placeId: string) {
  return yield* get(`working-layout/${placeId}`);
}

function* getListWorkingPlaceByDate(layoutId: string, from: string, to: string) {
  return yield* get(`working-place-filter/filter-available-by-date/${layoutId}`, { from, to, layoutID: layoutId });
}

export const HybridApi = {
  getListWorkspace,
  getListWorkingLayout,
  getListWorkingPlaceById,
  getListWorkingPlaceByDate,
};
