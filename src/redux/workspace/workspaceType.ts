import Workspace from "src/models/Workspace";

export const ACTION_SET_WORKSPACE = 'ACTION_SET_WORKSPACE';
export const ACTION_CLEAR_WORKSPACE = 'ACTION_CLEAR_WORKSPACE';

export class WorkspaceState extends Workspace { }

export interface SetWorkspaceActionType {
  type: typeof ACTION_SET_WORKSPACE
  payload?: Workspace;
}
export interface ClearWorkspaceActionType {
  type: typeof ACTION_CLEAR_WORKSPACE
  payload?: Workspace;
}
export type WorkspaceActionType = SetWorkspaceActionType | ClearWorkspaceActionType