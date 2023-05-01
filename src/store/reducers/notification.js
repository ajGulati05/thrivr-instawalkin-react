import { createReducer } from "@reduxjs/toolkit";
import {
  GET_THERAPIST_NOTIFICATION_REQUEST,
  GET_THERAPIST_NOTIFICATION_SUCCESS,
  GET_THERAPIST_NOTIFICATION_FAILURE,
  UPDATE_THERAPIST_NOTIFICATION_REQUEST,
  UPDATE_THERAPIST_NOTIFICATION_SUCCESS,
  UPDATE_THERAPIST_NOTIFICATION_FAILURE
} from "../actions/notification";

export const initialState = {
  therapistNotifications: {},
  loading: false
};

// Get ALl Durations
const getTherapistNotificationReq = state => ({ ...state, loading: true });
const getTherapistNotificationSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  therapistNotifications: payload
});
const getAllTherapistNotificationFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

//Update Therapist Duration
const updateTherapistNotificationReq = state => ({ ...state, loading: true });
const updateTherapistNotificationSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  therapistNotifications: payload
});
const updateTherapistNotificationFaiure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

const notificationReducer = createReducer(initialState, {
  [GET_THERAPIST_NOTIFICATION_REQUEST]: getTherapistNotificationReq,
  [GET_THERAPIST_NOTIFICATION_SUCCESS]: getTherapistNotificationSuccess,
  [GET_THERAPIST_NOTIFICATION_FAILURE]: getAllTherapistNotificationFailure,
  [UPDATE_THERAPIST_NOTIFICATION_REQUEST]: updateTherapistNotificationReq,
  [UPDATE_THERAPIST_NOTIFICATION_SUCCESS]: updateTherapistNotificationSuccess,
  [UPDATE_THERAPIST_NOTIFICATION_FAILURE]: updateTherapistNotificationFaiure
});

export default notificationReducer;
