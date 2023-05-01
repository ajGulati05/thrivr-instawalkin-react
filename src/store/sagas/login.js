import jwtDecode from "jwt-decode";
import { takeEvery, put, call } from "redux-saga/effects";
import { push } from "connected-react-router";
import { loginSuccessAction, loginFailureAction, LOGIN_REQUEST } from "../actions/login";
import { authApi, TokenStorage } from "../../services";
import { getProfileReqAction } from "../actions/profile";
import { getAllModalitiesReqAction,getTherapistModalitiesReqAction,getAllSubModalitiesReqAction,getTherapistSubModalitiesReqAction } from "../actions/modalities";
import {getAllDurationReqAction,getThreapistDurationReqAction } from "../actions/duration";
import pNotification from "../../components/PNotification";
import { globaLoaderDecrementAction, globalLoaderIncrementAction } from "../actions/global";
function* loginSaga({ payload }) {
  try {
    const response = yield call(authApi.loginApi, payload);
    if (response && response.status) {
      yield put(loginSuccessAction(response.data));
      TokenStorage.storeAccessAndRefreshToken(
        response.data.access_token,
        response.data.refresh_token,
        jwtDecode(response.data.access_token).jti // unique identifier for the token: - used instead of user_id
      );
      yield put(globalLoaderIncrementAction());
      //startup function
      yield put(getProfileReqAction());
      yield put(getAllModalitiesReqAction());
      yield put(getTherapistModalitiesReqAction());
      yield put(getAllSubModalitiesReqAction());
      yield put(getTherapistSubModalitiesReqAction());
      yield put(getAllDurationReqAction());
      yield put(getThreapistDurationReqAction());
      yield put(push("/dashboard"));
    } else if (response && !response.status) {
      const notifyMessage = {
        type: "error",
        message: "Login Failed",
        description: response.data.message
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    const notifyMessage = {
      type: "error",
      message: "Login Failed",
      description: e.data.data.message
    };
    pNotification(notifyMessage);
    yield put(loginFailureAction(e));
  }
   finally {
    yield put(globaLoaderDecrementAction());
  }
}

export default function*() {
  yield takeEvery(LOGIN_REQUEST, loginSaga);
}
