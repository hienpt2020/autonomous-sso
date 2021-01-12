import { RequestState, REQUEST_START, REQUEST_SUCCESS, REQUEST_ERROR, REQUEST_END } from './requestType';
import { RequestAction } from './requestAction';

const initialState: RequestState = {
  isLoading: false,
};

export function requestReducer(state: RequestState = initialState, action: RequestAction): RequestState {
  switch (action.type) {
    case REQUEST_START:
      return {
        ...state,
        isLoading: true,
      };

    case REQUEST_END:
      return {
        ...state,
        isLoading: false,
      };

    case REQUEST_SUCCESS:
      return {
        ...state,
        ...action.payload,
        errorMessage: "",
        isLoading: false,
      };

    case REQUEST_ERROR:
      return {
        ...state,
        errorMessage: action.errorMessage,
        isLoading: false,
      };

    default:
      return state;
  }
}
