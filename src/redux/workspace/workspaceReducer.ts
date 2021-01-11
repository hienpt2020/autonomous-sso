import {
  IWorkspaceStateReducer,
  WORKSPACE_GET_INFO_START,
  WORKSPACE_GET_INFO_SUCCESS,
  WORKSPACE_GET_INFO_FAILED,
} from './workspaceType';
import { IGetWorkspaceActionType } from './workspaceType';

const initialState: IWorkspaceStateReducer = {
  defaultWorkspace: 0,
  total: 0,
  workspaces: [],
  isLoading: false,
};

export function workspaceReducer(
  state: IWorkspaceStateReducer = initialState,
  action: IGetWorkspaceActionType,
): IWorkspaceStateReducer {
  switch (action.type) {
    case WORKSPACE_GET_INFO_START:
      return {
        ...state,
        ...action.payload,
        isLoading: true,
      };
    case WORKSPACE_GET_INFO_SUCCESS:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    case WORKSPACE_GET_INFO_FAILED:
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    default:
      return state;
  }
}
