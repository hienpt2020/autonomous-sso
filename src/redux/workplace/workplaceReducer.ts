import {
  IWorkplaceStateReducer,
  WORKPLACE_GET_INFO_FILTER_BY_DATE_START,
  WORKPLACE_GET_INFO_FILTER_FAILED,
  WORKPLACE_GET_INFO_FILTER_START,
  WORKPLACE_GET_INFO_FILTER_SUCCESS,
  WORKPLACE_GET_INFO_LAYOUT_FAILED,
  WORKPLACE_GET_INFO_LAYOUT_START,
  WORKPLACE_GET_INFO_LAYOUT_SUCCESS,
} from './workplaceType';
import { WorkplaceAction } from './workplaceAction';

const initialState: IWorkplaceStateReducer = {
  layout: {
    items: [],
    limit: 0,
    nextPage: 0,
    offset: 0,
    page: 0,
    prevPage: 0,
    totalItem: 0,
    totalPage: 0,
    isLoading: false,
  },
  filter: {
    items: [],
    limit: 0,
    nextPage: 0,
    offset: 0,
    page: 0,
    prevPage: 0,
    totalItem: 0,
    totalPage: 0,
    isLoading: false,
  },
};
export function workplaceReducer(
  state: IWorkplaceStateReducer = initialState,
  action: WorkplaceAction,
): IWorkplaceStateReducer {
  switch (action.type) {
    case WORKPLACE_GET_INFO_LAYOUT_START:
      return {
        ...state,
        layout: {
          ...state.layout,
          isLoading: true,
        },
      };
    case WORKPLACE_GET_INFO_LAYOUT_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case WORKPLACE_GET_INFO_LAYOUT_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case WORKPLACE_GET_INFO_FILTER_START:
      return {
        ...state,
        filter: {
          ...state.filter,
          isLoading: true,
        },
      };
    case WORKPLACE_GET_INFO_FILTER_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case WORKPLACE_GET_INFO_FILTER_FAILED:
      return {
        ...state,
        ...action.payload,
      };
    case WORKPLACE_GET_INFO_FILTER_BY_DATE_START:
      return {
        ...state,
        filter: {
          ...state.filter,
          isLoading: true,
        },
      };
    default:
      return state;
  }
}
