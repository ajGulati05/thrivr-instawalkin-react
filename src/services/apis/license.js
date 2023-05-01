import API from "./utils/API";

const api = new API();
const prefix = "/therapist";

// get therapist license
const getTherapistLicense = () =>
  api
    .callApi({
      url: `${prefix}/licenses`,
      method: "get"
    })
    .then(result => result.data);

// update therapist license
const updateTherapistLicense = data =>
  api
    .callApi({
      url: `${prefix}/licenses/create`,
      method: "post",
      headers: {
        // "Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-HeadersOrigin": "X-Requested-With, Content-Type, Accept",
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/json"
      },
      data: data
    })
    .then(result => result.data);

export default {
  getTherapistLicense,
  updateTherapistLicense
};
