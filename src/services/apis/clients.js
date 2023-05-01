import API from "./utils/API";

const api = new API();
const prefix = "/therapist";

// GetAllClients

const getAllClients = params =>
api.callApi({

      url: !params.search ? `${prefix}/clients?page=${params}` : `${prefix}/clients?page=1&filter[q]=${params.search}`,

      method: "get"

    }).then(result => result.data);

// get client details
const getClientDetails = instauuid =>
  api
    .callApi({
      url: `${prefix}/clients/${instauuid}`,
      method: "get"
    })
    .then(result => result.data);

// get client analytics
const getClientAnalytics = instauuid =>
  api
    .callApi({
      url: `${prefix}/clients/${instauuid}/analytics`,
      method: "get"
    })
    .then(result => result.data);

// get client bookings
const getClientBookings = instauuid =>
  api
    .callApi({
      url: `${prefix}/clients/${instauuid}/bookings`,
      method: "get"
    })
    .then(result => result.data);

const createGuestClient = data =>
  api
    .callApi({
      url: `${prefix}/guests`,
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

// update guest
const updateGuest = data =>
  api
    .callApi({
      url: `${prefix}/guests/${data.id}`,
      method: "post",
      headers: {
        // "Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-HeadersOrigin": "X-Requested-With, Content-Type, Accept",
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/json"
      },
      data: data.data
    })
    .then(result => result.data);

// Block Client
const blockClient = data =>
  api
    .callApi({
      url: `${prefix}/clients/block/${data.id}`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      data: data
    })
    .then(result => result.data);

// Unblock Client
const unblockClient = instauuid =>
  api
    .callApi({
      url: `${prefix}/clients/unblock/${instauuid}`,
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
      // data: data,
    })
    .then(result => result.data);

// send email
const sendEmail = guest =>
  api
    .callApi({
      url: `${prefix}/clients/${guest}/email/resend`,
      method: "post"
      // headers: {
      //   "Content-Type": "multipart/form-data",
      //   Accept: "application/json",
      // },
      // data: data,
    })
    .then(result => result.data);

// send email to fill forms
const sendEmailFormFills = guest =>
  api
    .callApi({
      url: `${prefix}/clients/${guest}/email`,
      method: "post"
    })
    .then(result => result.data);

// user exist
const userExist = payload =>
  api
    .callApi({
      url: `${prefix}/clients?filter[firstname]=${payload.firstname}&filter[lastname]=${payload.lastname}&filter[email]=${payload.email}`,
      method: "get"
    })
    .then(result => result.data);

// intake form
const intakeForm = id =>
  api
    .callApi({
      url: `${prefix}/clients/intake-form/${id}`,
      method: "get"
    })
    .then(result => result.data);

  const createClientGuest = payload =>{
    api.callApi({
      url:`${prefix}/clients/create-user-guest`,
      method:"post",
      data:payload
    }).then(result => result.data);
  }

export default {
  getAllClients,
  getClientDetails,
  getClientAnalytics,
  getClientBookings,
  createGuestClient,
  updateGuest,
  blockClient,
  unblockClient,
  sendEmail,
  sendEmailFormFills,
  userExist,
  intakeForm,
  createClientGuest
};
