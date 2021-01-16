import WorkLayout from 'src/models/WorkLayout';
import Booking from 'src/models/Booking';

export const SET_BOOKING_DATA = 'SET_BOOKING_DATA';
export const SET_WORK_LAYOUT = 'SET_WORK_LAYOUT';

export interface SetBookingDataActionType {
  type: typeof SET_BOOKING_DATA;
  booking: Booking;
}

export interface setWorkLayoutActionType {
  type: typeof SET_WORK_LAYOUT;
  workLayout: WorkLayout;
}

export interface BookingState {
  booking: Booking;
  workLayout: WorkLayout;
}
