import { createReducer } from "@reduxjs/toolkit";
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, RENEW_ACCESS_TOKEN_SUCCESS } from "../actions/login";
import { TokenStorage } from "../../services";

export const initialState = {
  authToken: {
    refresh_token: TokenStorage.getRefreshToken(),
    access_token: TokenStorage.getAccessToken()
  },
  loading: false
};

const loginReq = state => ({ ...state, loading: true });

const loginSuccess = (state, { payload }) => ({ ...state, loading: false, authToken: payload });

const loginFaiure = (state, { payload }) => ({ ...state, loading: false, error: payload });

const renewAccessTokenSuccess = (state, { payload }) => ({ ...state, loading: false, authToken: payload });

const userReducer = createReducer(initialState, {
  [LOGIN_REQUEST]: loginReq,
  [LOGIN_SUCCESS]: loginSuccess,
  [LOGIN_FAILURE]: loginFaiure,
  [RENEW_ACCESS_TOKEN_SUCCESS]: renewAccessTokenSuccess
});

export default userReducer;
