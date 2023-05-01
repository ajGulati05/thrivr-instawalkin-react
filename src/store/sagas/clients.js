import { takeEvery, put, call, all } from "redux-saga/effects";
import { globaLoaderDecrementAction, globalLoaderIncrementAction } from "../actions/global";
import {
  GET_ALL_CLIENTS_REQUEST,
  getAllClientsSuccessAction,
  getAllClientsFailureAction,
  GET_CLIENT_DETAIL_REQUEST,
  getClientDetailSuccessAction,
  getClientDetailFailureAction,
  GET_CLIENT_ANALYTICS_REQUEST,
  getClientAnalyticsSuccessAction,
  getClientAnalyticsFailureAction,
  GET_CLIENT_BOOKINGS_REQUEST,
  getClientBookingsSuccessAction,
  getClientBookingsFailureAction,
  CREATE_GUEST_CLIENT_REQUEST,
  createGuestClientSuccessAction,
  createGuestClientFailureAction,
  UPDATE_GUEST_REQUEST,
  updateGuestSuccessAction,
  updateGuestFailureAction,
  BLOCK_CLIENT_REQUEST,
  blockClientSuccessAction,
  blockClientFailureAction,
  UNBLOCK_CLIENT_REQUEST,
  unblockClientSuccessAction,
  unblockClientFailureAction,
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_FORM_REQUEST,
  sendEmailSuccessAction,
  sendEmailFailureAction,
  USER_EXIST_REQUEST,
  userExistSuccessAction,
  userExistFailureAction,
  INTAKE_FORM_REQUEST,
  intakeFormSuccessAction,
  intakeFormFailureAction,
  CREATE_CLIENT_GUEST
} from "../actions/clients";
import pNotification from "../../components/PNotification";
import { clientsApi } from "../../services";

// get all Clients
function* getAllClientsSaga({ payload }) {
  try {
    const response = yield call(clientsApi.getAllClients, payload);
    if (response && response.status) {
      const data = response.patients;
      const newData = data.data;
      delete data.data;
      yield put(getAllClientsSuccessAction({ data, newData, search: payload.search }));
    }
  } catch (e) {
    yield put(getAllClientsFailureAction(e));
  }
}

// get Client Detail
function* getClientDetailSaga({ payload }) {
  try {
    yield put(globalLoaderIncrementAction());
    const response = yield call(clientsApi.getClientDetails, payload);
    if (response && response.status) {
      yield put(getClientDetailSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getClientDetailFailureAction(e));
  } finally {
    yield put(globaLoaderDecrementAction());
  }
}

// get Client Analytics
function* getClientAnalyticsSaga({ payload }) {
  try {
    const response = yield call(clientsApi.getClientAnalytics, payload);
    if (response) {
      yield put(getClientAnalyticsSuccessAction(response));
    }
  } catch (e) {
    yield put(getClientAnalyticsFailureAction(e));
  }
}

// get Client bookings
function* getClientBookingsSaga({ payload }) {
  try {
    yield put(globalLoaderIncrementAction());
    const response = yield call(clientsApi.getClientBookings, payload);
    if (response && response.data.status) {
      yield put(getClientBookingsSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getClientBookingsFailureAction(e));
  } finally {
    yield put(globaLoaderDecrementAction());
  }
}

// create Guest Client
function* createGuestClientSaga({ payload }) {
  try {
    const response = yield call(clientsApi.createGuestClient, payload);
    if (response && response.status) {
      yield put(createGuestClientSuccessAction(response.data));
      const notifyMessage = {
        type: "success",
        message: "Guest Created"
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    yield put(createGuestClientFailureAction(e));
    const notifyMessage = {
      type: "error",
      message: e.data.message
    };
    pNotification(notifyMessage);
  }
}

// update guest
function* updateGuestSaga({ payload }) {
  try {
    const response = yield call(clientsApi.updateGuest, payload);
    if (response && response.status) {
      yield put(updateGuestSuccessAction(response.data));
      const notifyMessage = {
        type: "success",
        message: "Guest Updated"
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    yield put(updateGuestFailureAction(e));
  }
}

// Block Client
function* blockClientSaga({ payload }) {
  try {
    const response = yield call(clientsApi.blockClient, payload);
    if (response && response.status) {
      yield put(blockClientSuccessAction(response.data));
      const notifyMessage = {
        type: "success",
        message: "Client Blocked Succesfully"
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    yield put(blockClientFailureAction(e));
  }
}

// Unblock Client
function* unblockClientSaga({ payload }) {
  try {
    const response = yield call(clientsApi.unblockClient, payload);
    if (response && response.status) {
      yield put(unblockClientSuccessAction(response.data));
      const notifyMessage = {
        type: "success",
        message: "Client Unblocked Succesfully"
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    yield put(unblockClientFailureAction(e));
  }
}

// Send email
function* sendEmailSaga({ payload }) {
  try {
    const response = yield call(clientsApi.sendEmail, payload);
    if (response && response.status) {
      yield put(sendEmailSuccessAction(response.data));
      const notifyMessage = {
        type: "success",
        message: response.message
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    yield put(sendEmailFailureAction(e));
    const notifyMessage = {
      type: "error",
      message: e.message
    };
    pNotification(notifyMessage);
  }
}

// Send email to fill form
function* sendEmailFormSaga({ payload }) {
  try {
    const response = yield call(clientsApi.sendEmailFormFills, payload);
    if (response && response.status) {
      yield put(sendEmailSuccessAction(response.data));
      const notifyMessage = {
        type: "success",
        message: response.message
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    yield put(sendEmailFailureAction(e));
    const notifyMessage = {
      type: "error",
      message: e.message
    };
    pNotification(notifyMessage);
  }
}

// user exist
function* userExistSaga({ payload }) {
  try {
    const response = yield call(clientsApi.userExist, payload);
    if (response && response.status) {
      yield put(userExistSuccessAction(response.patients.data));
    }
  } catch (e) {
    yield put(userExistFailureAction(e));
  }
}

// intake form
function* intakeFormSaga({ payload }) {
  try {
    yield put(globalLoaderIncrementAction());
    const response = yield call(clientsApi.intakeForm, payload);
    if (response && response.status) {
      yield put(intakeFormSuccessAction(response.data));
    }
  } catch (e) {
    yield put(intakeFormFailureAction(e));
  } finally {
    yield put(globaLoaderDecrementAction());
  }
}

function* createClientGuest({payload}){
  try {
    yield put(globalLoaderIncrementAction());
    const response = yield call(clientsApi.createClientGuest, payload);
  } catch (e) {
  } finally {
    yield put(globaLoaderDecrementAction());
  }
}

export default function*() {
  yield all([
    takeEvery(GET_ALL_CLIENTS_REQUEST, getAllClientsSaga),
    takeEvery(GET_CLIENT_DETAIL_REQUEST, getClientDetailSaga),
    takeEvery(GET_CLIENT_ANALYTICS_REQUEST, getClientAnalyticsSaga),
    takeEvery(CREATE_GUEST_CLIENT_REQUEST, createGuestClientSaga),
    takeEvery(UPDATE_GUEST_REQUEST, updateGuestSaga),
    takeEvery(BLOCK_CLIENT_REQUEST, blockClientSaga),
    takeEvery(UNBLOCK_CLIENT_REQUEST, unblockClientSaga),
    takeEvery(GET_CLIENT_BOOKINGS_REQUEST, getClientBookingsSaga),
    takeEvery(SEND_EMAIL_REQUEST, sendEmailSaga),
    takeEvery(SEND_EMAIL_FORM_REQUEST, sendEmailFormSaga),
    takeEvery(USER_EXIST_REQUEST, userExistSaga),
    takeEvery(INTAKE_FORM_REQUEST, intakeFormSaga),
    takeEvery(CREATE_CLIENT_GUEST,createClientGuest)
  ]);
}
