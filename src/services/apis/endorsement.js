import API from "./utils/API";

const api = new API();
const prefix = "/therapist";

// Get All Endorsements
const getAllEndorsements = () =>
  api
    .callApi({
      url: `${prefix}/endorsements`,
      method: "get"
    })
    .then(result => result.data);

export default {
  getAllEndorsements
};
