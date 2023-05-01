import { createReducer } from "@reduxjs/toolkit";
import {
  GET_REVIEWS_REQUEST,
  GET_REVIEWS_SUCCESS,
  GET_REVIEWS_FAILURE,
  CHANGE_REVIEW,
  CHANGE_REVIEW_SUCCESS,
} from "../actions/review";

export const initialState = {
  reviews: {
    data: [],
  },
  selectedId: null,
  loading: false,
};

// Therapist Information GetProfile
const getReviewsReq = (state) => ({ ...state, loading: true });

const getReviewsSuccess = (state, { payload }) => {
  return {
    ...state,
    loading: false,
    reviews: {
      ...payload.data,

      data: !payload.search
      ? [...new Map([...state.reviews.data, ...payload.newData].map(item => [item.id, item])).values()]
      : payload.searchScroll
        ? [...new Map([...state.reviews.data, ...payload.newData].map(item => [item.id, item])).values()]
        : [...payload.newData]
    },
  };
};

const getReviewsFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload,
});

const changeReviewSuccess = (state, { payload }) => ({
  ...state,
  selectedId: payload,
  loading: false,
});
const reviewReducer = createReducer(initialState, {
  [GET_REVIEWS_REQUEST]: getReviewsReq,
  [GET_REVIEWS_SUCCESS]: getReviewsSuccess,
  [GET_REVIEWS_FAILURE]: getReviewsFailure,
  [CHANGE_REVIEW_SUCCESS]: changeReviewSuccess,
});

export default reviewReducer;
