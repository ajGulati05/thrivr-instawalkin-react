import { createReducer } from "@reduxjs/toolkit";
import {
  GET_GOOGLE_ANALYTICS_REQUEST,
  GET_GOOGLE_ANALYTICS_SUCCESS,
  GET_GOOGLE_ANALYTICS_FAILURE,
  GET_DASHBOARD_ANALYTICS_REQUEST,
  GET_DASHBOARD_ANALYTICS_SUCCESS,
  GET_DASHBOARD_ANALYTICS_FAILURE
} from "../actions/dashboard";

export const initialState = {
  googleAnalytics: {},
  dasahboardAnalytics: {},
  loading: false
};

const getGoogleAnalyticsReq = state => ({ ...state, loading: true });
const getGoogleAnalyticsSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  googleAnalytics: payload
});
const getGoogleAnalyticsFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

const getDashboardAnalyticsReq = state => ({ ...state, loading: true });
const getDashboardAnalyticsSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  dasahboardAnalytics: payload
});
const getDashboardAnalyticsFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

const dashboardReducer = createReducer(initialState, {
  [GET_GOOGLE_ANALYTICS_REQUEST]: getGoogleAnalyticsReq,
  [GET_GOOGLE_ANALYTICS_SUCCESS]: getGoogleAnalyticsSuccess,
  [GET_GOOGLE_ANALYTICS_FAILURE]: getGoogleAnalyticsFailure,
  [GET_DASHBOARD_ANALYTICS_REQUEST]: getDashboardAnalyticsReq,
  [GET_DASHBOARD_ANALYTICS_SUCCESS]: getDashboardAnalyticsSuccess,
  [GET_DASHBOARD_ANALYTICS_FAILURE]: getDashboardAnalyticsFailure
});

export default dashboardReducer;
