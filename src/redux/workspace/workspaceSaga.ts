// Service
import { takeLatest, put } from 'redux-saga/effects';
// @ts-ignore
import { HybridApi } from 'src/services/networking';
import { WORKSPACE_GET_INFO_START } from './workspaceType';
import { getWorkspaceStartAction, getWorkspaceSuccessAction } from './workspaceAction';
import { getWorkplaceLayoutStartAction } from '../workplace/workplaceAction';

export const workspaceSaga = function* root() {
  yield takeLatest(WORKSPACE_GET_INFO_START, getListWorkspace);
};

// DEFINE FUNCTIONS AS BELOW
function* getListWorkspace() {
  try {
    const { code, data } = yield HybridApi.getListWorkspace();
    if (code > 0) {
      if (data?.workspaces.length > 0) {
        yield put(getWorkplaceLayoutStartAction(data.workspaces[0].id));
      }
      yield put(getWorkspaceSuccessAction(data));
    }
  } catch (e) {
    console.log('@@getListWorkspace', e);
  }
}
