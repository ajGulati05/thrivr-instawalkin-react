import { createReducer } from "@reduxjs/toolkit";
import {
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
  UPDATE_PROFILE_IMG_REQUEST,
  UPDATE_PROFILE_IMG_SUCCESS,
  UPDATE_PROFILE_IMG_FAILURE,
  UPDATE_THERAPIST_PROFILE_REQUEST,
  UPDATE_THERAPIST_PROFILE_SUCCESS,
  UPDATE_THERAPIST_PROFILE_FAILURE,
  UPDATE_THERAPIST_BIO_REQUEST,
  UPDATE_THERAPIST_BIO_SUCCESS,
  UPDATE_THERAPIST_BIO_FAILURE
} from "../actions/profile";

export const initialState = {
  profileData: {},
  avatarUploadData: {},
  therapistProfileData: {},
  therapistBioData: {},
  userAllAccess: false,
  loading: false
};

// Therapist Information GetProfile
const updateProfileReq = state => ({ ...state, loading: true });
const updateProfileSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  profileData: payload,
  userAllAccess: payload?.product_code === "A" ? true : false
});
const updateProfileFaiure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// update profile image
const updateProfileImgReq = state => ({ ...state, loading: true });
const updateProfileImgSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  avatarUploadData: payload
});
const updateProfileImgFaiure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

//Update Therapist Profile
const updateTherapistProfileReq = state => ({ ...state, loading: true });
const updateTherapistProfileSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  therapistProfileData: payload
});
const updateTherapistProfileFaiure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

//Update Therapist Bio
const updateTherapistBioReq = state => ({ ...state, loading: true });
const updateTherapistBioSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  therapistBioData: payload
});
const updateTherapistBioFaiure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

const userReducer = createReducer(initialState, {
  [GET_PROFILE_REQUEST]: updateProfileReq,
  [GET_PROFILE_SUCCESS]: updateProfileSuccess,
  [GET_PROFILE_FAILURE]: updateProfileFaiure,
  [UPDATE_PROFILE_IMG_REQUEST]: updateProfileImgReq,
  [UPDATE_PROFILE_IMG_SUCCESS]: updateProfileImgSuccess,
  [UPDATE_PROFILE_IMG_FAILURE]: updateProfileImgFaiure,
  [UPDATE_THERAPIST_PROFILE_REQUEST]: updateTherapistProfileReq,
  [UPDATE_THERAPIST_PROFILE_SUCCESS]: updateTherapistProfileSuccess,
  [UPDATE_THERAPIST_PROFILE_FAILURE]: updateTherapistProfileFaiure,
  [UPDATE_THERAPIST_BIO_REQUEST]: updateTherapistBioReq,
  [UPDATE_THERAPIST_BIO_SUCCESS]: updateTherapistBioSuccess,
  [UPDATE_THERAPIST_BIO_FAILURE]: updateTherapistBioFaiure
});

export default userReducer;
