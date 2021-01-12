export const WORKSPACE_GET_INFO_START = 'WORKSPACE/GET_INFO_START';
export const WORKSPACE_GET_INFO_SUCCESS = 'WORKSPACE/GET_INFO_SUCCESS';
export const WORKSPACE_GET_INFO_FAILED = 'WORKSPACE/GET_INFO_FAILED';

export interface IWorkspace {
  defaultWorkspace: number;
  total: number;
  workspaces: [];
}

export interface IWorkspaceStateReducer {
  defaultWorkspace: number;
  total: number;
  workspaces: [];
  isLoading: boolean;
}

export interface IWorkspacePayload {
  defaultWorkspace?: number;
  total?: number;
  workspaces?: [];
  isLoading?: boolean;
  fnFailed?: () => void;
  fnSuccess?: () => void;
}

export interface IGetWorkspaceActionType {
  type: typeof WORKSPACE_GET_INFO_START | typeof WORKSPACE_GET_INFO_SUCCESS | typeof WORKSPACE_GET_INFO_FAILED;
  payload?: IWorkspacePayload;
}
