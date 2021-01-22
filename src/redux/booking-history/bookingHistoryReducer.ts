import moment from 'moment';
import {
    BookingHistoryState,
    GetBookingHistoryActionType,
    GetBookingHistorySucessActionType,
    GET_BOOKING_HISTORY,
    GET_BOOKING_HISTORY_SUCCESS,
} from './bookingHisotryType';

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
                (booking) => moment(booking.timeFrom) > moment() && booking.isUpcoming(booking.bookingStatus),
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
