import { GetPlaceDetailType } from './getPlaceDetailAction';
import {
  ACTION_GET_PLACE_DETAIL,
  ACTION_GET_PLACE_DETAIL_SUCCESS,
  ACTION_GET_PLACE_DETAIL_FAILURE,
  GetPlaceDetailState,
} from './getPlaceDetailTypes';

const initialState: GetPlaceDetailState = {
  isLoading: false,
  error: '',
  place: undefined,
};

export const getPlaceDetailReducer = (state = initialState, action: GetPlaceDetailType): any => {
  switch (action.type) {
    case ACTION_GET_PLACE_DETAIL:
      return {
        ...state,
        error: '',
        isLoading: true,
        place: undefined,
      };

    case ACTION_GET_PLACE_DETAIL_SUCCESS:
      return {
        ...state,
        isLoading: false,
        place: action.payload,
      };

    case ACTION_GET_PLACE_DETAIL_FAILURE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    default:
      return state;
  }
};
