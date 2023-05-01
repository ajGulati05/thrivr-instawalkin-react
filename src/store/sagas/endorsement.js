import { takeEvery, put, call, all } from "redux-saga/effects";
import {
  GET_ALL_ENDORSEMENTS_REQUEST,
  getEndrosementsSuccessAction,
  getEndrosementsFailureAction
} from "../actions/endorsement";
import { endorsementApi } from "../../services";

// Therapist Information GetProfile
function* getAllEndorsementSaga({ payload }) {
  try {
    const response = yield call(endorsementApi.getAllEndorsements, payload);
    if (response && response.status) {
      yield put(getEndrosementsSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getEndrosementsFailureAction(e));
  }
}

export default function*() {
  yield all([takeEvery(GET_ALL_ENDORSEMENTS_REQUEST, getAllEndorsementSaga)]);
}
