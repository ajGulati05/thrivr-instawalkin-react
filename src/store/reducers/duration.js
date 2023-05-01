import { createReducer } from "@reduxjs/toolkit";
import {
  GET_ALL_DURATION_REQUEST,
  GET_ALL_DURATION_SUCCESS,
  GET_ALL_DURATION_FAILURE,
  GET_THERAPIST_DURATION_REQUEST,
  GET_THERAPIST_DURATION_SUCCESS,
  GET_THERAPIST_DURATION_FAILURE,
  UPDATE_THERAPIST_DURATION_REQUEST,
  UPDATE_THERAPIST_DURATION_SUCCESS,
  UPDATE_THERAPIST_DURATION_FAILURE
} from "../actions/duration";

export const initialState = {
  allDurations: {},
  therapistDurations: {},
  loading: false
};

// Get ALl Durations
const getAllTherapistDurationReq = state => ({ ...state, loading: true });
const getAllTherapistDurationSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  allDurations: payload
});
const getAllTherapistDurationFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// Get Therapist Durations
const getTherapistDurationReq = state => ({ ...state, loading: true });
const getTherapistDurationSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  therapistDurations: payload
});
const getTherapistDurationFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

//Update Therapist Duration
const updateTherapistDurationReq = state => ({ ...state, loading: true });
const updateTherapistDurationSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  therapistDurations: payload
});
const updateTherapistDurationFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

const durationReducer = createReducer(initialState, {
  [GET_ALL_DURATION_REQUEST]: getAllTherapistDurationReq,
  [GET_ALL_DURATION_SUCCESS]: getAllTherapistDurationSuccess,
  [GET_ALL_DURATION_FAILURE]: getAllTherapistDurationFailure,
  [GET_THERAPIST_DURATION_REQUEST]: getTherapistDurationReq,
  [GET_THERAPIST_DURATION_SUCCESS]: getTherapistDurationSuccess,
  [GET_THERAPIST_DURATION_FAILURE]: getTherapistDurationFailure,
  [UPDATE_THERAPIST_DURATION_REQUEST]: updateTherapistDurationReq,
  [UPDATE_THERAPIST_DURATION_SUCCESS]: updateTherapistDurationSuccess,
  [UPDATE_THERAPIST_DURATION_FAILURE]: updateTherapistDurationFailure
});

export default durationReducer;
