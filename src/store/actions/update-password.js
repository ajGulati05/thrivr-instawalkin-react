import { createAction } from "@reduxjs/toolkit";

export const UPDATE_PASSWORD_REQUEST = "[update password] user update password request";
export const UPDATE_PASSWORD_SUCCESS = "[update password] user update password sucessfull";
export const UPDATE_PASSWORD_FAILURE = "[update password] user update password failure";

export const updatePasswordRequestAction = payload => ({
  type: UPDATE_PASSWORD_REQUEST,
  payload: payload
});
export const updatePasswordSuccessAction = createAction(UPDATE_PASSWORD_SUCCESS);
export const updatePasswordFailureAction = createAction(UPDATE_PASSWORD_FAILURE);
