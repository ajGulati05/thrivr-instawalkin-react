import { createReducer } from "@reduxjs/toolkit";
import {
  AVAILABILITY_REQUEST,
  AVAILABILITY_SUCCESS,
  AVAILABILITY_FAILURE,
  GET_SLOTS_REQUEST,
  GET_SLOTS_SUCCESS,
  GET_SLOTS_FAILURE,
  GET_AVAILABILITY_REQUEST,
  GET_AVAILABILITY_SUCCESS,
  GET_AVAILABILITY_FAILURE
} from "../actions/availability";

export const initialState = {
  availability: {},
  availabilityConstraints: {},
  loading: false
};

const availabilityReq = state => ({ ...state, loading: true });
const availabilitySuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  availability: payload
});
const availabilityFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

const getSlotsReq = state => ({ ...state, loading: true });
const getSlotsSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  therapistDurations: payload
});
const getSlotsFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

const getAvailabilityReq = state => ({ ...state, loading: true });
const getAvailabilitySuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  availabilityConstraints: payload
});
const getAvailabilityFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

const availabilityReducer = createReducer(initialState, {
  [AVAILABILITY_REQUEST]: availabilityReq,
  [AVAILABILITY_SUCCESS]: availabilitySuccess,
  [AVAILABILITY_FAILURE]: availabilityFailure,
  [GET_SLOTS_REQUEST]: getSlotsReq,
  [GET_SLOTS_SUCCESS]: getSlotsSuccess,
  [GET_SLOTS_FAILURE]: getSlotsFailure,
  [GET_AVAILABILITY_REQUEST]: getAvailabilityReq,
  [GET_AVAILABILITY_SUCCESS]: getAvailabilitySuccess,
  [GET_AVAILABILITY_FAILURE]: getAvailabilityFailure
});

export default availabilityReducer;
