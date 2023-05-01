import API from "./utils/API";

const api = new API();
const prefix = "/therapist";

// Therapist Information GetProfile
const getProfile = () =>
  api
    .callApi({
      url: `${prefix}/profile`,
      method: "get"
    })
    .then(result => result.data);

// update profile image
const updateProfileImg = data =>
  api
    .callApi({
      url: `${prefix}/avatar/update`,
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

//Update Therapist Profile
const updateTherapistProfile = data =>
  api
    .callApi({
      url: `${prefix}/profile/update`,
      method: "post",
      data
    })
    .then(result => result.data);

//Update Therapist Bio
const updateTherapistBio = data =>
  api
    .callApi({
      url: `${prefix}/bio/update`,
      method: "post",
      data
    })
    .then(result => result.data);

export default {
  getProfile,
  updateProfileImg,
  updateTherapistProfile,
  updateTherapistBio
};
