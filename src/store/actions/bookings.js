import { createAction } from "@reduxjs/toolkit";

// Booking details
export const GET_BOOKING_DETAILS_REQUEST = "[bookings] get booking details request";
export const GET_BOOKING_DETAILS_SUCCESS = "[bookings] get booking details sucessful";
export const GET_BOOKING_DETAILS_FAILURE = "[bookings] get booking details failure";

export const getBookingDetailsReqAction = payload => ({
  type: GET_BOOKING_DETAILS_REQUEST,
  payload: payload
});
export const getBookingDetailsSuccessAction = createAction(GET_BOOKING_DETAILS_SUCCESS);
export const getBookingDetailsFailureAction = createAction(GET_BOOKING_DETAILS_FAILURE);

// Get Bookings
export const GET_BOOKINGS_REQUEST = "[bookings] get bookings request";
export const GET_BOOKINGS_SUCCESS = "[bookings] get bookings sucessful";
export const GET_BOOKINGS_FAILURE = "[bookings] get bookings failure";

export const getBookingsReqAction = payload => ({
  type: GET_BOOKINGS_REQUEST,
  payload: payload
});
export const getBookingsSuccessAction = createAction(GET_BOOKINGS_SUCCESS);
export const getBookingsFailureAction = createAction(GET_BOOKINGS_FAILURE);

// Get Payment Type
export const GET_PAYMENT_TYPE_REQUEST = "[bookings] get payment type request";
export const GET_PAYMENT_TYPE_SUCCESS = "[bookings] get payment type sucessful";
export const GET_PAYMENT_TYPE_FAILURE = "[bookings] get payment type failure";

export const getPaymentTypeReqAction = payload => ({
  type: GET_PAYMENT_TYPE_REQUEST,
  payload: payload
});
export const getPaymentTypeSuccessAction = createAction(GET_PAYMENT_TYPE_SUCCESS);
export const getPaymentTypeFailureAction = createAction(GET_PAYMENT_TYPE_FAILURE);

// Create Bookings
export const CREATE_BOOKING_REQUEST = "[bookings] create bookings request";
export const CREATE_BOOKING_SUCCESS = "[bookings] create bookings sucessful";
export const CREATE_BOOKING_FAILURE = "[bookings] create bookings failure";

export const createBookingReqAction = payload => ({
  type: CREATE_BOOKING_REQUEST,
  payload: payload
});
export const createBookingSuccessAction = createAction(CREATE_BOOKING_SUCCESS);
export const createBookingFailureAction = createAction(CREATE_BOOKING_FAILURE);

// Modify Bookings
export const MODIFY_BOOKING_REQUEST = "[bookings] modify bookings request";
export const MODIFY_BOOKING_SUCCESS = "[bookings] modify bookings sucessful";
export const MODIFY_BOOKING_FAILURE = "[bookings] modify bookings failure";

export const modifyBookingReqAction = payload => ({
  type: MODIFY_BOOKING_REQUEST,
  payload: payload
});
export const modifyBookingSuccessAction = createAction(MODIFY_BOOKING_SUCCESS);
export const modifyBookingFailureAction = createAction(MODIFY_BOOKING_FAILURE);

// Modify Managerspeciality
export const MODIFY_MANAGERSPECIALITY_REQUEST = "[bookings] modify Managerspeciality request";
export const MODIFY_MANAGERSPECIALITY_SUCCESS = "[bookings] modify Managerspeciality sucessful";
export const MODIFY_MANAGERSPECIALITY_FAILURE = "[bookings] modify Managerspeciality failure";

export const modifyManagerSpecialityReqAction = payload => ({
  type: MODIFY_MANAGERSPECIALITY_REQUEST,
  payload: payload
});
export const modifyManagerSpecialitySuccessAction = createAction(MODIFY_MANAGERSPECIALITY_SUCCESS);
export const modifyManagerSpecialityFailureAction = createAction(MODIFY_MANAGERSPECIALITY_FAILURE);

// Modify Payment Type
export const MODIFY_PAYMENT_TYPE_REQUEST = "[bookings] modify payment type request";
export const MODIFY_PAYMENT_TYPE_SUCCESS = "[bookings] modify payment type sucessful";
export const MODIFY_PAYMENT_TYPE_FAILURE = "[bookings] modify payment type failure";

export const modifyPaymentTypeReqAction = payload => ({
  type: MODIFY_PAYMENT_TYPE_REQUEST,
  payload: payload
});
export const modifyPaymentTypeSuccessAction = createAction(MODIFY_PAYMENT_TYPE_SUCCESS);
export const modifyPaymentTypeFailureAction = createAction(MODIFY_PAYMENT_TYPE_FAILURE);

// Get Receipt
export const GET_RECEIPTS_REQUEST = "[bookings] get receipt request";
export const GET_RECEIPTS_SUCCESS = "[bookings] get receipt sucessful";
export const GET_RECEIPTS_FAILURE = "[bookings] get receipt failure";

export const getReceiptsReqAction = payload => ({
  type: GET_RECEIPTS_REQUEST,
  payload: payload
});
export const getReceiptsSuccessAction = createAction(GET_RECEIPTS_SUCCESS);
export const getReceiptsFailureAction = createAction(GET_RECEIPTS_FAILURE);

// CANCEL Booking
export const CANCEL_BOOKING_REQUEST = "[bookings] cancel booking request";
export const CANCEL_BOOKING_SUCCESS = "[bookings] cancel booking sucessful";
export const CANCEL_BOOKING_FAILURE = "[bookings] cancel booking failure";

export const cancelBookingReqAction = payload => ({
  type: CANCEL_BOOKING_REQUEST,
  payload: payload
});
export const cancelBookingSuccessAction = createAction(CANCEL_BOOKING_SUCCESS);
export const cancelBookingFailureAction = createAction(CANCEL_BOOKING_FAILURE);
