import { createAction } from "@reduxjs/toolkit";

export const LOGIN_REQUEST = "[login] user login request";
export const LOGIN_SUCCESS = "[login] user login sucessful";
export const LOGIN_FAILURE = "[login] user login failure";

export const RENEW_ACCESS_TOKEN_SUCCESS = "[login] renew access token successful";

export const loginRequestAction = payload => ({
  type: LOGIN_REQUEST,
  payload: payload
});
export const loginSuccessAction = createAction(LOGIN_SUCCESS);
export const loginFailureAction = createAction(LOGIN_FAILURE);
