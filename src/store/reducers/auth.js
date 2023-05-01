import { createReducer } from "@reduxjs/toolkit";
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  RENEW_ACCESS_TOKEN_SUCCESS,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  CHECK_AUTH_REQUEST,
  CHECK_AUTH_SUCCESS,
  CHECK_AUTH_FAILURE
} from "../actions/auth";
import { TokenStorage } from "../../services";

export const initialState = {
  authToken: {
    refresh_token: TokenStorage.getRefreshToken(),
    access_token: TokenStorage.getAccessToken()
  },
  registered: {},
  loading: false
};

// login
const loginReq = state => ({ ...state, loading: true });

const loginSuccess = (state, { payload }) => ({ ...state, loading: false, authToken: payload });

const loginFaiure = (state, { payload }) => ({ ...state, loading: false, error: payload });

const renewAccessTokenSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  authToken: payload
});

// register
const registerReq = state => ({ ...state, loading: true });

const registerSuccess = (state, { payload }) => ({ ...state, loading: false, registered: payload });

const registerFaiure = (state, { payload }) => ({ ...state, loading: false, error: payload });

// check auth
const checkAuthReq = state => ({ ...state, loading: true });

const checkAuthSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  registered: payload
});

const checkAuthFaiure = (state, { payload }) => ({ ...state, loading: false, error: payload });

const userReducer = createReducer(initialState, {
  [LOGIN_REQUEST]: loginReq,
  [LOGIN_SUCCESS]: loginSuccess,
  [LOGIN_FAILURE]: loginFaiure,
  [REGISTER_REQUEST]: registerReq,
  [REGISTER_SUCCESS]: registerSuccess,
  [REGISTER_FAILURE]: registerFaiure,
  [RENEW_ACCESS_TOKEN_SUCCESS]: renewAccessTokenSuccess,
  [CHECK_AUTH_REQUEST]: checkAuthReq,
  [CHECK_AUTH_SUCCESS]: checkAuthSuccess,
  [CHECK_AUTH_FAILURE]: checkAuthFaiure
});

export default userReducer;
