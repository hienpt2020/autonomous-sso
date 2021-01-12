import { IGetBookingHistoryType } from './getBookingHistoryAction';
import {
  ACTION_GET_BOOKING_HISTORY,
  ACTION_GET_BOOKING_HISTORY_FAILURE,
  ACTION_GET_BOOKING_HISTORY_SUCCESS,
  GetBookingHistoryState,
} from './getBookingHistoryTypes';

const initialState: GetBookingHistoryState = {
  isLoading: false,
  error: '',
  bookings: [],
  page: 0,
};

export const getBookingHistoryReducer = (state = initialState, action: IGetBookingHistoryType): any => {
  switch (action.type) {
    case ACTION_GET_BOOKING_HISTORY:
      return {
        ...state,
        error: '',
        isLoading: true,
        bookings: action.requestParam.page == 0 ? [] : state.bookings,
        page: action.requestParam.page,
      };

    case ACTION_GET_BOOKING_HISTORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        bookings:
          state.page == 0 ? action.payload : state.bookings ? state.bookings.concat(action.payload) : action.payload,
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
