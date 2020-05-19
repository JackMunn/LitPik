import { takeEvery, takeLatest, all } from 'redux-saga/effects';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';
import {initCalcStatsSaga} from './dashboard';
import {initUserLocationSaga} from './maprender';
import * as actionTypes from '../actions/actionTypes';

export function* watchAuth() {

    yield all([
        takeEvery(actionTypes.AUTH_INIT_LOGOUT, logoutSaga),
        takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga),
        takeEvery(actionTypes.AUTH_USER, authUserSaga),
        takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga),
    ]);
    // basically sets up a "listener" whenever the action is triggered (1st arg), then it executes the saga (2nd arg)
  

}

export function* watchDashboard() {
    yield takeEvery(actionTypes.INIT_CALC_STATS, initCalcStatsSaga);
}

export function* watchMapRender() {
    yield takeLatest(actionTypes.INIT_USER_LOCATION, initUserLocationSaga);
}

 