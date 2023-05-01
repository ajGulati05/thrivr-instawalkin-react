import API from "./utils/API";

const api = new API();
const prefix = "/therapist";

const getGoogleAnalytics = days =>
  api
    .callApi({
      url: `${prefix}/analytics/google/${days}`,
      method: "get"
    })
    .then(result => result.data);

const getDashboardAnalytics = days =>
  api
    .callApi({
      url: `${prefix}/analytics/${days}`,
      method: "get"
    })
    .then(result => result.data);

export default {
  getGoogleAnalytics,
  getDashboardAnalytics
};
