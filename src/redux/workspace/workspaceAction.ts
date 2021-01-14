import WorkSpace from 'src/models/WorkSpace';
import { ACTION_SET_WORKSPACE, ACTION_CLEAR_WORKSPACE, SetWorkspaceActionType, ClearWorkspaceActionType } from './workspaceType';

export const createActionSetWorkSpace = (workspace: WorkSpace): SetWorkspaceActionType => {
  return {
    type: ACTION_SET_WORKSPACE,
    payload: workspace
  };
};

export const createActionWorkspaceSuccess = (data: any): ClearWorkspaceActionType => {
  return {
    type: ACTION_CLEAR_WORKSPACE,
  };
};
