import { WORKSPACE_GET_INFO_START, WORKSPACE_GET_INFO_SUCCESS, IGetWorkspaceActionType } from './workspaceType';

export const getWorkspaceStartAction = (): IGetWorkspaceActionType => {
  return {
    type: WORKSPACE_GET_INFO_START,
  };
};

export const getWorkspaceSuccessAction = (data: any): IGetWorkspaceActionType => {
  return {
    type: WORKSPACE_GET_INFO_SUCCESS,
    payload: {
      defaultWorkspace: data.default_workspace,
      total: data.total,
      workspaces: data.workspaces,
    },
  };
};
