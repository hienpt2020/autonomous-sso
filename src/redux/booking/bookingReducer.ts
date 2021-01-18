import WorkLayout from 'src/models/WorkLayout';
import {
    SET_BOOKING_DATA,
    SetBookingDataActionType,
    BookingState,
    setWorkLayoutActionType,
    SET_WORK_LAYOUT,
} from './bookingType';

const initialState: BookingState = {
    booking: {
        from: new Date(),
        to: new Date(),
    },
    workLayout: new WorkLayout(),
};

export function booking(
    state = initialState,
    action: SetBookingDataActionType | setWorkLayoutActionType,
): BookingState {
    switch (action.type) {
        case SET_BOOKING_DATA:
            return {
                ...state,
                booking: action.booking,
            };

        case SET_WORK_LAYOUT:
            return {
                ...state,
                workLayout: action.workLayout,
            };

        default:
            return state;
    }
}
