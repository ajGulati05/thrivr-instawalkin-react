import { takeEvery, put, call, all } from "redux-saga/effects";
import { globalLoaderIncrementAction, globaLoaderDecrementAction } from "../actions/global";
import {
  GET_GOOGLE_ANALYTICS_REQUEST,
  getGoogleAnalyticsSuccessAction,
  getGoogleAnalyticsFailureAction,
  GET_DASHBOARD_ANALYTICS_REQUEST,
  getDashboardAnalyticsSuccessAction,
  getDashboardAnalyticsFailureAction
} from "../actions/dashboard";
import { dashboardApi } from "../../services";

function* getGoogleAnalyticsSaga({ payload }) {
  try {
    yield put(globalLoaderIncrementAction());
    const response = yield call(dashboardApi.getGoogleAnalytics, payload);
    if (response) {
      yield put(getGoogleAnalyticsSuccessAction(response));
    }
  } catch (e) {
    yield put(getGoogleAnalyticsFailureAction(e));
  } finally {
    yield put(globaLoaderDecrementAction());
  }
}

function* getDashboardAnalyticsSaga({ payload }) {
  try {
    yield put(globalLoaderIncrementAction());
    const response = yield call(dashboardApi.getDashboardAnalytics, payload);
    if (response && response) {
      yield put(getDashboardAnalyticsSuccessAction(response));
    }
  } catch (e) {
    yield put(getDashboardAnalyticsFailureAction(e));
  } finally {
    yield put(globaLoaderDecrementAction());
  }
}

export default function*() {
  yield all([
    takeEvery(GET_GOOGLE_ANALYTICS_REQUEST, getGoogleAnalyticsSaga),
    takeEvery(GET_DASHBOARD_ANALYTICS_REQUEST, getDashboardAnalyticsSaga)
  ]);
}
