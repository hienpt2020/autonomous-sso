import WorkLayout from 'src/models/WorkLayout';
import Booking from 'src/models/Booking';
import {
    SetBookingDataActionType,
    setWorkLayoutActionType,
    SetEnableBookingActionType,
    SET_BOOKING_DATA,
    SET_WORK_LAYOUT,
    SET_ENABLE_BOOKING,
} from './bookingType';

export const setBookingDataAction = (booking: Booking): SetBookingDataActionType => {
    return {
        type: SET_BOOKING_DATA,
        booking,
    };
};

export const setEnableBooking = (enable: boolean): SetEnableBookingActionType => {
    return {
        type: SET_ENABLE_BOOKING,
        enable,
    };
};

export const setWorkLayoutAction = (workLayout: WorkLayout): setWorkLayoutActionType => {
    return {
        type: SET_WORK_LAYOUT,
        workLayout,
    };
};
