import { createAction } from "@reduxjs/toolkit";

// Get all charts
export const GET_CHARTS_REQUEST = "[CHARTS] get all CHARTS request";
export const GET_CHARTS_SUCCESS = "[CHARTS] get all CHARTS successful";
export const GET_CHARTS_FAILURE = "[CHARTS] get all CHARTS failure";

export const getChartsReqAction = payload => ({
  type: GET_CHARTS_REQUEST,
  payload: payload
});

export const getChartsSuccessAction = createAction(GET_CHARTS_SUCCESS);
export const getChartsFailureAction = createAction(GET_CHARTS_FAILURE);

// Add new chart to UI
export const ADD_CHART_UI = "[CHARTS] add chart to UI";

export const addChartToUiAction = payload => ({
  type: ADD_CHART_UI,
  payload: payload
});

export const addChartUi = createAction(ADD_CHART_UI);

// Add new chart to Database
export const ADD_CHART_DATABASE_REQUEST = "[CHARTS] add chart to database request";
export const ADD_CHART_DATABASE_SUCCESS = "[CHARTS] add chart to database success";
export const ADD_CHART_DATABASE_FAILURE = "[CHARTS] add chart to database failure";

export const addChartToDatabaseAction = payload => ({
  type: ADD_CHART_DATABASE_REQUEST,
  payload: payload
});

export const addChartToDatabaseSuccessAction = createAction(ADD_CHART_DATABASE_SUCCESS);
export const addChartToDatabaseFailureAction = createAction(ADD_CHART_DATABASE_FAILURE);

// Edit chart
export const EDIT_CHART_REQUEST = "[CHARTS] edit CHART request";
export const EDIT_CHART_SUCCESS = "[CHARTS] edit CHART success";
export const EDIT_CHART_FAILURE = "[CHARTS] edit CHART failure";

export const editChartAction = payload => ({
  type: EDIT_CHART_REQUEST,
  payload: payload
});

export const editChartSuccessAction = createAction(EDIT_CHART_SUCCESS);
export const editChartFailureAction = createAction(EDIT_CHART_FAILURE);

// Lock chart
export const LOCK_CHART_REQUEST = "[CHARTS] lock CHART request";
export const LOCK_CHART_SUCCESS = "[CHARTS] lock CHART success";
export const LOCK_CHART_FAILURE = "[CHARTS] lock CHART failure";

export const lockChartAction = payload => ({
  type: LOCK_CHART_REQUEST,
  payload: payload
});

export const lockChartSuccessAction = createAction(LOCK_CHART_SUCCESS);
export const lockChartFailureAction = createAction(LOCK_CHART_FAILURE);

