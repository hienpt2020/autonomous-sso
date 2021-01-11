import { BookingData } from 'src/screens/booking/types';

export interface IGetBookingHistory {
  isAdmin: boolean;
  workingSpaceId: number;
  page: number;
}

export interface GetBookingHistoryState {
  isLoading: boolean;
  error: string;
  bookings?: Array<BookingData>;
}

// --------- Action Types
const ACTION_GET_BOOKING_HISTORY = 'ACTION_GET_BOOKING_HISTORY';
const ACTION_GET_BOOKING_HISTORY_SUCCESS = 'ACTION_GET_BOOKING_HISTORY_SUCCESS';
const ACTION_GET_BOOKING_HISTORY_FAILURE = 'ACTION_GET_BOOKING_HISTORY_FAILURE';

export { ACTION_GET_BOOKING_HISTORY, ACTION_GET_BOOKING_HISTORY_SUCCESS, ACTION_GET_BOOKING_HISTORY_FAILURE };
