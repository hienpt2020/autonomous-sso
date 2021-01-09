// Service
import { put, takeLatest } from 'redux-saga/effects';
import { HybridApi } from 'src/services/networking';
import { WORKPLACE_GET_INFO_START } from './workplaceType';
import { getWorkplaceLayoutSuccessAction } from './workplaceAction';

export const workplaceSaga = function* root() {
  yield takeLatest(WORKPLACE_GET_INFO_START, getListWorkplaceLayout);
};

// DEFINE FUNCTIONS AS BELOW
function* getListWorkplaceLayout() {
  try {
    const { code, data } = yield HybridApi.getListWorkingLayout(1);
    if (code > 0) {
      yield put(getWorkplaceLayoutSuccessAction(data));
    }
  } catch (e) {
    console.log('@@getListWorkspace', e);
  }
}
