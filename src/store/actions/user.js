import { createAction } from "@reduxjs/toolkit";

export const GET_USERINFO_REQUEST = "[user] get userinfo request";
export const GET_USERINFO_SUCCESS = "[user] get userinfo sucessful";
export const GET_USERINFO_FAILURE = "[user] get userinfo failure";

export const getUserInfoRequestAction = () => ({
  type: GET_USERINFO_REQUEST
});
export const getUserInfoSuccessAction = createAction(GET_USERINFO_SUCCESS);
export const getUserInfoFailureAction = createAction(GET_USERINFO_FAILURE);
