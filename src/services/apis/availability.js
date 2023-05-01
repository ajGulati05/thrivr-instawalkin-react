import API from "./utils/API";

const api = new API();
const prefix = "/therapist";

const availability = data => {
  const formData = new FormData();
  formData.append("buffer", data.buffer);
  formData.append("availability_constraints", JSON.stringify(data.availability_constraints));
  return api
    .callApi({
      url: `${prefix}/availability-constraints/update`,
      method: "post",
      headers: {
        // "Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-HeadersOrigin": "X-Requested-With, Content-Type, Accept",
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/json"
      },
      data: formData
    })
    .then(result => result.data);
};
const getSlots = () =>
  api
    .callApi({
      url: `${prefix}/therapist/{slug}}/availability/{{project}}/{{startDateTime}}/{{endDateTime}}`,
      method: "get"
    })
    .then(result => result.data);

const getAvailability = () =>
  api
    .callApi({
      url: `${prefix}/availability-constraints`,
      method: "get"
    })
    .then(result => result.data);

export default {
  availability,
  getSlots,
  getAvailability
};
