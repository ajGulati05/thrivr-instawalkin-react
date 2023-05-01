import { createAction } from "@reduxjs/toolkit";

export const FORGOT_PASSWORD_REQUEST = "[forgot password] user forgot password request";
export const FORGOT_PASSWORD_SUCCESS = "[forgot password] user forgot password sucessfull";
export const FORGOT_PASSWORD_FAILURE = "[forgot password] user forgot password failure";

export const forgotPasswordRequestAction = payload => ({
  type: FORGOT_PASSWORD_REQUEST,
  payload: payload
});
export const forgotPasswordSuccessAction = createAction(FORGOT_PASSWORD_SUCCESS);
export const forgotPasswordFailureAction = createAction(FORGOT_PASSWORD_FAILURE);
