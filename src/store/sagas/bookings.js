import { takeEvery, put, call, all } from "redux-saga/effects";
import { globalLoaderIncrementAction, globaLoaderDecrementAction } from "../actions/global";
import {
  GET_BOOKING_DETAILS_REQUEST,
  getBookingDetailsSuccessAction,
  getBookingDetailsFailureAction,
  GET_BOOKINGS_REQUEST,
  getBookingsSuccessAction,
  getBookingsFailureAction,
  CREATE_BOOKING_REQUEST,
  createBookingSuccessAction,
  createBookingFailureAction,
  MODIFY_BOOKING_REQUEST,
  modifyBookingSuccessAction,
  modifyBookingFailureAction,
  GET_RECEIPTS_REQUEST,
  getReceiptsSuccessAction,
  getReceiptsFailureAction,
  MODIFY_MANAGERSPECIALITY_REQUEST,
  modifyManagerSpecialitySuccessAction,
  modifyManagerSpecialityFailureAction,
  MODIFY_PAYMENT_TYPE_REQUEST,
  modifyPaymentTypeSuccessAction,
  modifyPaymentTypeFailureAction,
  CANCEL_BOOKING_REQUEST,
  cancelBookingSuccessAction,
  cancelBookingFailureAction,
  GET_PAYMENT_TYPE_REQUEST,
  getPaymentTypeSuccessAction,
  getPaymentTypeFailureAction
} from "../actions/bookings";
import { bookingsApi } from "../../services";
import pNotification from "../../components/PNotification";

// Booking Details
function* getBookingDetailsSaga({ payload }) {
  try {
    yield put(globalLoaderIncrementAction());
    const response = yield call(bookingsApi.bookingDetails, payload);
    if (response && response.status) {
      yield put(getBookingDetailsSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getBookingDetailsFailureAction(e));
  } finally {
    yield put(globaLoaderDecrementAction());
  }
}

// Bookings
function* getBookingsSaga({ payload }) {
  try {
    yield put(globalLoaderIncrementAction());
    const response = yield call(bookingsApi.bookings, payload);
    if (response && response.status) {
      yield put(getBookingsSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getBookingsFailureAction(e));
  } finally {
    yield put(globaLoaderDecrementAction());
  }
}

// Payment Type
function* getPaymentTypeSaga({ payload }) {
  try {
    yield put(globalLoaderIncrementAction());
    const response = yield call(bookingsApi.getPaymentType, payload);
    if (response && response.status) {
      yield put(getPaymentTypeSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getPaymentTypeFailureAction(e));
  } finally {
    yield put(globaLoaderDecrementAction());
  }
}

// Create Bookings
function* createBookingSaga({ payload }) {
  try {
    yield put(globalLoaderIncrementAction());
    const response = yield call(bookingsApi.createBooking, payload);
    if (response && response.status) {
      const notifyMessage = {
        type: "success",
        message: "Booking Created Successfully!"
      };
      pNotification(notifyMessage);
      yield put(createBookingSuccessAction(response.data));
    }
  } catch (e) {
    yield put(createBookingFailureAction(e.data));
  } finally {
    yield put(globaLoaderDecrementAction());
  }
}

// Modify Bookings
function* modifyBookingSaga({ payload }) {
  try {
    const response = yield call(bookingsApi.modifyBooking, payload);

    if (response || response.status) {
      if (!response.status) {
        const notifyMessage = {
          type: "success",
          message: "Booking Updated Successfully!"
        };
        pNotification(notifyMessage);
      }
      yield put(modifyBookingSuccessAction(response));
    }
  } catch (e) {
    yield put(modifyBookingFailureAction(e));
  }
}

// Modify ManagerSpeciality
function* modifyManagerSpecialitySaga({ payload }) {
  try {
    const response = yield call(bookingsApi.modifyManagerSpeciality, payload);
    if (response || response.status) {
      const notifyMessage = {
        type: "success",
        message: "Booking Updated Successfully!"
      };
      pNotification(notifyMessage);
      yield put(modifyManagerSpecialitySuccessAction(response));
    }
  } catch (e) {
    yield put(modifyManagerSpecialityFailureAction(e));
  }
}

// Modify Payment Type
function* modifyPaymentTypeSaga({ payload }) {
  try {
    const response = yield call(bookingsApi.modifyPaymentType, payload);
    if (response) {
      const notifyMessage = {
        type: "success",
        message: "Booking Updated Successfully!"
      };
      pNotification(notifyMessage);
      yield put(modifyPaymentTypeSuccessAction(response));
    }
  } catch (e) {
    const notifyMessage = {
      type: "error",
      message: e.message
    };
    pNotification(notifyMessage);
    yield put(modifyPaymentTypeFailureAction(e));
  }
}

// Receipts
function* getReceiptsSaga({ payload }) {
  try {
    yield put(globalLoaderIncrementAction());
    const response = yield call(bookingsApi.getReceipts, payload);
    if (response && response.status) {
      yield put(getReceiptsSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getReceiptsFailureAction(e));
  } finally {
    yield put(globaLoaderDecrementAction());
  }
}

// Receipts
function* cancelBookingSaga({ payload }) {
  try {
    yield put(globalLoaderIncrementAction());
    const response = yield call(bookingsApi.cancelBooking, payload);
    if (response && response.status) {
      if (payload.url) {
        const notifyMessage = {
          type: "success",
          message: "Booking Cancelled Successfully!"
        };
        pNotification(notifyMessage);
      }

      yield put(cancelBookingSuccessAction(response));
    }
  } catch (e) {
    yield put(cancelBookingFailureAction(e));
  } finally {
    yield put(globaLoaderDecrementAction());
  }
}

export default function*() {
  yield all([
    takeEvery(GET_BOOKING_DETAILS_REQUEST, getBookingDetailsSaga),
    takeEvery(GET_BOOKINGS_REQUEST, getBookingsSaga),
    takeEvery(CREATE_BOOKING_REQUEST, createBookingSaga),
    takeEvery(MODIFY_BOOKING_REQUEST, modifyBookingSaga),
    takeEvery(GET_RECEIPTS_REQUEST, getReceiptsSaga),
    takeEvery(MODIFY_MANAGERSPECIALITY_REQUEST, modifyManagerSpecialitySaga),
    takeEvery(MODIFY_PAYMENT_TYPE_REQUEST, modifyPaymentTypeSaga),
    takeEvery(CANCEL_BOOKING_REQUEST, cancelBookingSaga),
    takeEvery(GET_PAYMENT_TYPE_REQUEST, getPaymentTypeSaga)
  ]);
}
