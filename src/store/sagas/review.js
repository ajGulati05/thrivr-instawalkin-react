import { takeEvery, put, call, all } from "redux-saga/effects";
import {
  GET_REVIEWS_REQUEST,
  getReviewsSuccessAction,
  getReviewsFailureAction,
  CHANGE_REVIEW,
  changeReviewSuccessAction
} from "../actions/review";
import { reviewApi } from "../../services";

// Therapist Information GetProfile
function* getReviewsSaga({ payload }) {

  try {
    const response = yield call(reviewApi.getTherapistReviews, payload);
    if (response && response.status) {
      const data = response.data.meta;
      const newData = response.data.data;

      yield put(getReviewsSuccessAction({data, newData, search: payload.search, searchScroll: payload.searchScroll}));
    }
  } catch (e) {
    yield put(getReviewsFailureAction(e));
  }
}
// Therapist Information GetProfile
function* changeReviewSaga({ payload }) {
  yield put(changeReviewSuccessAction(payload));
}
export default function*() {
  yield all([takeEvery(GET_REVIEWS_REQUEST, getReviewsSaga), takeEvery(CHANGE_REVIEW, changeReviewSaga)]);
}
