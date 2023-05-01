import API from "./utils/API";

const api = new API();
const prefix = "/reports/v1";

// get report institution data
const getReportInst = () =>
  api
    .callApi({
      url: `${prefix}/institutions/`,
      method: "get"
    })
    .then(result => result.data);

export default {
  getReportInst
};
