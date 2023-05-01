import { createAction } from "@reduxjs/toolkit";

// Therapist Information GetProfile
export const GET_REVIEWS_REQUEST = "[REVIEWS] get all REVIEWS request";
export const GET_REVIEWS_SUCCESS = "[REVIEWS] get all REVIEWS sucessful";
export const GET_REVIEWS_FAILURE = "[REVIEWS] get all REVIEWS failure";

export const getReviewsReqAction = payload => ({
  type: GET_REVIEWS_REQUEST,
  payload: payload
});
export const getReviewsSuccessAction = createAction(GET_REVIEWS_SUCCESS);
export const getReviewsFailureAction = createAction(GET_REVIEWS_FAILURE);

export const CHANGE_REVIEW = "[REVIEWS] change REVIEW";

export const CHANGE_REVIEW_SUCCESS = "[REVIEWS] change REVIEW sucessful";

export const getChangeReviewAction = payload => ({
  type: CHANGE_REVIEW,
  payload: payload
});

export const changeReviewSuccessAction = createAction(CHANGE_REVIEW_SUCCESS);
