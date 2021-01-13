import { SET_BOOKING_DATA, SetBookingDataActionType, BookingState } from './bookingType';

const initialState: BookingState = {
  booking: {
    from: '',
    to: '',
    workPlaceId: 0,
  },
};

export function booking(state = initialState, action: SetBookingDataActionType): BookingState {
  switch (action.type) {
    case SET_BOOKING_DATA:
      return {
        ...state,
        booking: action.booking,
      };

    default:
      return state;
  }
}
