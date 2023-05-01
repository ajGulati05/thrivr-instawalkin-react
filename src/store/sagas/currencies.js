import { takeEvery, put, call } from "redux-saga/effects";
import { getCurrenciesSuccessAction, getCurrenciesFailureAction, GET_CURRENCIES_REQUEST } from "../actions/currencies";
import { currenciesApi } from "../../services";

function* getCurrenciesSaga({ payload }) {
  try {
    const response = yield call(currenciesApi.getCurrencies, payload);
    if (response) {
      yield put(getCurrenciesSuccessAction(response));
    }
  } catch (e) {
    yield put(getCurrenciesFailureAction(e));
  }
}

export default function*() {
  yield takeEvery(GET_CURRENCIES_REQUEST, getCurrenciesSaga);
}
