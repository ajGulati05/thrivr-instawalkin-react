import API from "./utils/API";

const api = new API();
const prefix = "/therapist";

// Therapist Information GetDuration
const getTherapistNotifications = () =>
  api
    .callApi({
      url: `${prefix}/notifications`,
      method: "get"
    })
    .then(result => result.data);

// update therapist duration
const updateTherapistNotification = data =>
  api
    .callApi({
      url: `${prefix}/notifications/update`,
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
  getTherapistNotifications,
  updateTherapistNotification
};
