import API from "./utils/API";

const api = new API();
const prefix = "/therapist";

// Get Charts
const getCharts = ({ instauuid }) => {
  return api
    .callApi({
      url: `${prefix}/clients/${instauuid}/charts`,
      method: "get"
    })
    .then(result => result);
};

// Add chart
const addChart = ({ instauuid, type, data }) => {
  return api
    .callApi({
      url: `${prefix}/clients/${instauuid}/charts/create`,
      method: "post",
      data: {
        chart_types_code: type,
        data
      }
    })
    .then(result => result);
};

// Edit chart
const editChart = ({ instauuid, data, chartId }) => {
  return api
    .callApi({
      url: `${prefix}/clients/${instauuid}/charts/${chartId}/edit`,
      method: "post",
      data: {
        data
      }
    })
    .then(result => result);
};

// Lock chart
const lockChart = ({ instauuid, chartId }) => {
  return api
    .callApi({
      url: `${prefix}/clients/${instauuid}/charts/${chartId}/lock`,
      method: "post"
    })
    .then(result => result);
};

export default {
  getCharts,
  addChart,
  editChart,
  lockChart
};
