import { createReducer } from "@reduxjs/toolkit";
import {
  GET_ALL_CLIENTS_REQUEST,
  GET_ALL_CLIENTS_SUCCESS,
  GET_ALL_CLIENTS_FAILURE,
  GET_CLIENT_DETAIL_REQUEST,
  GET_CLIENT_DETAIL_SUCCESS,
  GET_CLIENT_DETAIL_FAILURE,
  GET_CLIENT_ANALYTICS_REQUEST,
  GET_CLIENT_ANALYTICS_SUCCESS,
  GET_CLIENT_ANALYTICS_FAILURE,
  GET_CLIENT_BOOKINGS_REQUEST,
  GET_CLIENT_BOOKINGS_SUCCESS,
  GET_CLIENT_BOOKINGS_FAILURE,
  CREATE_GUEST_CLIENT_REQUEST,
  CREATE_GUEST_CLIENT_SUCCESS,
  CREATE_GUEST_CLIENT_FAILURE,
  CREATE_GUEST_CLIENT_RESET,
  UPDATE_GUEST_REQUEST,
  UPDATE_GUEST_SUCCESS,
  UPDATE_GUEST_FAILURE,
  BLOCK_CLIENT_REQUEST,
  BLOCK_CLIENT_SUCCESS,
  BLOCK_CLIENT_FAILURE,
  UNBLOCK_CLIENT_REQUEST,
  UNBLOCK_CLIENT_SUCCESS,
  UNBLOCK_CLIENT_FAILURE,
  SEND_EMAIL_REQUEST,
  SEND_EMAIL_SUCCESS,
  SEND_EMAIL_FAILURE,
  USER_EXIST_REQUEST,
  USER_EXIST_SUCCESS,
  USER_EXIST_FAILURE,
  USER_EXIST_RESET,
  INTAKE_FORM_REQUEST,
  INTAKE_FORM_SUCCESS,
  INTAKE_FORM_FAILURE
} from "../actions/clients";

export const initialState = {
  allClients: {},
  clientsDetail: {},
  clientsAnalytics: {},
  clientsBookings: {},
  guestClient: {},
  userExist: {},
  intakeForm: {},
  loading: false
};

// Get ALl clients details
const getAllClientsReq = state => ({ ...state, loading: true });
const getAllClientsSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  allClients: {
    ...payload.data,
    data: !payload.search ? { ...state.allClients.data, ...payload.newData } : { ...payload.newData }
  }
});
const getAllClientsFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// Get Client Details
const getClientDetailReq = state => ({ ...state, loading: true });
const getClientDetailSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  clientsDetail: payload,
  guestClient: {}
});
const getClientDetailFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// Get Client analytics
const getClientAnalyticsReq = state => ({ ...state, loading: true });
const getClientAnalyticsSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  clientsAnalytics: payload
});
const getClientAnalyticsFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// Get Client bookings
const getClientBookingsReq = state => ({ ...state, loading: true });
const getClientBookingsSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  clientsBookings: payload
});
const getClientBookingsFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

//create guest client
const createGuestClientReq = state => ({ ...state, loading: true });
const createGuestClientSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  guestClient: payload
});
const createGuestClientFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

const createGuestClientRest = (state, { payload }) => ({
  ...state,
  guestClient: {}
});

//Update guest
const updateGuestReq = state => ({ ...state, loading: true });
const updateGuestSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  guestClient: payload
});
const updateGuestFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

//Block client
const blockClientReq = state => ({ ...state, loading: true });
const blockClientSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  clientsDetail: payload
});
const blockClientFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

//Unblock client
const unblockClientReq = state => ({ ...state, loading: true });
const unblockClientSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  clientsDetail: payload
});
const unblockClientFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// send email
const sendEmailReq = state => ({ ...state, loading: true });
const sendEmailSuccess = (state, { payload }) => ({
  ...state,
  loading: false
});
const sendEmailFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// user exist
const userExistReq = state => ({ ...state, loading: true });
const userExistSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  userExist: payload
});
const userExistFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

const userExistRest = state => ({
  ...state,
  userExist: {}
});

// Intake Form
const intakeFormReq = state => ({ ...state, loading: true });
const intakeFormSuccess = (state, { payload }) => ({
  ...state,
  intakeForm: payload,
  loading: false
});
const intakeFormFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

const clientReducer = createReducer(initialState, {
  [GET_ALL_CLIENTS_REQUEST]: getAllClientsReq,
  [GET_ALL_CLIENTS_SUCCESS]: getAllClientsSuccess,
  [GET_ALL_CLIENTS_FAILURE]: getAllClientsFailure,
  [GET_CLIENT_DETAIL_REQUEST]: getClientDetailReq,
  [GET_CLIENT_DETAIL_SUCCESS]: getClientDetailSuccess,
  [GET_CLIENT_DETAIL_FAILURE]: getClientDetailFailure,
  [CREATE_GUEST_CLIENT_REQUEST]: createGuestClientReq,
  [CREATE_GUEST_CLIENT_SUCCESS]: createGuestClientSuccess,
  [CREATE_GUEST_CLIENT_FAILURE]: createGuestClientFailure,
  [CREATE_GUEST_CLIENT_RESET]: createGuestClientRest,
  [UPDATE_GUEST_REQUEST]: updateGuestReq,
  [UPDATE_GUEST_SUCCESS]: updateGuestSuccess,
  [UPDATE_GUEST_FAILURE]: updateGuestFailure,
  [GET_CLIENT_ANALYTICS_REQUEST]: getClientAnalyticsReq,
  [GET_CLIENT_ANALYTICS_SUCCESS]: getClientAnalyticsSuccess,
  [GET_CLIENT_ANALYTICS_FAILURE]: getClientAnalyticsFailure,
  [BLOCK_CLIENT_REQUEST]: blockClientReq,
  [BLOCK_CLIENT_SUCCESS]: blockClientSuccess,
  [BLOCK_CLIENT_FAILURE]: blockClientFailure,
  [UNBLOCK_CLIENT_REQUEST]: unblockClientReq,
  [UNBLOCK_CLIENT_SUCCESS]: unblockClientSuccess,
  [UNBLOCK_CLIENT_FAILURE]: unblockClientFailure,
  [GET_CLIENT_BOOKINGS_REQUEST]: getClientBookingsReq,
  [GET_CLIENT_BOOKINGS_SUCCESS]: getClientBookingsSuccess,
  [GET_CLIENT_BOOKINGS_FAILURE]: getClientBookingsFailure,
  [SEND_EMAIL_REQUEST]: sendEmailReq,
  [SEND_EMAIL_SUCCESS]: sendEmailSuccess,
  [SEND_EMAIL_FAILURE]: sendEmailFailure,
  [USER_EXIST_REQUEST]: userExistReq,
  [USER_EXIST_SUCCESS]: userExistSuccess,
  [USER_EXIST_FAILURE]: userExistFailure,
  [USER_EXIST_RESET]: userExistRest,
  [INTAKE_FORM_REQUEST]: intakeFormReq,
  [INTAKE_FORM_SUCCESS]: intakeFormSuccess,
  [INTAKE_FORM_FAILURE]: intakeFormFailure
});

export default clientReducer;
