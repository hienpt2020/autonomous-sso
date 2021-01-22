import { BookingHistory } from 'src/models/BookingHistory';
import {
    GetBookingHistoryActionType,
    GetBookingHistorySucessActionType,
    GET_BOOKING_HISTORY,
    GET_BOOKING_HISTORY_SUCCESS,
} from './bookingHisotryType';

export const getBookingHistoryAction = (
    isAdmin: boolean,
    workSpaceId: number,
    page: number,
): GetBookingHistoryActionType => {
    return {
        type: GET_BOOKING_HISTORY,
        isAdmin,
        workSpaceId,
        page,
    };
};

export const getBookingHistorySuccessAction = (bookings: BookingHistory[]): GetBookingHistorySucessActionType => {
    return {
        type: GET_BOOKING_HISTORY_SUCCESS,
        bookings,
    };
};
