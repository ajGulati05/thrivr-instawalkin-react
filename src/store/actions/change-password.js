import { createAction } from "@reduxjs/toolkit";

export const UPDATE_THERAPIST_PASSWORD_REQUEST = "[change-password] password update request";
export const UPDATE_THERAPIST_PASSWORD_SUCCESS = "[change-password] password update sucessful";
export const UPDATE_THERAPIST_PASSWORD_FAILURE = "[change-password] password update failure";

export const updateTherapistPasswordReqAction = payload => ({
  type: UPDATE_THERAPIST_PASSWORD_REQUEST,
  payload: payload
});
export const updateTherapistPasswordSuccessAction = createAction(UPDATE_THERAPIST_PASSWORD_SUCCESS);
export const updateTherapistPasswordFailureAction = createAction(UPDATE_THERAPIST_PASSWORD_FAILURE);
