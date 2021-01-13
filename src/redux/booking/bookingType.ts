import Booking from 'src/models/Booking';

export const SET_BOOKING_DATA = 'SET_BOOKING_DATA';

export interface SetBookingDataActionType {
  type: typeof SET_BOOKING_DATA;
  booking: Booking;
}

export interface BookingState {
  booking: Booking;
}
