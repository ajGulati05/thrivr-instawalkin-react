import { takeEvery, put, call, all } from "redux-saga/effects";
import pNotification from "../../components/PNotification";
import {
  UPDATE_THERAPIST_PASSWORD_REQUEST,
  updateTherapistPasswordSuccessAction,
  updateTherapistPasswordFailureAction
} from "../actions/change-password";

import { authApi } from "../../services";

// Update Therapist Password
function* updateTherapistPasswordSaga({ payload }) {
  try {
    const response = yield call(authApi.passwordChange, payload);
    if (response && response.status) {
      yield put(updateTherapistPasswordSuccessAction(response.data));
      const notifyMessage = {
        type: "success",
        message: "Password Updated"
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    yield put(updateTherapistPasswordFailureAction(e));
    if (typeof e.data.error === "string") {
      const notifyMessage = {
        type: "error",
        message: "Password Change Failed",
        description: e.data.error
      };
      pNotification(notifyMessage);
    }
  }
}

export default function*() {
  yield all([takeEvery(UPDATE_THERAPIST_PASSWORD_REQUEST, updateTherapistPasswordSaga)]);
}
