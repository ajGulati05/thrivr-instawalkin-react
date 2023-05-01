import { createReducer } from "@reduxjs/toolkit";
import {
  GET_ALL_ENDORSEMENTS_REQUEST,
  GET_ALL_ENDORSEMENTS_SUCCESS,
  GET_ALL_ENDORSEMENTS_FAILURE
} from "../actions/endorsement";

export const initialState = {
  endorsements: {},
  loading: false
};

// Therapist Information GetProfile
const getAllEndorsementsReq = state => ({ ...state, loading: true });
const getEndrosementsSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  endorsements: payload
});
const getEndrosementsFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});
const endorsementReducer = createReducer(initialState, {
  [GET_ALL_ENDORSEMENTS_REQUEST]: getAllEndorsementsReq,
  [GET_ALL_ENDORSEMENTS_SUCCESS]: getEndrosementsSuccess,
  [GET_ALL_ENDORSEMENTS_FAILURE]: getEndrosementsFailure
});

export default endorsementReducer;
