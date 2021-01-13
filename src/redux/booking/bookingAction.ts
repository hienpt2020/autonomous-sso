import Booking from 'src/models/Booking';
import { SetBookingDataActionType, SET_BOOKING_DATA } from './bookingType';

export const setBookingDataAction = (booking: Booking): SetBookingDataActionType => {
  return {
    type: SET_BOOKING_DATA,
    booking,
  };
};
