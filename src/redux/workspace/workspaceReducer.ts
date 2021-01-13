import { WorkspaceState, ACTION_SET_WORKSPACE, ACTION_CLEAR_WORKSPACE } from './workspaceType';
import { WorkspaceActionType } from './workspaceType';

const initialState: WorkspaceState = {
  defaultWorkspace: 0,
  total: 0,
  workspaces: [],
  isLoading: false,
};

export function workspaceReducer(state: WorkspaceState = initialState, action: WorkspaceActionType): WorkspaceState {
  switch (action.type) {
    case ACTION_SET_WORKSPACE:
      return {
        ...state,
        ...action.payload,
      };
    case ACTION_CLEAR_WORKSPACE:
      return {
        ...initialState
      };
    default:
      return state;
  }
}
