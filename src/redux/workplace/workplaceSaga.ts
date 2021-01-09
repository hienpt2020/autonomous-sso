// Service
import { takeLatest } from 'redux-saga/effects';
import { HybridApi } from 'src/services/networking';

export const workingPlaceSaga = function* root() {
  yield takeLatest('GET_WORKING_PLACES_START', getListWorkspace);
};

// DEFINE FUNCTIONS AS BELOW
const getListWorkspace = function* getListWorkspace() {
  try {
    const response = yield HybridApi.getListWorkspace();

    console.log('@Test login :', response);
  } catch (e) {
    console.log('@@Error', e);
  }
};
