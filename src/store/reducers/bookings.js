import { createReducer } from "@reduxjs/toolkit";
import {
  GET_BOOKING_DETAILS_REQUEST,
  GET_BOOKING_DETAILS_SUCCESS,
  GET_BOOKING_DETAILS_FAILURE,
  GET_BOOKINGS_REQUEST,
  GET_BOOKINGS_SUCCESS,
  GET_BOOKINGS_FAILURE,
  CREATE_BOOKING_REQUEST,
  CREATE_BOOKING_SUCCESS,
  CREATE_BOOKING_FAILURE,
  MODIFY_BOOKING_REQUEST,
  MODIFY_BOOKING_SUCCESS,
  MODIFY_BOOKING_FAILURE,
  MODIFY_MANAGERSPECIALITY_REQUEST,
  MODIFY_MANAGERSPECIALITY_SUCCESS,
  MODIFY_MANAGERSPECIALITY_FAILURE,
  MODIFY_PAYMENT_TYPE_REQUEST,
  MODIFY_PAYMENT_TYPE_SUCCESS,
  MODIFY_PAYMENT_TYPE_FAILURE,
  CANCEL_BOOKING_REQUEST,
  CANCEL_BOOKING_SUCCESS,
  CANCEL_BOOKING_FAILURE,
  GET_RECEIPTS_REQUEST,
  GET_RECEIPTS_SUCCESS,
  GET_RECEIPTS_FAILURE,
  GET_PAYMENT_TYPE_REQUEST,
  GET_PAYMENT_TYPE_SUCCESS,
  GET_PAYMENT_TYPE_FAILURE
} from "../actions/bookings";

export const initialState = {
  bookings: {},
  bookingDetails: {},
  newBooking: {},
  modifyBooking: {},
  confirmCancel: {},
  receipts: {},
  paymentType: {},
  loading: false
};

// Booking Details
const getBookingDetailsReq = state => ({ ...state, loading: true });
const getBookingDetailsSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  bookingDetails: payload
});
const getBookingDetailsFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// Bookings
const getBookingsReq = state => ({ ...state, loading: true });
const getBookingsSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  bookings: payload,
  error: {}
});
const getBookingsFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// Payment Type
const getPaymentTypeReq = state => ({ ...state, loading: true });
const getPaymentTypeSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  paymentType: payload,
  error: {}
});
const getPaymentTypeFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// Create Bookings
const createBookingReq = state => ({ ...state, loading: true });
const createBookingSuccess = (state, { payload }) => ({
  ...state,
  newBooking: payload,
  bookingDetails: payload,
  loading: false,
  error: {}
});
const createBookingFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// Modify Bookings
const modifyBookingReq = state => ({ ...state, loading: true });
const modifyBookingSuccess = (state, { payload }) => ({
  ...state,
  modifyBooking: payload,
  loading: false
});
const modifyBookingFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// Modify Managerspeciality
const modifyManagerSpecialityReq = state => ({ ...state, loading: true });
const modifyManagerSpecialitySuccess = (state, { payload }) => ({
  ...state,
  modifyBooking: payload,
  loading: false
});
const modifyManagerSpecialityFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// Modify Payment Type
const modifyPaymentTypeReq = state => ({ ...state, loading: true });
const modifyPaymentTypeSuccess = (state, { payload }) => ({
  ...state,
  modifyBooking: payload,
  loading: false
});
const modifyPaymentTypeFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// Receipts
const getReceiptsReq = state => ({ ...state, loading: true });
const getReceiptsSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  receipts: payload
});
const getReceiptsFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// Receipts
const cancelBookingReq = state => ({ ...state, loading: true });
const cancelBookingSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  confirmCancel: payload
});
const cancelBookingFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

const bookingReducer = createReducer(initialState, {
  [GET_BOOKING_DETAILS_REQUEST]: getBookingDetailsReq,
  [GET_BOOKING_DETAILS_SUCCESS]: getBookingDetailsSuccess,
  [GET_BOOKING_DETAILS_FAILURE]: getBookingDetailsFailure,
  [GET_BOOKINGS_REQUEST]: getBookingsReq,
  [GET_BOOKINGS_SUCCESS]: getBookingsSuccess,
  [GET_BOOKINGS_FAILURE]: getBookingsFailure,
  [CREATE_BOOKING_REQUEST]: createBookingReq,
  [CREATE_BOOKING_SUCCESS]: createBookingSuccess,
  [CREATE_BOOKING_FAILURE]: createBookingFailure,
  [MODIFY_BOOKING_REQUEST]: modifyBookingReq,
  [MODIFY_BOOKING_SUCCESS]: modifyBookingSuccess,
  [MODIFY_BOOKING_FAILURE]: modifyBookingFailure,
  [MODIFY_MANAGERSPECIALITY_REQUEST]: modifyManagerSpecialityReq,
  [MODIFY_MANAGERSPECIALITY_SUCCESS]: modifyManagerSpecialitySuccess,
  [MODIFY_MANAGERSPECIALITY_FAILURE]: modifyManagerSpecialityFailure,
  [MODIFY_PAYMENT_TYPE_REQUEST]: modifyPaymentTypeReq,
  [MODIFY_PAYMENT_TYPE_SUCCESS]: modifyPaymentTypeSuccess,
  [MODIFY_PAYMENT_TYPE_FAILURE]: modifyPaymentTypeFailure,
  [GET_RECEIPTS_REQUEST]: getReceiptsReq,
  [GET_RECEIPTS_SUCCESS]: getReceiptsSuccess,
  [GET_RECEIPTS_FAILURE]: getReceiptsFailure,
  [CANCEL_BOOKING_REQUEST]: cancelBookingReq,
  [CANCEL_BOOKING_SUCCESS]: cancelBookingSuccess,
  [CANCEL_BOOKING_FAILURE]: cancelBookingFailure,
  [GET_PAYMENT_TYPE_REQUEST]: getPaymentTypeReq,
  [GET_PAYMENT_TYPE_SUCCESS]: getPaymentTypeSuccess,
  [GET_PAYMENT_TYPE_FAILURE]: getPaymentTypeFailure
});

export default bookingReducer;
