import API from "./utils/API";

const api = new API();
const prefix = "/therapist";

// Booking Details
const bookingDetails = slug =>
  api
    .callApi({
      url: `${prefix}/bookings/${slug}`,
      method: "get"
    })
    .then(result => result.data);

// Bookings
const bookings = payload =>
  api
    .callApi({
      url: `${prefix}/bookings?filter[date_betweens]=${payload.startDate},
      ${payload.endDate}
    `,
      method: "get"
    })
    .then(result => result.data);

// Payment Type
const getPaymentType = payload =>
  api
    .callApi({
      url: `${prefix}/payment-types
  `,
      method: "get"
    })
    .then(result => result.data);

//Create Bookings
const createBooking = payload =>
  api
    .callApi({
      url: `${prefix}/book/${payload.params.project_id}/${payload.params.modality_id}/${payload.params.id}
  `,
      method: "post",
      headers: {
        // "Content-Type": "multipart/form-data",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-HeadersOrigin": "X-Requested-With, Content-Type, Accept",
        "X-Requested-With": "XMLHttpRequest",
        Accept: "application/json"
      },
      data: payload.data
    })
    .then(result => result.data);

//Modify Bookings
const modifyBooking = payload =>
  api
    .callApi({
      url: payload.delete_id
        ? `${prefix}/booking/${payload.delete_id}/modify/delete`
        : payload.tip
        ? `${prefix}/booking/${payload.slug}/modify/tip`
        : `${prefix}/bookings/${payload.slug}/modify`,
      method: "post",
      data: payload.delete_id ? { booking_id: payload.delete_id } : payload.tip ? { tip: payload.tip } : ""
    })
    .then(result => result.data);

//Modify Managerspeciality
const modifyManagerSpeciality = payload =>
  api
    .callApi({
      url: `${prefix}/booking/${payload.slug}/modify/modality`,
      method: "post",
      data: { managerspeciality: payload.id }
    })
    .then(result => result.data);

//Modify Payment Type
const modifyPaymentType = payload =>
  api
    .callApi({
      url: `${prefix}/booking/${payload.slug}/modify/payment-types`,
      method: "post",
      data: payload.data
    })
    .then(result => result.data);

// Receipts
const getReceipts = slug =>
  api
    .callApi({
      url: `${prefix}/bookings/receipt/${slug}`,
      method: "get"
    })
    .then(result => result.data);

//cancel Booking
const cancelBooking = payload =>
  api
    .callApi({
      url: payload.url ? payload.url : `${prefix}/bookings/${payload.slug}/modify`,
      method: "post",
      data: payload.modifier && { modifier: payload.modifier }
    })
    .then(result => result.data);

export default {
  bookingDetails,
  bookings,
  createBooking,
  modifyBooking,
  getReceipts,
  modifyManagerSpeciality,
  modifyPaymentType,
  cancelBooking,
  getPaymentType
};
