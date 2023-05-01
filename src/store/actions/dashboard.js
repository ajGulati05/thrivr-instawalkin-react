import { createAction } from "@reduxjs/toolkit";

// Dashboard google analytics
export const GET_GOOGLE_ANALYTICS_REQUEST = "get google anayltics request";
export const GET_GOOGLE_ANALYTICS_SUCCESS = "get google anayltics sucessful";
export const GET_GOOGLE_ANALYTICS_FAILURE = "get google anayltics failure";

export const getGoogleAnalyticsReqAction = payload => ({
  type: GET_GOOGLE_ANALYTICS_REQUEST,
  payload: payload
});
export const getGoogleAnalyticsSuccessAction = createAction(GET_GOOGLE_ANALYTICS_SUCCESS);
export const getGoogleAnalyticsFailureAction = createAction(GET_GOOGLE_ANALYTICS_FAILURE);

// Dashboard analytics
export const GET_DASHBOARD_ANALYTICS_REQUEST = "get dsahboard anayltics request";
export const GET_DASHBOARD_ANALYTICS_SUCCESS = "get dsahboard anayltics sucessful";
export const GET_DASHBOARD_ANALYTICS_FAILURE = "get dsahboard anayltics failure";

export const getDashboardAnalyticsReqAction = payload => ({
  type: GET_DASHBOARD_ANALYTICS_REQUEST,
  payload: payload
});
export const getDashboardAnalyticsSuccessAction = createAction(GET_DASHBOARD_ANALYTICS_SUCCESS);
export const getDashboardAnalyticsFailureAction = createAction(GET_DASHBOARD_ANALYTICS_FAILURE);
