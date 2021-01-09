import { WorkingPlaceState, GET_WORKING_PLACES_START } from './workingPlaceType';
import { WorkplaceAction } from './workingPlaceAction';

const initialState: WorkingPlaceState = {
  isLoading: false,
};

export function workingPlaceReducer(
  state: WorkingPlaceState = initialState,
  action: WorkplaceAction,
): WorkingPlaceState {
  switch (action.type) {
    case GET_WORKING_PLACES_START:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };

    default:
      return state;
  }
}
