import { createReducer } from "@reduxjs/toolkit";
import {
  GET_CHARTS_REQUEST,
  GET_CHARTS_SUCCESS,
  GET_CHARTS_FAILURE,
  ADD_CHART_UI,
  ADD_CHART_DATABASE_REQUEST,
  ADD_CHART_DATABASE_SUCCESS,
  ADD_CHART_DATABASE_FAILURE,
  EDIT_CHART_REQUEST,
  EDIT_CHART_SUCCESS,
  EDIT_CHART_FAILURE,
  LOCK_CHART_REQUEST,
  LOCK_CHART_SUCCESS,
  LOCK_CHART_FAILURE
} from "../actions/charts";
import { v4 as uuidv4 } from "uuid";

export const initialState = {
  charts: {
    data: [],
    status: false
  },
  loading: false
};

// Add chart to UI
const addChartToUi = (state, { payload }) => {
  let init;

  switch (payload.type) {
    case "CC":
      init = [""];
      break;
    case "BC":
      init = "[]";
      break;
    case "SOAP":
      init = '{"subjective":"","objective":"","assessment":"","plan":""}';
      break;
  }

  return {
    ...state,
    loading: false,
    charts: {
      ...state.charts,
      data: [
        { id: uuidv4(), chart_type: payload.type, data: init, newChart: true, loading: false },
        ...state.charts.data
      ]
    }
  };
};

// Add chart to database
const addChartToDatabaseReq = (state, { payload }) => {
  const newChartLoadingState = state.charts.data.map(chart => {
    if (chart.id === payload.chartId) {
      return {
        ...chart,
        loading: true
      };
    }
    return chart;
  });

  return {
    ...state,
    charts: {
      ...state.charts,
      data: newChartLoadingState
    }
  };
};

const addChartToDatabaseSuccess = (state, { payload }) => {
  const newChartsState = state.charts.data.map(chart => {
    if (chart.id === payload.tempId) {
      return { ...payload.data, loading: false };
    }
    return chart;
  });

  return {
    ...state,
    charts: {
      ...state.charts,
      data: newChartsState
    }
  };
};

const addChartToDatabaseFailure = (state, { payload }) => {
  const newChartLoadingState = state.charts.data.map(chart => {
    if (chart.id === payload.tempId) {
      return {
        ...chart,
        loading: false
      };
    }
    return chart;
  });

  return {
    ...state,
    charts: {
      ...state.charts,
      data: newChartLoadingState
    }
  };
};

// Edit chart
const editChartReq = (state, { payload }) => {
  const newChartLoadingState = state.charts.data.map(chart => {
    if (chart.id === payload.chartId) {
      return {
        ...chart,
        loading: true
      };
    }
    return chart;
  });

  return {
    ...state,
    charts: {
      ...state.charts,
      data: newChartLoadingState
    }
  };
};

const editChartSuccess = (state, { payload }) => {
  const updatedChartsState = state.charts.data.map(chart => {
    if (chart.id === payload.chartId) {
      return { ...payload.data, loading: false };
    }
    return chart;
  });

  return {
    ...state,
    loading: false,
    charts: {
      ...state.charts,
      data: updatedChartsState
    }
  };
};

const editChartFailure = (state, { payload }) => {
  const newChartLoadingState = state.charts.data.map(chart => {
    if (chart.id === payload.tempId) {
      return {
        ...chart,
        loading: false
      };
    }
    return chart;
  });

  return {
    ...state,
    charts: {
      ...state.charts,
      data: newChartLoadingState
    }
  };
};

// Lock chart
const lockChartReq = (state, { payload }) => {
  console.log("temp id", payload);
  const chartLoadingState = state.charts.data.map(chart => {
    if (chart.id === payload.chartId) {
      return {
        ...chart,
        loading: true
      };
    }
    return chart;
  });

  return {
    ...state,
    charts: {
      ...state.charts,
      data: chartLoadingState
    }
  };
};

const lockChartSuccess = (state, { payload }) => {
  const lockedChartsState = state.charts.data.map(chart => {
    if (chart.id === payload.chartId) {
      return { ...payload.data, loading: false };
    }
    return chart;
  });

  return {
    ...state,
    charts: {
      ...state.charts,
      data: lockedChartsState
    }
  };
};

const lockChartFailure = (state, { payload }) => {
  const chartLoadingState = state.charts.data.map(chart => {
    if (chart.id === payload.chartId) {
      return {
        ...chart,
        loading: false
      };
    }
    return chart;
  });

  return {
    ...state,
    charts: {
      ...state.charts,
      data: chartLoadingState
    }
  };
};

// Get all charts
const getChartsReq = state => ({ ...state, loading: true });

const getChartsSuccess = (state, { payload }) => {
  const chartsWithLoading = payload.data.map(chart => {
    return {
      ...chart,
      loading: false
    };
  });

  return {
    ...state,
    loading: false,
    charts: {
      ...state.charts,
      data: chartsWithLoading
    }
  };
};

const getChartsFailure = (state, { payload }) => ({
  ...state,
  loading: false,
  error: payload
});

const chartReducer = createReducer(initialState, {
  [GET_CHARTS_REQUEST]: getChartsReq,
  [GET_CHARTS_SUCCESS]: getChartsSuccess,
  [GET_CHARTS_FAILURE]: getChartsFailure,
  [ADD_CHART_UI]: addChartToUi,
  [ADD_CHART_DATABASE_REQUEST]: addChartToDatabaseReq,
  [ADD_CHART_DATABASE_SUCCESS]: addChartToDatabaseSuccess,
  [ADD_CHART_DATABASE_FAILURE]: addChartToDatabaseFailure,
  [EDIT_CHART_REQUEST]: editChartReq,
  [EDIT_CHART_SUCCESS]: editChartSuccess,
  [EDIT_CHART_FAILURE]: editChartFailure,
  [LOCK_CHART_REQUEST]: lockChartReq,
  [LOCK_CHART_SUCCESS]: lockChartSuccess,
  [LOCK_CHART_FAILURE]: lockChartFailure
});

export default chartReducer;
