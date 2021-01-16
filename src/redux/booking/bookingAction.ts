import WorkLayout from 'src/models/WorkLayout';
import Booking from 'src/models/Booking';
import { SetBookingDataActionType, setWorkLayoutActionType, SET_BOOKING_DATA, SET_WORK_LAYOUT } from './bookingType';

export const setBookingDataAction = (booking: Booking): SetBookingDataActionType => {
  return {
    type: SET_BOOKING_DATA,
    booking,
  };
};

export const setWorkLayoutAction = (workLayout: WorkLayout): setWorkLayoutActionType => {
  return {
    type: SET_WORK_LAYOUT,
    workLayout,
  };
};
