import { createReducer } from "@reduxjs/toolkit";
import { GET_USERINFO_REQUEST, GET_USERINFO_SUCCESS, GET_USERINFO_FAILURE } from "../actions/user";

const token = localStorage.getItem("tokenKey");
export const initialState = {
  token,
  userInfo: {}
};

const getUserInfoReq = state => ({ ...state, loading: true });

const getUserInfoSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  userInfo: payload
});

const getUserInfoFaiure = (state, { payload }) => ({ ...state, loading: false, error: payload });

const userReducer = createReducer(initialState, {
  [GET_USERINFO_REQUEST]: getUserInfoReq,
  [GET_USERINFO_SUCCESS]: getUserInfoSuccess,
  [GET_USERINFO_FAILURE]: getUserInfoFaiure
});

export default userReducer;
