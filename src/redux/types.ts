import { GetBookingHistoryState } from './booking/bookingHistory/getBookingHistoryTypes';
import { RequestState } from './request/requestType';
import { UserState } from './user/userType';
import { GetPlaceDetailState } from './workplace/getPlaceDetail/getPlaceDetailTypes';
export type { UserState };

export interface BaseState {
  isLoading: boolean;
  error: string;
}

export interface RootState {
  requestReducer: RequestState;
  getBookingHistoryReducer: GetBookingHistoryState;
  userReducer: UserState;
  getPlaceDetailReducer: GetPlaceDetailState;
}
