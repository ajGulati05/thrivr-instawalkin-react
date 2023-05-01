import { createReducer } from "@reduxjs/toolkit";
import { UPDATE_PASSWORD_REQUEST, UPDATE_PASSWORD_SUCCESS, UPDATE_PASSWORD_FAILURE } from "../actions/update-password";

export const initialState = {
  updatePassword: {},
  loading: false
};

const updatePasswordReq = state => ({ ...state, loading: true });

const updatePasswordSuccess = (state, { payload }) => ({ ...state, loading: false, updatePassword: payload });

const updatePasswordFaiure = (state, { payload }) => ({ ...state, loading: false, error: payload });

const userReducer = createReducer(initialState, {
  [UPDATE_PASSWORD_REQUEST]: updatePasswordReq,
  [UPDATE_PASSWORD_SUCCESS]: updatePasswordSuccess,
  [UPDATE_PASSWORD_FAILURE]: updatePasswordFaiure
});

export default userReducer;
