import {
  ACTION_GET_BOOKING_HISTORY,
  ACTION_GET_BOOKING_HISTORY_SUCCESS,
  ACTION_GET_BOOKING_HISTORY_FAILURE,
} from './getBookingHistoryTypes';
import { BookingData } from 'src/screens/booking/types';
import { IGetBookingHistory } from './getBookingHistoryTypes';

interface IGetBookingHistoryActionType {
  type: typeof ACTION_GET_BOOKING_HISTORY;
  requestParam: IGetBookingHistory;
}

interface IGetBookingHistorySuccessActionType {
  type: typeof ACTION_GET_BOOKING_HISTORY_SUCCESS;
  payload: BookingData[];
}

interface IGetBookingHistoryFailureActionType {
  type: typeof ACTION_GET_BOOKING_HISTORY_FAILURE;
  error: string;
}

// type IGetBookingHistoryType =
//   | IGetBookingHistoryActionType
//   | IGetBookingHistorySuccessActionType
//   | IGetBookingHistoryFailureActionType;

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

export type { IGetBookingHistoryActionType, IGetBookingHistorySuccessActionType, IGetBookingHistoryFailureActionType };

export { getBookingHistoryAction, getBookingHistorySuccessAction, getBookingHistoryFailureAction };
