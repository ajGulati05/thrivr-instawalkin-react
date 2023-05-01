import { takeEvery, put, call, all } from "redux-saga/effects";
import pNotification from "../../components/PNotification";
import { chartsApi } from "../../services";
import {
  addChartToDatabaseFailureAction,
  addChartToDatabaseSuccessAction,
  ADD_CHART_DATABASE_REQUEST,
  editChartFailureAction,
  editChartSuccessAction,
  EDIT_CHART_REQUEST,
  getChartsFailureAction,
  getChartsSuccessAction,
  GET_CHARTS_REQUEST,
  lockChartFailureAction,
  lockChartSuccessAction,
  LOCK_CHART_REQUEST
} from "../actions/charts";

// Get charts
function* getChartsSaga({ payload }) {
  try {
    const response = yield call(chartsApi.getCharts, payload);
    if (response && response.status) {
      const data = response.data.data;

      yield put(getChartsSuccessAction({ data }));
    }
  } catch (e) {
    yield put(getChartsFailureAction(e));
  }
}

// Add chart
function* addChartSaga({ payload }) {
  try {
    const response = yield call(chartsApi.addChart, payload);
    if (response && response.status) {
      const data = response.data.data;

      yield put(addChartToDatabaseSuccessAction({ data, tempId: payload.chartId }));
      pNotification({
        type: "success",
        message: "Chart added"
      });
    }
  } catch (e) {
    pNotification({
      type: "error",
      message: "Error. Chart not added."
    });
    yield put(addChartToDatabaseFailureAction({ e, tempId: payload.chartId }));
  }
}

// Edit chart
function* editChartSaga({ payload }) {
  try {
    const response = yield call(chartsApi.editChart, payload);
    if (response && response.status) {
      const data = response.data.data;

      yield put(editChartSuccessAction({ data, chartId: payload.chartId }));
      pNotification({
        type: "success",
        message: "Chart edited"
      });
    }
  } catch (e) {
    pNotification({
      type: "error",
      message: "Error. Chart not edited."
    });
    yield put(editChartFailureAction({ e, tempId: payload.chartId }));
  }
}

// Lock chart
function* lockChartSaga({ payload }) {
  try {
    const response = yield call(chartsApi.lockChart, payload);
    if (response && response.status) {
      const data = response.data.data;

      yield put(lockChartSuccessAction({ data, chartId: payload.chartId }));
      pNotification({
        type: "success",
        message: "Chart locked"
      });
    }
  } catch (e) {
    pNotification({
      type: "error",
      message: "Error. Chart not locked."
    });
    yield put(lockChartFailureAction({ e, chartId: payload.chartId }));
  }
}

export default function*() {
  yield all([
    takeEvery(GET_CHARTS_REQUEST, getChartsSaga),
    takeEvery(ADD_CHART_DATABASE_REQUEST, addChartSaga),
    takeEvery(EDIT_CHART_REQUEST, editChartSaga),
    takeEvery(LOCK_CHART_REQUEST, lockChartSaga)
  ]);
}
