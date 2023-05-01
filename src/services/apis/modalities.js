import API from "./utils/API";

const api = new API();
const prefix = "/therapist";

// get all modalities
const getAllModalities = () =>
  api
    .callApi({
      url: `${prefix}/modalities`,
      method: "get"
    })
    .then(result => result.data);

// get therapist modalities
const getTherapistModalities = () =>
  api
    .callApi({
      url: `${prefix}/your-modalities`,
      method: "get"
    })
    .then(result => result.data);

// update therapist modalities
const updateTherapistModalities = data =>
  api
    .callApi({
      url: `${prefix}/modalities/update`,
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

// get all sub modalities
const getAllSubModalities = () =>
  api
    .callApi({
      url: `${prefix}/sub-modalities`,
      method: "get"
    })
    .then(result => result.data);

// get therapist sub modalities
const getTherapistSubModalities = () =>
  api
    .callApi({
      url: `${prefix}/your-sub-modalities`,
      method: "get"
    })
    .then(result => result.data);

// update therapist sub modalities
const updateTherapistSubModalities = data =>
  api
    .callApi({
      url: `${prefix}/sub-modalities/update`,
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
  getAllModalities,
  getTherapistModalities,
  updateTherapistModalities,
  getAllSubModalities,
  getTherapistSubModalities,
  updateTherapistSubModalities
};
