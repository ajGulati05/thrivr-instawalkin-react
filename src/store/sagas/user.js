import { takeEvery, put, call, all } from "redux-saga/effects";
import { GET_USERINFO_REQUEST, getUserInfoSuccessAction, getUserInfoFailureAction } from "../actions/user";
import { authApi } from "../../services";

function* getUserInfoSaga() {
  try {
    const response = yield call(authApi.getUserInfo);
    if (response) {
      yield put(getUserInfoSuccessAction(response));
    }
  } catch (e) {
    yield put(getUserInfoFailureAction(e));
  }
}

export default function*() {
  yield all([takeEvery(GET_USERINFO_REQUEST, getUserInfoSaga)]);
}
