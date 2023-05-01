import API from "./utils/API";

const api = new API();
const prefix = "/dashboard/v1";

const getCurrencies = () =>
  api
    .callApi({
      url: `${prefix}/currency/`,
      method: "get"
    })
    .then(result => result.data);

export default {
  getCurrencies
};
