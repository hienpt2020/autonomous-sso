import {
    GET_BOOKING_HISTORY,
    GET_BOOKING_HISTORY_SUCCESS,
    GetBookingHistoryActionType,
    GetBookingHistorySucessActionType,
    BookingHistoryState,
} from './bookingHisotryType';
import moment from 'moment';
import { BookingStatus } from 'src/common/constant';

const initialState: BookingHistoryState = {
    bookings: {
        items: [],
        page: 0,
        isLoading: false,
    },
    upComingBookings: {
        items: [],
        page: 0,
        isLoading: false,
    },
};

export function bookingHistoryReducer(
    state = initialState,
    action: GetBookingHistoryActionType | GetBookingHistorySucessActionType,
): BookingHistoryState {
    switch (action.type) {
        case GET_BOOKING_HISTORY:
            return {
                bookings: {
                    items: [],
                    page: 0,
                    isLoading: true,
                },
                upComingBookings: {
                    items: [],
                    page: 0,
                    isLoading: true,
                },
            };

        case GET_BOOKING_HISTORY_SUCCESS:
            const upComingBookingHistories = action.bookings.filter(
                (booking) => moment(booking.timeFrom) > moment() && booking.bookingStatus == BookingStatus.COMFIRMED,
            );

            return {
                ...state,
                bookings: {
                    page: state.bookings.page + 1,
                    items: action.bookings,
                    isLoading: false,
                },
                upComingBookings: {
                    page: state.upComingBookings.page + 1,
                    items: upComingBookingHistories,
                    isLoading: false,
                },
            };

        default:
            return state;
    }
}
