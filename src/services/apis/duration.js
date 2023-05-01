import API from "./utils/API";

const api = new API();
const prefix = "/therapist";

// GetAllDurations
const getAllDurations = () =>
  api
    .callApi({
      url: `${prefix}/durations`,
      method: "get"
    })
    .then(result => result.data);

// Therapist Information GetDuration
const getTherapistDurations = () =>
  api
    .callApi({
      url: `${prefix}/therapist-durations`,
      method: "get"
    })
    .then(result => result.data);

// update therapist duration
const updateTherapistDuration = data =>
  api
    .callApi({
      url: `${prefix}/therapist-durations/update`,
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
  getAllDurations,
  getTherapistDurations,
  updateTherapistDuration
};
