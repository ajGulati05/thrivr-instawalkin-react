import { takeEvery, put, call, all } from "redux-saga/effects";
import {
  GET_ALL_MODALITIES_REQUEST,
  getAllModalitiesSuccessAction,
  getAllModalitiesFailureAction,
  GET_THERAPIST_MODALITIES_REQUEST,
  getTherapistModalitiesSuccessAction,
  getTherapistModalitiesFailureAction,
  UPDATE_THERAPIST_MODALITIES_REQUEST,
  updateTherapistModalitiesSuccessAction,
  updateTherapistModalitiesFailureAction,
  GET_ALL_SUB_MODALITIES_REQUEST,
  getAllSubModalitiesSuccessAction,
  getAllSubModalitiesFailureAction,
  GET_THERAPIST_SUB_MODALITIES_REQUEST,
  getTherapistSubModalitiesSuccessAction,
  getTherapistSubModalitiesFailureAction,
  UPDATE_THERAPIST_SUB_MODALITIES_REQUEST,
  updateTherapistSubModalitiesSuccessAction,
  updateTherapistSubModalitiesFailureAction
} from "../actions/modalities";
import pNotification from "../../components/PNotification";
import { modalitiesApi } from "../../services";

// get all modalities
function* getAllModalitiesSaga({ payload }) {
  try {
    const response = yield call(modalitiesApi.getAllModalities, payload);
    if (response && response.status) {
      yield put(getAllModalitiesSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getAllModalitiesFailureAction(e));
  }
}

// get therapist modalities
function* getTherapistModalitiesSaga({ payload }) {
  try {
    const response = yield call(modalitiesApi.getTherapistModalities, payload);
    if (response && response.status) {
      yield put(getTherapistModalitiesSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getTherapistSubModalitiesFailureAction(e));
  }
}

// update therapist modalities
function* updateTherapistModalitiesSaga({ payload }) {
  try {
    const response = yield call(modalitiesApi.updateTherapistModalities, payload);
    if (response && response.status) {
      yield put(updateTherapistModalitiesSuccessAction(response.data));
      const notifyMessage = {
        type: "success",
        message: "Modalities Updated"
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    yield put(updateTherapistModalitiesFailureAction(e));
  }
}

// get all sub modalities
function* getAllSubModalitiesSaga({ payload }) {
  try {
    const response = yield call(modalitiesApi.getAllSubModalities, payload);
    if (response && response.status) {
      yield put(getAllSubModalitiesSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getAllSubModalitiesFailureAction(e));
  }
}

// get therapist sub modalities
function* getTherapistSubModalitiesSaga({ payload }) {
  try {
    const response = yield call(modalitiesApi.getTherapistSubModalities, payload);
    if (response && response.status) {
      yield put(getTherapistSubModalitiesSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getTherapistSubModalitiesFailureAction(e));
  }
}

// update therapist sub modalities
function* updateTherapistSubModalitiesSaga({ payload }) {
  try {
    const response = yield call(modalitiesApi.updateTherapistSubModalities, payload);
    if (response && response.status) {
      yield put(updateTherapistSubModalitiesSuccessAction(response.data));
      const notifyMessage = {
        type: "success",
        message: "Sub-Modalities Updated"
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    yield put(updateTherapistSubModalitiesFailureAction(e));
  }
}

export default function*() {
  yield all([
    takeEvery(GET_ALL_MODALITIES_REQUEST, getAllModalitiesSaga),
    takeEvery(GET_THERAPIST_MODALITIES_REQUEST, getTherapistModalitiesSaga),
    takeEvery(UPDATE_THERAPIST_MODALITIES_REQUEST, updateTherapistModalitiesSaga),
    takeEvery(GET_ALL_SUB_MODALITIES_REQUEST, getAllSubModalitiesSaga),
    takeEvery(GET_THERAPIST_SUB_MODALITIES_REQUEST, getTherapistSubModalitiesSaga),
    takeEvery(UPDATE_THERAPIST_SUB_MODALITIES_REQUEST, updateTherapistSubModalitiesSaga)
  ]);
}
