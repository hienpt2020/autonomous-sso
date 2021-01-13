import Config from 'react-native-config';
import { authHeader } from '../header';
import { _delete as __delete, _get as __get, _post as __post, _put as __put } from '../request';
import { DEFAULT_REQUEST_LIMIT } from './../../../common/constant';

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

const getBookingHistory = (isAdmin: boolean, workingSpaceId: number, page: number) => {
  const resquestParam = {
    limit: DEFAULT_REQUEST_LIMIT * 2,
    page: page,
    workingSpaceId: workingSpaceId,
  };

  return isAdmin
    ? _get(`${baseURL}/working-place-booking/admin`, resquestParam)
    : _get(`${baseURL}/working-place-booking/user`, resquestParam);
};

const getPlaceDetail = async (mapId: number, placeId: number) => {
  return _get(baseURL + '/working-place/' + mapId + '/place/' + placeId);
};

const bookPlace = (workPlaceId: number, dateFrom: Date, dateTo: Date) => {
  const from = dateFrom;
  from.setSeconds(0);
  from.setMilliseconds(0);

  const to = dateTo;
  to.setSeconds(0);
  to.setMilliseconds(0);

  return _post(`${baseURL}/working-place-booking/book`, {
    working_place_id: workPlaceId,
    from: from.toISOString(),
    to: to.toISOString(),
  });
};

export const HybridApi = {
  getListWorkspace,
  getListWorkingLayout,
  getListWorkingPlaceById,
  getListWorkingPlaceByDate,
  getBookingHistory,
  getPlaceDetail,
  bookPlace,
};
