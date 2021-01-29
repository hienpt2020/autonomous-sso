import { BookingHistory } from 'src/models/BookingHistory';

export const GET_BOOKING_HISTORY = 'GET_BOOKING_HISTORY';
export const GET_BOOKING_HISTORY_SUCCESS = 'GET_BOOKING_HISTORY_SUCCESS';

export interface GetBookingHistoryActionType {
    type: typeof GET_BOOKING_HISTORY;
    isAdmin: boolean;
    workSpaceId: number;
    page: number;
    isUpcoming: boolean;
}

export interface GetBookingHistorySucessActionType {
    type: typeof GET_BOOKING_HISTORY_SUCCESS;
    bookings: BookingHistory[];
    isUpcoming: boolean;
}

export interface BookingHistoryState {
    bookings: { items: BookingHistory[]; page: number; isLoading: boolean };
    upComingBookings: { items: BookingHistory[]; page: number; isLoading: boolean };
}
