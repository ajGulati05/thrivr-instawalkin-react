import { createReducer } from "@reduxjs/toolkit";
import {
  GET_ALL_MODALITIES_REQUEST,
  GET_ALL_MODALITIES_SUCCESS,
  GET_ALL_MODALITIES_FAILURE,
  GET_THERAPIST_MODALITIES_REQUEST,
  GET_THERAPIST_MODALITIES_SUCCESS,
  GET_THERAPIST_MODALITIES_FAILURE,
  UPDATE_THERAPIST_MODALITIES_REQUEST,
  UPDATE_THERAPIST_MODALITIES_SUCCESS,
  UPDATE_THERAPIST_MODALITIES_FAILURE,
  GET_ALL_SUB_MODALITIES_REQUEST,
  GET_ALL_SUB_MODALITIES_SUCCESS,
  GET_ALL_SUB_MODALITIES_FAILURE,
  GET_THERAPIST_SUB_MODALITIES_REQUEST,
  GET_THERAPIST_SUB_MODALITIES_SUCCESS,
  GET_THERAPIST_SUB_MODALITIES_FAILURE,
  UPDATE_THERAPIST_SUB_MODALITIES_REQUEST,
  UPDATE_THERAPIST_SUB_MODALITIES_SUCCESS,
  UPDATE_THERAPIST_SUB_MODALITIES_FAILURE
} from "../actions/modalities";

export const initialState = {
  allModalities: {},
  therapistModalities: {},
  allSubModalities: {},
  therapistSubModalities: {},
  loading: false
};

// Get ALl Modalities
const getAllModalitiesReq = state => ({ ...state, loading: true });
const getAllModalitiesSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  allModalities: payload
});
const getAllModalitiesFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// Get Therapist Modalities
const getTherapistModalitiesReq = state => ({ ...state, loading: true });
const getTherapistModalitiesSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  therapistModalities: payload
});
const getTherapistModalitiesFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

//Update Therapist Duration
const updateTherapistModalitiesReq = state => ({ ...state, loading: true });
const updateTherapistModalitiesSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  therapistModalities: payload
});
const updateTherapistModalitiesFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// Get ALl Sub Modalities
const getAllSubModalitiesReq = state => ({ ...state, loading: true });
const getAllSubModalitiesSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  allSubModalities: payload
});
const getAllSubModalitiesFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

// Get Therapist Sub Modalities
const getTherapistSubModalitiesReq = state => ({ ...state, loading: true });
const getTherapistSubModalitiesSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  therapistSubModalities: payload
});
const getTherapistSubModalitiesFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});
//Update Therapist Duration
const updateTherapistSubModalitiesReq = state => ({ ...state, loading: true });
const updateTherapistSubModalitiesSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  therapistSubModalities: payload
});
const updateTherapistSubModalitiesFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

const modalitiesReducer = createReducer(initialState, {
  [GET_ALL_MODALITIES_REQUEST]: getAllModalitiesReq,
  [GET_ALL_MODALITIES_SUCCESS]: getAllModalitiesSuccess,
  [GET_ALL_MODALITIES_FAILURE]: getAllModalitiesFailure,
  [GET_THERAPIST_MODALITIES_REQUEST]: getTherapistModalitiesReq,
  [GET_THERAPIST_MODALITIES_SUCCESS]: getTherapistModalitiesSuccess,
  [GET_THERAPIST_MODALITIES_FAILURE]: getTherapistModalitiesFailure,
  [UPDATE_THERAPIST_MODALITIES_REQUEST]: updateTherapistModalitiesReq,
  [UPDATE_THERAPIST_MODALITIES_SUCCESS]: updateTherapistModalitiesSuccess,
  [UPDATE_THERAPIST_MODALITIES_FAILURE]: updateTherapistModalitiesFailure,
  [GET_ALL_SUB_MODALITIES_REQUEST]: getAllSubModalitiesReq,
  [GET_ALL_SUB_MODALITIES_SUCCESS]: getAllSubModalitiesSuccess,
  [GET_ALL_SUB_MODALITIES_FAILURE]: getAllSubModalitiesFailure,
  [GET_THERAPIST_SUB_MODALITIES_REQUEST]: getTherapistSubModalitiesReq,
  [GET_THERAPIST_SUB_MODALITIES_SUCCESS]: getTherapistSubModalitiesSuccess,
  [GET_THERAPIST_SUB_MODALITIES_FAILURE]: getTherapistSubModalitiesFailure,
  [UPDATE_THERAPIST_SUB_MODALITIES_REQUEST]: updateTherapistSubModalitiesReq,
  [UPDATE_THERAPIST_SUB_MODALITIES_SUCCESS]: updateTherapistSubModalitiesSuccess,
  [UPDATE_THERAPIST_SUB_MODALITIES_FAILURE]: updateTherapistSubModalitiesFailure
});

export default modalitiesReducer;
