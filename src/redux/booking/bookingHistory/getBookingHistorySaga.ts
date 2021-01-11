import { REQUEST_ERROR, REQUEST_SUCCESS } from './../../request/requestType';
import { RequestStartAction } from './../../request/requestAction';
import { DEFAULT_REQUEST_LIMIT } from './../../../common/constant';
import { BaseListResponse } from '../../../services/networking/modal/BaseListResponse';
import axios, { AxiosResponse } from 'axios';
import { put, takeEvery } from 'redux-saga/effects';
import { ACTION_GET_BOOKING_HISTORY } from './getBookingHistoryTypes';

import {
  getBookingHistoryFailureAction,
  getBookingHistorySuccessAction,
  IGetBookingHistoryActionType,
} from './getBookingHistoryAction';
import { BookingData } from 'src/screens/booking/types';
import { Booking } from 'src/services/networking/modal/booking/Booking';
import { REQUEST_START, REQUEST_END } from 'src/redux/request/requestType';

function* sagaFunction(action: IGetBookingHistoryActionType) {
  try {
    yield put({
      type: REQUEST_START,
    });

    const res: AxiosResponse<BaseListResponse<Booking[]>> = yield getBookingHistory(
      action.requestParam.isAdmin,
      action.requestParam.workingSpaceId,
      action.requestParam.page,
    );

    const bookings: Booking[] = res.data.data.items;
    const bookingDatas = bookings.map((booking) => new BookingData(booking));

    yield put(getBookingHistorySuccessAction(bookingDatas));

    yield put({
      type: REQUEST_SUCCESS,
    });
  } catch (error) {
    yield put({
      type: REQUEST_ERROR,
    });
    yield put(getBookingHistoryFailureAction('Something went wrong!'));
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export default function* saga() {
  yield takeEvery(ACTION_GET_BOOKING_HISTORY, sagaFunction);
}

const baseURL = 'http://dev-working-place-api.autonomous.ai/place-api/v1';

const getBookingHistory = (isAdmin: boolean, workingSpaceId: number, page: number): Promise<AxiosResponse<any>> => {
  const resquestParam = {
    limit: DEFAULT_REQUEST_LIMIT,
    page: page,
    workingSpaceId: workingSpaceId,
  };
  axios.defaults.headers.common[
    'Authorization'
  ] = `Bearer ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdXRob3JpemVkIjp0cnVlLCJleHAiOjE2MTI2NjM4NzksImlkIjozMjgwNDN9.lQ_zEZxPps7gazThLzY25W4llr7_5zlXKHdn-YhC8Tc'}`;

  return isAdmin
    ? axios.get(`${baseURL}/working-place-booking/admin`, {
        params: resquestParam,
      })
    : axios.get(`${baseURL}/working-place-booking/user`, {
        params: resquestParam,
      });
};
