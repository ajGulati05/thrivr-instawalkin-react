import jwtDecode from "jwt-decode";
import {
  getAccessToken,
  getRefreshToken,
  removeAccessToken,
  removeRefreshToken,
  storeAccessAndRefreshToken
} from "./apis/utils/Storage";
import { default as authApi } from "./apis/auth";
import store from "../store/configureStore";
import { RENEW_ACCESS_TOKEN_SUCCESS } from "../store/actions/login";

export default class Authentication {

  constructor() {}

  isAuthTokenValid = access_token => {
    /*    const decoded = jwtDecode(access_token);

    if (decoded.exp < Date.now() / 1000) {
      console.warn("access token expired");
      this.renewToken();
      return false;
    }*/

    return true;
  };

  clearAll = (setLocation) => {
    removeRefreshToken();

    if(setLocation){
      window.location.href = "/login";}
  };

  logout = async () => {
    await authApi.logoutApi();
    removeAccessToken();
    this.clearAll(false);
  };

  renewToken = async () => {
    try {
      const refreshToken = getRefreshToken();
      const response = await authApi.refreshApi({ refresh_token: refreshToken });
      if (response && response.data) {
        storeAccessAndRefreshToken(
          response.data.access_token,
          response.data.refresh_token,
          jwtDecode(response.data.access_token).jti
        );
        // jwtDecode(accessToken).jti :: unique identifier for the token: - used instead of user_id
        // update redux auth token once renew access token success
        if (store) {
          const { dispatch } = store;
          dispatch({
            type: RENEW_ACCESS_TOKEN_SUCCESS,
            payload: {
              refresh_token: refreshToken,
              access_token: response.data.access_token
            }
          });
        }
      } else {
        this.logout();
      }
    } catch (err) {
      this.clearAll(true);
    }
  };

  scheduleRenewal = () => {
    const access_token = getAccessToken();

    if (access_token) {
      const decoded = jwtDecode(access_token);
      const delay = decoded.exp - Date.now() / 1000;
      if (delay > 0) {
        this.tokenRenewalTimeout = setTimeout(() => {
          this.renewToken();
        }, delay * 1000);
      }
    }
  };
}
