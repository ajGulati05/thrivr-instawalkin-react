import { createAction } from "@reduxjs/toolkit";

// get all modalitiess
export const GET_ALL_MODALITIES_REQUEST = "[modalities] get all modalitiess request";
export const GET_ALL_MODALITIES_SUCCESS = "[modalities] get modalities sucessful";
export const GET_ALL_MODALITIES_FAILURE = "[modalities] get modalities failure";

export const getAllModalitiesReqAction = payload => ({
  type: GET_ALL_MODALITIES_REQUEST,
  payload: payload
});
export const getAllModalitiesSuccessAction = createAction(GET_ALL_MODALITIES_SUCCESS);
export const getAllModalitiesFailureAction = createAction(GET_ALL_MODALITIES_FAILURE);

// Therapist Information get all  therapist modalitiess
export const GET_THERAPIST_MODALITIES_REQUEST = "[modalities] get all therapist modalitiess request";
export const GET_THERAPIST_MODALITIES_SUCCESS = "[modalities] get all therapist modalities  sucessful";
export const GET_THERAPIST_MODALITIES_FAILURE = "[modalities] get all therapist modalities failure";

export const getTherapistModalitiesReqAction = payload => ({
  type: GET_THERAPIST_MODALITIES_REQUEST,
  payload: payload
});
export const getTherapistModalitiesSuccessAction = createAction(GET_THERAPIST_MODALITIES_SUCCESS);
export const getTherapistModalitiesFailureAction = createAction(GET_THERAPIST_MODALITIES_FAILURE);

// Therapist Avatar Upload
export const UPDATE_THERAPIST_MODALITIES_REQUEST = "[therapist] modalities update request";
export const UPDATE_THERAPIST_MODALITIES_SUCCESS = "[therapist] modalities update sucessful";
export const UPDATE_THERAPIST_MODALITIES_FAILURE = "[therapist] modalities update failure";

export const updateTherapistModalitiesReqAction = payload => ({
  type: UPDATE_THERAPIST_MODALITIES_REQUEST,
  payload: payload
});
export const updateTherapistModalitiesSuccessAction = createAction(UPDATE_THERAPIST_MODALITIES_SUCCESS);
export const updateTherapistModalitiesFailureAction = createAction(UPDATE_THERAPIST_MODALITIES_FAILURE);

// get all modalitiess
export const GET_ALL_SUB_MODALITIES_REQUEST = "[modalities] get all sub modalitiess request";
export const GET_ALL_SUB_MODALITIES_SUCCESS = "[modalities] get sub modalities sucessful";
export const GET_ALL_SUB_MODALITIES_FAILURE = "[modalities] get sub modalities failure";

export const getAllSubModalitiesReqAction = payload => ({
  type: GET_ALL_SUB_MODALITIES_REQUEST,
  payload: payload
});
export const getAllSubModalitiesSuccessAction = createAction(GET_ALL_SUB_MODALITIES_SUCCESS);
export const getAllSubModalitiesFailureAction = createAction(GET_ALL_SUB_MODALITIES_FAILURE);

// Therapist Information get all  therapist modalitiess
export const GET_THERAPIST_SUB_MODALITIES_REQUEST = "[modalities] get all therapist sub modalitiess request";
export const GET_THERAPIST_SUB_MODALITIES_SUCCESS = "[modalities] get all therapist sub modalities  sucessful";
export const GET_THERAPIST_SUB_MODALITIES_FAILURE = "[modalities] get all therapist sub modalities failure";

export const getTherapistSubModalitiesReqAction = payload => ({
  type: GET_THERAPIST_SUB_MODALITIES_REQUEST,
  payload: payload
});
export const getTherapistSubModalitiesSuccessAction = createAction(GET_THERAPIST_SUB_MODALITIES_SUCCESS);
export const getTherapistSubModalitiesFailureAction = createAction(GET_THERAPIST_SUB_MODALITIES_FAILURE);

// Therapist Avatar Upload
export const UPDATE_THERAPIST_SUB_MODALITIES_REQUEST = "[therapist] sub modalities update request";
export const UPDATE_THERAPIST_SUB_MODALITIES_SUCCESS = "[therapist] sub modalities update sucessful";
export const UPDATE_THERAPIST_SUB_MODALITIES_FAILURE = "[therapist] sub modalities update failure";

export const updateTherapistSubModalitiesReqAction = payload => ({
  type: UPDATE_THERAPIST_SUB_MODALITIES_REQUEST,
  payload: payload
});
export const updateTherapistSubModalitiesSuccessAction = createAction(UPDATE_THERAPIST_SUB_MODALITIES_SUCCESS);
export const updateTherapistSubModalitiesFailureAction = createAction(UPDATE_THERAPIST_SUB_MODALITIES_FAILURE);
