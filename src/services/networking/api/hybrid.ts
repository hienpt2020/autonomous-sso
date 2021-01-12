import { GetPlaceDetailRequest } from './../../../redux/workplace/getPlaceDetail/getPlaceDetailTypes';
import { BookingResponse } from 'src/services/networking/responseModels/booking/BookingResponse';
import { DEFAULT_REQUEST_LIMIT } from './../../../common/constant';
import { authHeader } from '../header';
import { _get as __get, _post as __post, _delete as __delete, _put as __put } from '../request';
import Config from 'react-native-config';
import { BaseResponse, BaseListResponse } from '../responseModels/BaseListResponse';
import PlaceData from 'src/models/place/placeData';

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

const getBookingHistory = (
  isAdmin: boolean,
  workingSpaceId: number,
  page: number,
): Promise<BaseResponse<BaseListResponse<BookingResponse[]>>> => {
  const resquestParam = {
    limit: DEFAULT_REQUEST_LIMIT,
    page: page,
    workingSpaceId: workingSpaceId,
  };

  return isAdmin
    ? _get(`${baseURL}/working-place-booking/admin`, resquestParam)
    : _get(`${baseURL}/working-place-booking/user`, resquestParam);
};

const getPlaceDetail = async (
  param: GetPlaceDetailRequest = { mapId: 0, placeId: 0 },
): Promise<BaseResponse<PlaceData>> => {
  return _get(baseURL + '/working-place/' + param.mapId + '/place/' + param.placeId);
};

export const HybridApi = {
  getListWorkspace,
  getListWorkingLayout,
  getListWorkingPlaceById,
  getListWorkingPlaceByDate,
  getBookingHistory,
  getPlaceDetail,
};
