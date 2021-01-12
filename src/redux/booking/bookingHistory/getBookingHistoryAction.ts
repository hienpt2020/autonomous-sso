const ACTION_GET_BOOKING_HISTORY = 'ACTION_GET_BOOKING_HISTORY';
const ACTION_GET_BOOKING_HISTORY_SUCCESS = 'ACTION_GET_BOOKING_HISTORY_SUCCESS';
const ACTION_GET_BOOKING_HISTORY_FAILURE = 'ACTION_GET_BOOKING_HISTORY_FAILURE';
import { BookingData } from 'src/models/booking/bookingData';
import { IGetBookingHistory } from './getBookingHistoryTypes';

type IGetBookingHistoryActionType = {
  type: typeof ACTION_GET_BOOKING_HISTORY;
  requestParam: IGetBookingHistory;
};

type IGetBookingHistorySuccessActionType = {
  type: typeof ACTION_GET_BOOKING_HISTORY_SUCCESS;
  payload: BookingData[];
};

type IGetBookingHistoryFailureActionType = {
  type: typeof ACTION_GET_BOOKING_HISTORY_FAILURE;
  error: string;
};

type IGetBookingHistoryType =
  | IGetBookingHistoryActionType
  | IGetBookingHistorySuccessActionType
  | IGetBookingHistoryFailureActionType;

const getBookingHistoryAction = (requestParam: IGetBookingHistory): IGetBookingHistoryActionType => ({
  type: ACTION_GET_BOOKING_HISTORY,
  requestParam,
});

const getBookingHistorySuccessAction = (payload: BookingData[]): IGetBookingHistorySuccessActionType => ({
  type: ACTION_GET_BOOKING_HISTORY_SUCCESS,
  payload,
});

const getBookingHistoryFailureAction = (error: string): IGetBookingHistoryFailureActionType => ({
  type: ACTION_GET_BOOKING_HISTORY_FAILURE,
  error,
});

export type {
  IGetBookingHistoryActionType,
  IGetBookingHistorySuccessActionType,
  IGetBookingHistoryFailureActionType,
  IGetBookingHistoryType,
};

export { getBookingHistoryAction, getBookingHistorySuccessAction, getBookingHistoryFailureAction };
