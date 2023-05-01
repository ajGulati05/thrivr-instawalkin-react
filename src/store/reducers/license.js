import { createReducer } from "@reduxjs/toolkit";
import {
  GET_THERAPIST_LICENSE_REQUEST,
  GET_THERAPIST_LICENSE_SUCCESS,
  GET_THERAPIST_LICENSE_FAILURE,
  UPDATE_THERAPIST_LICENSE_REQUEST,
  UPDATE_THERAPIST_LICENSE_SUCCESS,
  UPDATE_THERAPIST_LICENSE_FAILURE
} from "../actions/license";

export const initialState = {
  therapistLicense: {},
  loading: false
};

// get therapist license
const getTherapistLicenseReq = state => ({ ...state, loading: true });
const getTherapistLicenseSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  therapistLicense: payload
});
const getTherapistLicenseFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// update therapist license
const updateTherapistLicenseReq = state => ({ ...state, loading: true });
const updateTherapistLicenseSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  therapistLicense: payload
});
const updateTherapistLicenseFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

const licenseReducer = createReducer(initialState, {
  [GET_THERAPIST_LICENSE_REQUEST]: getTherapistLicenseReq,
  [GET_THERAPIST_LICENSE_SUCCESS]: getTherapistLicenseSuccess,
  [GET_THERAPIST_LICENSE_FAILURE]: getTherapistLicenseFailure,
  [UPDATE_THERAPIST_LICENSE_REQUEST]: updateTherapistLicenseReq,
  [UPDATE_THERAPIST_LICENSE_SUCCESS]: updateTherapistLicenseSuccess,
  [UPDATE_THERAPIST_LICENSE_FAILURE]: updateTherapistLicenseFailure
});

export default licenseReducer;
