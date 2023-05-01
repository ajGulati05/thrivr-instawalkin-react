import { createAction } from "@reduxjs/toolkit";

// availability
export const AVAILABILITY_REQUEST = "[therapist] availability request";
export const AVAILABILITY_SUCCESS = "[therapist] availability sucessful";
export const AVAILABILITY_FAILURE = "[therapist] availability failure";

export const availabilityReqAction = payload => ({
  type: AVAILABILITY_REQUEST,
  payload: payload
});
export const availabilitySuccessAction = createAction(AVAILABILITY_SUCCESS);
export const availabilityFailureAction = createAction(AVAILABILITY_FAILURE);

// get availability slots
export const GET_SLOTS_REQUEST = "[therapist] get availability slots request";
export const GET_SLOTS_SUCCESS = "[therapist] get availability slots sucessful";
export const GET_SLOTS_FAILURE = "[therapist] get availability slots failure";

export const getSlotsReqAction = payload => ({
  type: GET_SLOTS_REQUEST,
  payload: payload
});
export const getSlotsSuccessAction = createAction(GET_SLOTS_SUCCESS);
export const getSlotsFailureAction = createAction(GET_SLOTS_FAILURE);

// get availability
export const GET_AVAILABILITY_REQUEST = "[therapist] get availability request";
export const GET_AVAILABILITY_SUCCESS = "[therapist] get availability sucessful";
export const GET_AVAILABILITY_FAILURE = "[therapist] get availability failure";

export const getAvailabilityReqAction = payload => ({
  type: GET_AVAILABILITY_REQUEST,
  payload: payload
});
export const getAvailabilitySuccessAction = createAction(GET_AVAILABILITY_SUCCESS);
export const getAvailabilityFailureAction = createAction(GET_AVAILABILITY_FAILURE);
