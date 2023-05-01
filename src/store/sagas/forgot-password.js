import { push } from "connected-react-router";
import { takeEvery, put, call } from "redux-saga/effects";
import {
  forgotPasswordSuccessAction,
  forgotPasswordFailureAction,
  FORGOT_PASSWORD_REQUEST
} from "../actions/forgot-password";
import { authApi } from "../../services";
import pNotification from "../../components/PNotification";

function* forgotPasswordSaga({ payload }) {
  try {
    const response = yield call(authApi.resetPasswordEmail, payload);
    if (response && response.status) {
      const { message } = response;
      const notifyMessage = {
        type: "success",
        message: "Sending password reset link success!",
        description: message
      };
      pNotification(notifyMessage);
      yield put(forgotPasswordSuccessAction());
      yield put(push("/update-password"));
    } else if (response && !response.status) {
      const { errors } = response;
      const notifyMessage = {
        type: "error",
        message: "Sending password reset link error!",
        description: errors
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    const notifyMessage = {
      type: "error",
      message: "Sending Password reset link failed!",
      description: "User with this email and username does not exist"
    };
    pNotification(notifyMessage);
    yield put(forgotPasswordFailureAction(e));
  }
}

export default function*() {
  yield takeEvery(FORGOT_PASSWORD_REQUEST, forgotPasswordSaga);
}
