import { put, takeEvery } from 'redux-saga/effects';
import PlaceData from 'src/models/place/placeData';
import { HybridApi } from 'src/services/networking';
import { BaseResponse } from 'src/services/networking/responseModels/BaseListResponse';
import { WorkingPlaceResponse } from './../../../services/networking/responseModels/place/WorkingPlaceResponse';
import {
  GetPlaceDetailActionType,
  getPlaceDetailFailureAction,
  getPlaceDetailSuccessAction,
} from './getPlaceDetailAction';
import { ACTION_GET_PLACE_DETAIL } from './getPlaceDetailTypes';

function* sagaFunction(action: GetPlaceDetailActionType) {
  try {
    const response: BaseResponse<WorkingPlaceResponse> = yield HybridApi.getPlaceDetail(action.requestParam);
    const workingPlaceResponse: WorkingPlaceResponse = response.data;

    yield put(getPlaceDetailSuccessAction(new PlaceData(workingPlaceResponse)));
  } catch (error) {
    yield put(getPlaceDetailFailureAction('Something went wrong!'));
  }
}

export default function* saga() {
  yield takeEvery(ACTION_GET_PLACE_DETAIL, sagaFunction);
}
