import API from "./utils/API";

const api = new API();
const prefix = "/dashboard/v1/float";

// aggregation
const getFloatAggr = currencyId =>
  api
    .callApi({
      url: `${prefix}/?currencyId=${currencyId}`,
      method: "get"
    })
    .then(result => result.data);

// institution
const getFloatInstitution = currencyId =>
  api
    .callApi({
      url: `${prefix}/institution/?currencyId=${currencyId}`,
      method: "get"
    })
    .then(result => result.data);

// institution graph
const getFloatInstitutionGraph = ({ currencyId, fromDate, toDate, institutionId }) =>
  api
    .callApi({
      url: `${prefix}/detail/?currencyId=${currencyId}&fromDate=${fromDate}&toDate=${toDate}&institution_id=${institutionId}`,
      method: "get"
    })
    .then(result => result.data);

export default {
  getFloatAggr,
  getFloatInstitution,
  getFloatInstitutionGraph
};
