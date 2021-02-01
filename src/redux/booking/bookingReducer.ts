import WorkLayout from 'src/models/WorkLayout';
import {
    SET_BOOKING_DATA,
    SetBookingDataActionType,
    BookingState,
    setWorkLayoutActionType,
    SET_WORK_LAYOUT,
    SET_ENABLE_BOOKING,
    SetEnableBookingActionType,
} from './bookingType';

const initialState: BookingState = {
    booking: {
        from: new Date(),
        to: new Date(),
        code: '',
    },
    workLayout: new WorkLayout(),
    enable: true,
};

export function booking(
    state = initialState,
    action: SetBookingDataActionType | setWorkLayoutActionType | SetEnableBookingActionType,
): BookingState {
    switch (action.type) {
        case SET_BOOKING_DATA:
            return {
                ...state,
                booking: action.booking,
            };

        case SET_ENABLE_BOOKING:
            return {
                ...state,
                enable: action.enable,
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
