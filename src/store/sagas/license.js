import { takeEvery, put, call, all } from "redux-saga/effects";
import {
  GET_THERAPIST_LICENSE_REQUEST,
  UPDATE_THERAPIST_LICENSE_REQUEST,
  getTherapistLicenseSuccessAction,
  getTherapistLicenseFailureAction,
  updateTherapistLicenseSuccessAction,
  updateTherapistLicenseFailureAction
} from "../actions/license";
import pNotification from "../../components/PNotification";
import { licenseApi } from "../../services";

// get therapist license
function* getTherapistLicenseSaga({ payload }) {
  try {
    const response = yield call(licenseApi.getTherapistLicense, payload);
    if (response && response.status) {
      yield put(getTherapistLicenseSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getTherapistLicenseFailureAction(e));
  }
}

// update therapist license
function* updateTherapistLicenseSaga({ payload }) {
  try {
    const response = yield call(licenseApi.updateTherapistLicense, payload);
    if (response && response.status) {
      yield put(updateTherapistLicenseSuccessAction(response.data));
      const notifyMessage = {
        type: "success",
        message: "License Updated"
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    yield put(updateTherapistLicenseFailureAction(e));
  }
}

export default function*() {
  yield all([
    takeEvery(GET_THERAPIST_LICENSE_REQUEST, getTherapistLicenseSaga),
    takeEvery(UPDATE_THERAPIST_LICENSE_REQUEST, updateTherapistLicenseSaga)
  ]);
}
