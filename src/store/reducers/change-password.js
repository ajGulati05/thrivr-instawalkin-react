import { createReducer } from "@reduxjs/toolkit";
import {
  UPDATE_THERAPIST_PASSWORD_REQUEST,
  UPDATE_THERAPIST_PASSWORD_SUCCESS,
  UPDATE_THERAPIST_PASSWORD_FAILURE
} from "../actions/change-password";

export const initialState = {
  therapistPassword: {},
  loading: false
};

// Update Therapist Password
const updateTherapistPasswordReq = state => ({ ...state, loading: true });
const updateTherapistPasswordSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  therapistPassword: payload
});
const updateTherapistPasswordFaiure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

const userReducer = createReducer(initialState, {
  [UPDATE_THERAPIST_PASSWORD_REQUEST]: updateTherapistPasswordReq,
  [UPDATE_THERAPIST_PASSWORD_SUCCESS]: updateTherapistPasswordSuccess,
  [UPDATE_THERAPIST_PASSWORD_FAILURE]: updateTherapistPasswordFaiure
});

export default userReducer;
