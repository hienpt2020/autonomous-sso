// Service
import { put, takeLatest } from 'redux-saga/effects';
import { HybridApi } from 'src/services/networking';
import {
  WORKPLACE_GET_INFO_FILTER_BY_DATE_START,
  WORKPLACE_GET_INFO_FILTER_START,
  WORKPLACE_GET_INFO_LAYOUT_START,
} from './workplaceType';
import { getWorkplaceFilterByIdSuccessAction, getWorkplaceLayoutSuccessAction } from './workplaceAction';

export const workplaceSaga = function* root() {
  yield takeLatest(WORKPLACE_GET_INFO_LAYOUT_START, getListWorkplaceLayout);
  yield takeLatest(WORKPLACE_GET_INFO_FILTER_START, getListWorkplaceFilterById);
  yield takeLatest(WORKPLACE_GET_INFO_FILTER_BY_DATE_START, getListWorkplaceFilterByDate);
};

// DEFINE FUNCTIONS AS BELOW
function* getListWorkplaceLayout({ payload }) {
  try {
    const { id } = payload;
    const { code, data } = yield HybridApi.getListWorkingLayout(id);
    if (code > 0) {
      yield put(getWorkplaceLayoutSuccessAction(data));
    }
  } catch (e) {
    console.log('@@getListWorkplaceLayout', e);
  }
}

// DEFINE FUNCTIONS AS BELOW
function* getListWorkplaceFilterById() {
  try {
    const { code, data } = yield HybridApi.getListWorkingPlaceById(1);
    if (code > 0) {
      yield put(getWorkplaceFilterByIdSuccessAction(data));
    }
  } catch (e) {
    console.log('@@getListWorkplaceFilterByLayoutId', e);
  }
}

// DEFINE FUNCTIONS AS BELOW
function* getListWorkplaceFilterByDate({ payload }) {
  try {
    const { layoutId, from, to } = payload;
    const data = yield HybridApi.getListWorkingPlaceByDate(layoutId, from, to);
    yield put(getWorkplaceFilterByIdSuccessAction(data.data));
  } catch (e) {
    console.log('@@getListWorkplaceFilterByDate', e);
  }
}
