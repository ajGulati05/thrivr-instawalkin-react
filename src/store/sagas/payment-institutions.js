import { takeEvery, put, call, all } from "redux-saga/effects";
import {
  GET_REPORT_INST_REQUEST,
  getReportInstSuccessAction,
  getReportInstFailureAction
} from "../actions/payment-institutions";
import { paymentInstitutionsApi } from "../../services";

// get report institutions
function* getReportInstSaga() {
  try {
    const response = yield call(paymentInstitutionsApi.getReportInst);
    if (response) {
      yield put(getReportInstSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getReportInstFailureAction(e));
  }
}

export default function*() {
  yield all([takeEvery(GET_REPORT_INST_REQUEST, getReportInstSaga)]);
}
