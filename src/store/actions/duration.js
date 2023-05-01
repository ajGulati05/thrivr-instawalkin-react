import { createAction } from "@reduxjs/toolkit";

// get all durations
export const GET_ALL_DURATION_REQUEST = "[duration] get all durations request";
export const GET_ALL_DURATION_SUCCESS = "[duration] get duration sucessful";
export const GET_ALL_DURATION_FAILURE = "[duration] get duration failure";

export const getAllDurationReqAction = payload => ({
  type: GET_ALL_DURATION_REQUEST,
  payload: payload
});
export const getAllDurationSuccessAction = createAction(GET_ALL_DURATION_SUCCESS);
export const getAllDurationFailureAction = createAction(GET_ALL_DURATION_FAILURE);

// Therapist Information get all  therapist durations
export const GET_THERAPIST_DURATION_REQUEST = "[duration] get all therapist durations request";
export const GET_THERAPIST_DURATION_SUCCESS = "[duration] get all therapist duration  sucessful";
export const GET_THERAPIST_DURATION_FAILURE = "[duration] get all therapist duration failure";

export const getThreapistDurationReqAction = payload => ({
  type: GET_THERAPIST_DURATION_REQUEST,
  payload: payload
});
export const getTherapistDurationSuccessAction = createAction(GET_THERAPIST_DURATION_SUCCESS);
export const getTherapistDurationFailureAction = createAction(GET_THERAPIST_DURATION_FAILURE);

// Therapist Avatar Upload
export const UPDATE_THERAPIST_DURATION_REQUEST = "[therapist] duration update request";
export const UPDATE_THERAPIST_DURATION_SUCCESS = "[therapist] duration update sucessful";
export const UPDATE_THERAPIST_DURATION_FAILURE = "[therapist] duration update failure";

export const updateTherapistDurationReqAction = payload => ({
  type: UPDATE_THERAPIST_DURATION_REQUEST,
  payload: payload
});
export const updateTherapistDurationSuccessAction = createAction(UPDATE_THERAPIST_DURATION_SUCCESS);
export const updateTherapistDurationFailureAction = createAction(UPDATE_THERAPIST_DURATION_FAILURE);
