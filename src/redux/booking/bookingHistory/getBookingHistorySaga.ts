import { AxiosResponse } from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { REQUEST_START } from 'src/redux/request/requestType';

import { REQUEST_ERROR, REQUEST_SUCCESS } from './../../request/requestType';
import {
  getBookingHistoryFailureAction,
  getBookingHistorySuccessAction,
  IGetBookingHistoryActionType,
} from './getBookingHistoryAction';
import { ACTION_GET_BOOKING_HISTORY } from './getBookingHistoryTypes';
import { BookingResponse } from 'src/services/networking/responseModels/booking/BookingResponse';
import { BaseResponse, BaseListResponse } from 'src/services/networking/responseModels/BaseListResponse';
import { HybridApi } from 'src/services/networking';
import { BookingData } from 'src/models/booking/bookingData';
import reactotron from 'src/config/configReactoron';

function* sagaFunction(action: IGetBookingHistoryActionType) {
  try {
    const res: BaseResponse<BaseListResponse<BookingResponse[]>> = yield HybridApi.getBookingHistory(
      action.requestParam.isAdmin,
      action.requestParam.workingSpaceId,
      action.requestParam.page,
    );

    const bookings: BookingResponse[] = res.data.items;
    const bookingDatas = bookings.map((booking) => new BookingData(booking));

    yield put(getBookingHistorySuccessAction(bookingDatas));
  } catch (error) {
    yield put(getBookingHistoryFailureAction('Something went wrong!'));
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* saga() {
  yield takeEvery(ACTION_GET_BOOKING_HISTORY, sagaFunction);
}
