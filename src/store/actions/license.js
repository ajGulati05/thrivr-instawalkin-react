import { createAction } from "@reduxjs/toolkit";

// get therapist license
export const GET_THERAPIST_LICENSE_REQUEST = "[license] get therapist license request";
export const GET_THERAPIST_LICENSE_SUCCESS = "[license] get therapist license  sucessful";
export const GET_THERAPIST_LICENSE_FAILURE = "[license] get therapist license failure";

export const getTherapistLicenseReqAction = payload => ({
  type: GET_THERAPIST_LICENSE_REQUEST,
  payload: payload
});
export const getTherapistLicenseSuccessAction = createAction(GET_THERAPIST_LICENSE_SUCCESS);
export const getTherapistLicenseFailureAction = createAction(GET_THERAPIST_LICENSE_FAILURE);

// update license
export const UPDATE_THERAPIST_LICENSE_REQUEST = "[license] license update request";
export const UPDATE_THERAPIST_LICENSE_SUCCESS = "[license] license update sucessful";
export const UPDATE_THERAPIST_LICENSE_FAILURE = "[license] license update failure";

export const updateTherapistLicenseReqAction = payload => ({
  type: UPDATE_THERAPIST_LICENSE_REQUEST,
  payload: payload
});
export const updateTherapistLicenseSuccessAction = createAction(UPDATE_THERAPIST_LICENSE_SUCCESS);
export const updateTherapistLicenseFailureAction = createAction(UPDATE_THERAPIST_LICENSE_FAILURE);
