// Service
import { put, takeLatest } from 'redux-saga/effects';
import { HybridApi } from 'src/services/networking';
import { WORKPLACE_GET_INFO_FILTER_START, WORKPLACE_GET_INFO_LAYOUT_START } from './workplaceType';
import { getWorkplaceFilterByIdSuccessAction, getWorkplaceLayoutSuccessAction } from './workplaceAction';

export const workplaceSaga = function* root() {
  yield takeLatest(WORKPLACE_GET_INFO_LAYOUT_START, getListWorkplaceLayout);
  yield takeLatest(WORKPLACE_GET_INFO_FILTER_START, getListWorkplaceFilterByDate);
};

// DEFINE FUNCTIONS AS BELOW
function* getListWorkplaceLayout() {
  try {
    const { code, data } = yield HybridApi.getListWorkingLayout(1);
    if (code > 0) {
      yield put(getWorkplaceLayoutSuccessAction(data));
    }
  } catch (e) {
    console.log('@@getListWorkplaceLayout', e);
  }
}

// DEFINE FUNCTIONS AS BELOW
// function* getListWorkplaceFilterById() {
//   try {
//     const { code, data } = yield HybridApi.getListWorkingPlaceById(1);
//     if (code > 0) {
//       yield put(getWorkplaceFilterByIdSuccessAction(data));
//     }
//   } catch (e) {
//     console.log('@@getListWorkplaceFilterByLayoutId', e);
//   }
// }

// DEFINE FUNCTIONS AS BELOW
function* getListWorkplaceFilterByDate() {
  try {
    const data = yield HybridApi.getListWorkingPlaceByDate(1, '2021-01-11T04:22:00.000Z', '2021-01-11T04:22:00.000Z');
    yield put(getWorkplaceFilterByIdSuccessAction(data.data));
  } catch (e) {
    console.log('@@getListWorkplaceFilterByDate', e);
  }
}
