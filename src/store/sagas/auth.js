import jwtDecode from "jwt-decode";
import { takeEvery, put, call, all } from "redux-saga/effects";
import { push } from "connected-react-router";
import {
  LOGIN_REQUEST,
  loginSuccessAction,
  loginFailureAction,
  REGISTER_REQUEST,
  registerSuccessAction,
  registerFailureAction,
  CHECK_AUTH_REQUEST,
  checkAuthSuccessAction,
  checkAuthFailureAction
} from "../actions/auth";
import { authApi, TokenStorage } from "../../services";
import pNotification from "../../components/PNotification";

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
      yield put(push("/dashboard"));
    }
  } catch (e) {
    const notifyMessage = {
      type: "error",
      message: "Login Failed",
      description: e.data.detail
    };
    pNotification(notifyMessage);
    yield put(loginFailureAction(e));
  }
}

// register
function* registerSaga({ payload }) {
  try {
    const response = yield call(authApi.registerApi, payload);
    const notifyMessage = {
      type: "success",
      message: "Register succed",
      description: "Account successfully created"
    };
    if (response && response.status) {
      yield put(registerSuccessAction(response.data));
      pNotification(notifyMessage);
      yield put(push("/login"));
    }
  } catch (e) {
    const notifyMessage = {
      type: "error",
      message: "Login Failed",
      description: e.data.detail
    };
    pNotification(notifyMessage);
    yield put(registerFailureAction(e));
  }
}

// check auth
function* checkAuthSaga({ payload }) {
  try {
    const response = yield call(authApi.checkAuth, payload);
    if (response && response.status) {
      yield put(checkAuthSuccessAction(response.data));
    }
  } catch (e) {
    yield put(checkAuthFailureAction(e));
  }
}

export default function*() {
  yield all([
    takeEvery(LOGIN_REQUEST, loginSaga),
    takeEvery(REGISTER_REQUEST, registerSaga),
    takeEvery(CHECK_AUTH_REQUEST, checkAuthSaga)
  ]);
}
