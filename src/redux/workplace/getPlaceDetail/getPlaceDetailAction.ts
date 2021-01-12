import {
  ACTION_GET_PLACE_DETAIL,
  ACTION_GET_PLACE_DETAIL_SUCCESS,
  ACTION_GET_PLACE_DETAIL_FAILURE,
  GetPlaceDetailRequest,
} from './getPlaceDetailTypes';

interface GetPlaceDetailActionType {
  type: typeof ACTION_GET_PLACE_DETAIL;
  requestParam: GetPlaceDetailRequest;
}

interface GetPlaceDetailSuccessActionType {
  type: typeof ACTION_GET_PLACE_DETAIL_SUCCESS;
  payload: PlaceData;
}

interface GetPlaceDetailFailureActionType {
  type: typeof ACTION_GET_PLACE_DETAIL_FAILURE;
  error: string;
}

type GetPlaceDetailType = GetPlaceDetailActionType | GetPlaceDetailSuccessActionType | GetPlaceDetailFailureActionType;

const getPlaceDetailAction = (requestParam: GetPlaceDetailRequest): GetPlaceDetailActionType => ({
  type: ACTION_GET_PLACE_DETAIL,
  requestParam,
});

const getPlaceDetailSuccessAction = (payload: PlaceData): GetPlaceDetailSuccessActionType => ({
  type: ACTION_GET_PLACE_DETAIL_SUCCESS,
  payload,
});

const getPlaceDetailFailureAction = (error: string): GetPlaceDetailFailureActionType => ({
  type: ACTION_GET_PLACE_DETAIL_FAILURE,
  error,
});

export type { GetPlaceDetailType, GetPlaceDetailActionType };

export { getPlaceDetailAction, getPlaceDetailSuccessAction, getPlaceDetailFailureAction };
