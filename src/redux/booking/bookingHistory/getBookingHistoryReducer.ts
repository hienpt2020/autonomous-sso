import {
  IGetBookingHistoryActionType,
  IGetBookingHistorySuccessActionType,
  IGetBookingHistoryFailureActionType,
} from './getBookingHistoryAction';
import {
  ACTION_GET_BOOKING_HISTORY,
  ACTION_GET_BOOKING_HISTORY_SUCCESS,
  ACTION_GET_BOOKING_HISTORY_FAILURE,
  GetBookingHistoryState,
} from './getBookingHistoryTypes';

const initialState: GetBookingHistoryState = {
  isLoading: false,
  error: '',
  bookings: undefined,
};

export const getBookingHistoryReducer = (
  state = initialState,
  action: IGetBookingHistoryActionType | IGetBookingHistorySuccessActionType | IGetBookingHistoryFailureActionType,
): any => {
  switch (action.type) {
    case ACTION_GET_BOOKING_HISTORY:
      return {
        ...state,
        error: '',
        isLoading: true,
        bookings: undefined,
      };

    case ACTION_GET_BOOKING_HISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        bookings: action.payload,
      };

    case ACTION_GET_BOOKING_HISTORY_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
};
