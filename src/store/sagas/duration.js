import { takeEvery, put, call, all } from "redux-saga/effects";
import {
  GET_ALL_DURATION_REQUEST,
  getAllDurationSuccessAction,
  getAllDurationFailureAction,
  GET_THERAPIST_DURATION_REQUEST,
  getTherapistDurationSuccessAction,
  getTherapistDurationFailureAction,
  UPDATE_THERAPIST_DURATION_REQUEST,
  updateTherapistDurationSuccessAction,
  updateTherapistDurationFailureAction
} from "../actions/duration";
import pNotification from "../../components/PNotification";
import { durationApi } from "../../services";

// get all durations
function* getAllDurationSaga({ payload }) {
  try {
    const response = yield call(durationApi.getAllDurations, payload);
    if (response && response.status) {
      yield put(getAllDurationSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getAllDurationFailureAction(e));
  }
}

// get therapist durations
function* getTherapistDurationSaga({ payload }) {
  try {
    const response = yield call(durationApi.getTherapistDurations, payload);
    if (response && response.status) {
      yield put(getTherapistDurationSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getTherapistDurationFailureAction(e));
  }
}

// update therapist durations
function* updateTherapistDurationSaga({ payload }) {
  try {
    const response = yield call(durationApi.updateTherapistDuration, payload);
    if (response && response.status) {
      yield put(updateTherapistDurationSuccessAction(response.data));
      const notifyMessage = {
        type: "success",
        message: "Durations Updated"
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    yield put(updateTherapistDurationFailureAction(e));
  }
}

export default function*() {
  yield all([
    takeEvery(GET_ALL_DURATION_REQUEST, getAllDurationSaga),
    takeEvery(GET_THERAPIST_DURATION_REQUEST, getTherapistDurationSaga),
    takeEvery(UPDATE_THERAPIST_DURATION_REQUEST, updateTherapistDurationSaga)
  ]);
}
