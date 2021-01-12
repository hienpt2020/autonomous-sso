import { BaseState } from './../../types';
const ACTION_GET_PLACE_DETAIL = 'ACTION_GET_PLACE_DETAIL';
const ACTION_GET_PLACE_DETAIL_SUCCESS = 'ACTION_GET_PLACE_DETAIL_SUCCESS';
const ACTION_GET_PLACE_DETAIL_FAILURE = 'ACTION_GET_PLACE_DETAIL_FAILURE';

export interface GetPlaceDetailState extends BaseState {
  place?: PlaceData;
}

export interface GetPlaceDetailRequest {
  placeId: number;
  mapId: number;
}

export { ACTION_GET_PLACE_DETAIL, ACTION_GET_PLACE_DETAIL_SUCCESS, ACTION_GET_PLACE_DETAIL_FAILURE };
