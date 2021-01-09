import {
  IWorkplaces,
  WORKPLACE_GET_INFO_START,
  WORKPLACE_GET_INFO_SUCCESS,
  WORKPLACE_GET_INFO_FAILED,
} from './workplaceType';
import { WorkplaceAction } from './workplaceAction';

const initialState: IWorkplaces = {
  items: [],
  limit: 0,
  nextPage: 0,
  offset: 0,
  page: 0,
  prevPage: 0,
  totalItem: 0,
  totalPage: 0,
};
export function workplaceReducer(state: IWorkplaces = initialState, action: WorkplaceAction): IWorkplaces {
  switch (action.type) {
    case WORKPLACE_GET_INFO_START:
    case WORKPLACE_GET_INFO_SUCCESS:
    case WORKPLACE_GET_INFO_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
