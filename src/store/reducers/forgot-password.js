import { createReducer } from "@reduxjs/toolkit";
import { FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAILURE } from "../actions/forgot-password";

export const initialState = {
  forgotPassword: {},
  loading: false
};

const forgotPasswordReq = state => ({ ...state, loading: true });

const forgotPasswordSuccess = (state, { payload }) => ({ ...state, loading: false, forgotPassword: payload });

const forgotPasswordFaiure = (state, { payload }) => ({ ...state, loading: false, error: payload });

const userReducer = createReducer(initialState, {
  [FORGOT_PASSWORD_REQUEST]: forgotPasswordReq,
  [FORGOT_PASSWORD_SUCCESS]: forgotPasswordSuccess,
  [FORGOT_PASSWORD_FAILURE]: forgotPasswordFaiure
});

export default userReducer;
