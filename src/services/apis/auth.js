import API from "./utils/API";
import { loginGrantType, refreshApiGrantType } from "./utils/Helper";
import ProxyAPI from "./utils/ProxyAPI";
const proxyApi = new ProxyAPI();
const api = new API();
const prefix = "/therapist";
const proxyPrefix = "/api";
const loginApi = (data) =>

  proxyApi
    .callApi({
      url: `${proxyPrefix}/login`,
      method: "post",
      data: {
        ...data,
        ...loginGrantType
      }
    })
    .then(result => result.data);

const registerApi = data =>
  api
    .callApi({
      url: `${prefix}/register`,
      method: "post",
      data: {
        ...data
      }
    })
    .then(result => result.data);

const refreshApi = data =>
  proxyApi
    .callApi({
      url: `${proxyPrefix}/refresh`,
      method: "post",
      data: {
        ...data,
        ...refreshApiGrantType
      }
    })
    .then(result => result.data);

const logoutApi = () =>
  api
    .callApi({
      url: `${prefix}/logout`,
      method: "post",
      data: {}
    })
    .then(result => result.data);

const checkAuthApi = () =>
  api
    .callApi({
      url: `${prefix}/check-auth`,
      method: "get"
    })
    .then(result => result.data);

const resetPasswordEmail = data =>
  api
    .callApi({
      url: `${prefix}/password/forgot`,
      method: "post",
      data
    })
    .then(result => result.data);

const passwordReset = ({ uidb64, token }) =>
  api
    .callApi({
      url: `${prefix}/password-reset/${uidb64}/${token}/`,
      method: "get"
    })
    .then(result => result.data);

const passwordResetComplete = data =>
  api
    .callApi({
      url: `${prefix}/reset-password`,
      method: "post",
      data
    })
    .then(result => result.data);

const passwordChange = data =>
  api
    .callApi({
      url: `${prefix}/set/password`,
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

// TODO: Implement later
// const getUserInfo = () =>
//   api
//     .callApi({
//       url: `${prefix}/userinfo`,
//       method: "get",
//     })
//     .then((result) => result.data);
const getUserInfo = () => {
  console.log("calling get user info api");
  return null;
};

export default {
  registerApi,
  loginApi,
  refreshApi,
  resetPasswordEmail,
  passwordReset,
  passwordResetComplete,
  passwordChange,
  getUserInfo,
  logoutApi,
  checkAuthApi
};
