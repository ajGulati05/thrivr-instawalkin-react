import { createAction } from "@reduxjs/toolkit";

// Therapist Information GetProfile
export const GET_PROFILE_REQUEST = "[profile] get profile request";
export const GET_PROFILE_SUCCESS = "[profile] get profile sucessful";
export const GET_PROFILE_FAILURE = "[profile] get profile failure";

export const getProfileReqAction = payload => ({
  type: GET_PROFILE_REQUEST,
  payload: payload
});
export const getProfileSuccessAction = createAction(GET_PROFILE_SUCCESS);
export const getProfileFailureAction = createAction(GET_PROFILE_FAILURE);

// Therapist Avatar Upload
export const UPDATE_PROFILE_IMG_REQUEST = "[profile] avatar update request";
export const UPDATE_PROFILE_IMG_SUCCESS = "[profile] avatar update sucessful";
export const UPDATE_PROFILE_IMG_FAILURE = "[profile] avatar update failure";

export const updateProfileImgReqAction = payload => ({
  type: UPDATE_PROFILE_IMG_REQUEST,
  payload: payload
});
export const updatePrpfileImgSuccessAction = createAction(UPDATE_PROFILE_IMG_SUCCESS);
export const updatePrpfileImgFailureAction = createAction(UPDATE_PROFILE_IMG_FAILURE);

//Update Therapist Profile
export const UPDATE_THERAPIST_PROFILE_REQUEST = "[profile] update therapist profile request";
export const UPDATE_THERAPIST_PROFILE_SUCCESS = "[profile] update therapist profile sucessful";
export const UPDATE_THERAPIST_PROFILE_FAILURE = "[profile] update therapist profile failure";

export const updateTherapistProfileReqAction = payload => ({
  type: UPDATE_THERAPIST_PROFILE_REQUEST,
  payload: payload
});
export const updateTherapistProfileSuccessAction = createAction(UPDATE_THERAPIST_PROFILE_SUCCESS);
export const updateTherapistProfileFailureAction = createAction(UPDATE_THERAPIST_PROFILE_FAILURE);

//Update Therapist Bio
export const UPDATE_THERAPIST_BIO_REQUEST = "[profile] update therapist bio request";
export const UPDATE_THERAPIST_BIO_SUCCESS = "[profile] update therapist bio sucessful";
export const UPDATE_THERAPIST_BIO_FAILURE = "[profile] update therapist bio failure";

export const updateTherapistBioReqAction = payload => ({
  type: UPDATE_THERAPIST_BIO_REQUEST,
  payload: payload
});
export const updateTherapistBioSuccessAction = createAction(UPDATE_THERAPIST_BIO_SUCCESS);
export const updateTherapistBioFailureAction = createAction(UPDATE_THERAPIST_BIO_FAILURE);
