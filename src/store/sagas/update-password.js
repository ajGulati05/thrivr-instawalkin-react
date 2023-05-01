import { push } from "connected-react-router";
import { takeEvery, put, call } from "redux-saga/effects";
import {
  updatePasswordSuccessAction,
  updatePasswordFailureAction,
  UPDATE_PASSWORD_REQUEST
} from "../actions/update-password";
import { authApi } from "../../services";
import pNotification from "../../components/PNotification";

function* updatePasswordSaga({ payload }) {
  try {
    const response = yield call(authApi.passwordResetComplete, payload);
    if (response && response.status) {
      const notifyMessage = {
        type: "success",
        message: "Password reset success!",
        description: "Your password has been reset. You can use new password for login"
      };
      pNotification(notifyMessage);
      yield put(updatePasswordSuccessAction(response));
      yield put(push("/login"));
    } else if (response && !response.status) {
      const notifyMessage = {
        type: "error",
        message: "Failed reset password!",
        description: response.errors
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    const notifyMessage = {
      type: "error",
      message: "Failed reset password",
      description: e.data.message
    };
    pNotification(notifyMessage);
    yield put(updatePasswordFailureAction(e));
  }
}

export default function*() {
  yield takeEvery(UPDATE_PASSWORD_REQUEST, updatePasswordSaga);
}
