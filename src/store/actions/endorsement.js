import { createAction } from "@reduxjs/toolkit";

// Therapist Information GetProfile
export const GET_ALL_ENDORSEMENTS_REQUEST = "[endorsements] get all endrosements request";
export const GET_ALL_ENDORSEMENTS_SUCCESS = "[endorsements] get all endorsements sucessful";
export const GET_ALL_ENDORSEMENTS_FAILURE = "[endorsements] get all endorsements failure";

export const getAllEndorsementsReqAction = payload => ({
  type: GET_ALL_ENDORSEMENTS_REQUEST,
  payload: payload
});
export const getEndrosementsSuccessAction = createAction(GET_ALL_ENDORSEMENTS_SUCCESS);
export const getEndrosementsFailureAction = createAction(GET_ALL_ENDORSEMENTS_FAILURE);
