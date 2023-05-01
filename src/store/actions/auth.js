import { createAction } from "@reduxjs/toolkit";

// login
export const LOGIN_REQUEST = "[auth] user login request";
export const LOGIN_SUCCESS = "[auth] user login sucessful";
export const LOGIN_FAILURE = "[auth] user login failure";

export const RENEW_ACCESS_TOKEN_SUCCESS = "[login] renew access token successful";

export const loginRequestAction = payload => ({
  type: LOGIN_REQUEST,
  payload: payload
});
export const loginSuccessAction = createAction(LOGIN_SUCCESS);
export const loginFailureAction = createAction(LOGIN_FAILURE);

// register
export const REGISTER_REQUEST = "[auth] user register request";
export const REGISTER_SUCCESS = "[auth] user register sucessful";
export const REGISTER_FAILURE = "[auth] user register failure";

export const registerRequestAction = payload => ({
  type: REGISTER_REQUEST,
  payload: payload
});
export const registerSuccessAction = createAction(REGISTER_SUCCESS);
export const registerFailureAction = createAction(REGISTER_FAILURE);

// check Auth
export const CHECK_AUTH_REQUEST = "[auth] user check auth request";
export const CHECK_AUTH_SUCCESS = "[auth] user check auth sucessful";
export const CHECK_AUTH_FAILURE = "[auth] user check auth failure";

export const checkAuthRequestAction = payload => ({
  type: CHECK_AUTH_REQUEST,
  payload: payload
});
export const checkAuthSuccessAction = createAction(CHECK_AUTH_SUCCESS);
export const checkAuthFailureAction = createAction(CHECK_AUTH_FAILURE);
