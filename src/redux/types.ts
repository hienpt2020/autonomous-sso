import { BookingState } from './booking/bookingType';
import { RequestState } from './request/requestType';
import { UserState } from './user/userType';
export type { UserState };

export interface BaseState {
  isLoading: boolean;
  error: string;
}

export interface RootState {
  requestReducer: RequestState;
  userReducer: UserState;
  booking: BookingState;
}
