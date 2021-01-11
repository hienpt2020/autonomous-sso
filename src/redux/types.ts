import { GetBookingHistoryState } from './booking/bookingHistory/getBookingHistoryTypes';
import { RequestState } from './request/requestType';

export interface RootState {
  requestReducer: RequestState;
  getBookingHistoryReducer: GetBookingHistoryState;
}
