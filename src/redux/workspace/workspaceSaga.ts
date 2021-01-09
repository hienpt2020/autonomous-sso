// Service
import { takeLatest, put } from 'redux-saga/effects';
// @ts-ignore
import { HybridApi } from 'src/services/networking';
import { WORKSPACE_GET_INFO_START } from './workspaceType';
import { getWorkspaceSuccessAction } from './workspaceAction';

export const workspaceSaga = function* root() {
  yield takeLatest(WORKSPACE_GET_INFO_START, getListWorkspace);
};

// DEFINE FUNCTIONS AS BELOW
function* getListWorkspace() {
  try {
    const { code, data } = yield HybridApi.getListWorkspace();
    if (code > 0) {
      yield put(getWorkspaceSuccessAction(data));
    }
    console.log('@msmadmmamads:', data);
  } catch (e) {
    console.log('@@getListWorkspace', e);
  }
}
