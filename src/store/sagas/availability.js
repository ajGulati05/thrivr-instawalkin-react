import { takeEvery, put, call, all } from "redux-saga/effects";
import { globaLoaderDecrementAction, globalLoaderIncrementAction } from "../actions/global";
import {
  AVAILABILITY_REQUEST,
  availabilitySuccessAction,
  availabilityFailureAction,
  GET_SLOTS_REQUEST,
  getSlotsSuccessAction,
  getSlotsFailureAction,
  getAvailabilityReqAction,
  GET_AVAILABILITY_REQUEST,
  getAvailabilitySuccessAction,
  getAvailabilityFailureAction
} from "../actions/availability";
import { availabilityApi } from "../../services";

function* availabilitySaga({ payload }) {
  try {
    yield put(globalLoaderIncrementAction());
    const response = yield call(availabilityApi.availability, payload);
    if (response && response.status) {
      yield put(availabilitySuccessAction(response.data));
      yield put(getAvailabilityReqAction({}));
    }
  } catch (e) {
    yield put(availabilityFailureAction(e));
  } finally {
    yield put(globaLoaderDecrementAction());
  }
}

function* getSlotsSaga({ payload }) {
  try {
    const response = yield call(availabilityApi.getSlots, payload);
    if (response && response.status) {
      yield put(getSlotsSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getSlotsFailureAction(e));
  }
}

function* getAvailabilitySaga({ payload }) {
  try {
    yield put(globalLoaderIncrementAction());
    const response = yield call(availabilityApi.getAvailability, payload);
    if (response && response.status) {
      yield put(getAvailabilitySuccessAction(response.data));
    }
  } catch (e) {
    yield put(getAvailabilityFailureAction(e));
  } finally {
    yield put(globaLoaderDecrementAction());
  }
}

export default function*() {
  yield all([
    takeEvery(AVAILABILITY_REQUEST, availabilitySaga),
    takeEvery(GET_SLOTS_REQUEST, getSlotsSaga),
    takeEvery(GET_AVAILABILITY_REQUEST, getAvailabilitySaga)
  ]);
}
