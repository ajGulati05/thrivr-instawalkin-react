import { createAction } from "@reduxjs/toolkit";

// get all clients
export const GET_ALL_CLIENTS_REQUEST = "[clients] get all clients request";
export const GET_ALL_CLIENTS_SUCCESS = "[clients] get all clients sucessful";
export const GET_ALL_CLIENTS_FAILURE = "[clients] get all clients failure";

export const getAllClientsReqAction = payload => ({
  type: GET_ALL_CLIENTS_REQUEST,
  payload: payload
});
export const getAllClientsSuccessAction = createAction(GET_ALL_CLIENTS_SUCCESS);
export const getAllClientsFailureAction = createAction(GET_ALL_CLIENTS_FAILURE);

// Client Information
export const GET_CLIENT_DETAIL_REQUEST = "[clients] get client request";
export const GET_CLIENT_DETAIL_SUCCESS = "[clients] get client sucessful";
export const GET_CLIENT_DETAIL_FAILURE = "[clients] get client failure";

export const getClientDetailReqAction = payload => ({
  type: GET_CLIENT_DETAIL_REQUEST,
  payload: payload
});
export const getClientDetailSuccessAction = createAction(GET_CLIENT_DETAIL_SUCCESS);
export const getClientDetailFailureAction = createAction(GET_CLIENT_DETAIL_FAILURE);

// Client analytics
export const GET_CLIENT_ANALYTICS_REQUEST = "[clients] get client analytics request";
export const GET_CLIENT_ANALYTICS_SUCCESS = "[clients] get client analytics sucessful";
export const GET_CLIENT_ANALYTICS_FAILURE = "[clients] get client analytics failure";

export const getClientAnalyticsReqAction = payload => ({
  type: GET_CLIENT_ANALYTICS_REQUEST,
  payload: payload
});
export const getClientAnalyticsSuccessAction = createAction(GET_CLIENT_ANALYTICS_SUCCESS);
export const getClientAnalyticsFailureAction = createAction(GET_CLIENT_ANALYTICS_FAILURE);

// get client Bookings
export const GET_CLIENT_BOOKINGS_REQUEST = "[clients] get client bookings request";
export const GET_CLIENT_BOOKINGS_SUCCESS = "[clients] get client bookings sucessful";
export const GET_CLIENT_BOOKINGS_FAILURE = "[clients] get client bookings failure";

export const getClientBookingsReqAction = payload => ({
  type: GET_CLIENT_BOOKINGS_REQUEST,
  payload: payload
});
export const getClientBookingsSuccessAction = createAction(GET_CLIENT_BOOKINGS_SUCCESS);
export const getClientBookingsFailureAction = createAction(GET_CLIENT_BOOKINGS_FAILURE);

// Create Guest Client
export const CREATE_GUEST_CLIENT_REQUEST = "[guest] create guest client request";
export const CREATE_GUEST_CLIENT_SUCCESS = "[guest] create guest client sucessful";
export const CREATE_GUEST_CLIENT_FAILURE = "[guest] create guest client failure";
export const CREATE_GUEST_CLIENT_RESET = "[guest] create guest client reset";

export const createGuestClientReqAction = payload => ({
  type: CREATE_GUEST_CLIENT_REQUEST,
  payload: payload
});
export const createGuestClientSuccessAction = createAction(CREATE_GUEST_CLIENT_SUCCESS);
export const createGuestClientFailureAction = createAction(CREATE_GUEST_CLIENT_FAILURE);

// Update Guest
export const UPDATE_GUEST_REQUEST = "[therapist] guest update request";
export const UPDATE_GUEST_SUCCESS = "[therapist] guest update sucessful";
export const UPDATE_GUEST_FAILURE = "[therapist] guest update failure";

export const updateGuestReqAction = payload => ({
  type: UPDATE_GUEST_REQUEST,
  payload: payload
});
export const updateGuestSuccessAction = createAction(UPDATE_GUEST_SUCCESS);
export const updateGuestFailureAction = createAction(UPDATE_GUEST_FAILURE);

// Block Client
export const BLOCK_CLIENT_REQUEST = "[therapist] block update request";
export const BLOCK_CLIENT_SUCCESS = "[therapist] block update sucessful";
export const BLOCK_CLIENT_FAILURE = "[therapist] block update failure";

export const blockClientReqAction = payload => ({
  type: BLOCK_CLIENT_REQUEST,
  payload: payload
});
export const blockClientSuccessAction = createAction(BLOCK_CLIENT_SUCCESS);
export const blockClientFailureAction = createAction(BLOCK_CLIENT_FAILURE);

// Unblock Client
export const UNBLOCK_CLIENT_REQUEST = "[therapist] unblock update request";
export const UNBLOCK_CLIENT_SUCCESS = "[therapist] unblock update sucessful";
export const UNBLOCK_CLIENT_FAILURE = "[therapist] unblock update failure";

export const unblockClientReqAction = payload => ({
  type: UNBLOCK_CLIENT_REQUEST,
  payload: payload
});
export const unblockClientSuccessAction = createAction(UNBLOCK_CLIENT_SUCCESS);
export const unblockClientFailureAction = createAction(UNBLOCK_CLIENT_FAILURE);

// send email
export const SEND_EMAIL_REQUEST = "[client] send email request";
export const SEND_EMAIL_SUCCESS = "[client] send email sucessful";
export const SEND_EMAIL_FAILURE = "[client] send email failure";

export const sendEmailReqAction = payload => ({
  type: SEND_EMAIL_REQUEST,
  payload: payload
});
export const sendEmailSuccessAction = createAction(SEND_EMAIL_SUCCESS);
export const sendEmailFailureAction = createAction(SEND_EMAIL_FAILURE);

// send email to fill forms
export const SEND_EMAIL_FORM_REQUEST = "[client] send email form request";

export const sendEmailFormReqAction = payload => ({
  type: SEND_EMAIL_FORM_REQUEST,
  payload: payload
});

//isUserExist
export const USER_EXIST_REQUEST = "[client] user exist request";
export const USER_EXIST_SUCCESS = "[client] user exist sucessful";
export const USER_EXIST_FAILURE = "[client] user exist failure";
export const USER_EXIST_RESET = "[guest] user exist reset";

export const userExistReqAction = payload => ({
  type: USER_EXIST_REQUEST,
  payload: payload
});

export const userExistResAction = payload => ({
  type: USER_EXIST_RESET,
  payload: payload
});

export const userExistSuccessAction = createAction(USER_EXIST_SUCCESS);
export const userExistFailureAction = createAction(USER_EXIST_FAILURE);

//Intake Form
export const INTAKE_FORM_REQUEST = "intake form request";
export const INTAKE_FORM_SUCCESS = "intake form sucessful";
export const INTAKE_FORM_FAILURE = "intake form failure";

export const intakeFormReqAction = payload => ({
  type: INTAKE_FORM_REQUEST,
  payload: payload
});
export const intakeFormSuccessAction = createAction(INTAKE_FORM_SUCCESS);
export const intakeFormFailureAction = createAction(INTAKE_FORM_FAILURE);


// Client guests
export const CREATE_CLIENT_GUEST = "creating a new client guest";
export const createClientGuestAction = createAction(CREATE_CLIENT_GUEST);