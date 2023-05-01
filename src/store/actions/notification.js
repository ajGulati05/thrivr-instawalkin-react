import { createAction } from "@reduxjs/toolkit";

// get therapist notifications
export const GET_THERAPIST_NOTIFICATION_REQUEST = "[notification] get  therapist notification request";
export const GET_THERAPIST_NOTIFICATION_SUCCESS = "[notification] get  therapist notification  sucessful";
export const GET_THERAPIST_NOTIFICATION_FAILURE = "[notification] get  therapist notification failure";

export const getThreapistNotificationReqAction = payload => ({
  type: GET_THERAPIST_NOTIFICATION_REQUEST,
  payload: payload
});
export const getTherapistNotificationSuccessAction = createAction(GET_THERAPIST_NOTIFICATION_SUCCESS);
export const getTherapistNotificationFailureAction = createAction(GET_THERAPIST_NOTIFICATION_FAILURE);

// update therapist notifications
export const UPDATE_THERAPIST_NOTIFICATION_REQUEST = "[notification] notification update request";
export const UPDATE_THERAPIST_NOTIFICATION_SUCCESS = "[notification] notification update sucessful";
export const UPDATE_THERAPIST_NOTIFICATION_FAILURE = "[notification] notification update failure";

export const updateTherapistNotificationReqAction = payload => ({
  type: UPDATE_THERAPIST_NOTIFICATION_REQUEST,
  payload: payload
});
export const updateTherapistNotificationSuccessAction = createAction(UPDATE_THERAPIST_NOTIFICATION_SUCCESS);
export const updateTherapistNotificationFailureAction = createAction(UPDATE_THERAPIST_NOTIFICATION_FAILURE);
