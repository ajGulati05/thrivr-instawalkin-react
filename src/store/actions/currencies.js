import { createAction } from "@reduxjs/toolkit";

export const GET_CURRENCIES_REQUEST = "[currencies] get currencies request";
export const GET_CURRENCIES_SUCCESS = "[currencies] get currencies sucessful";
export const GET_CURRENCIES_FAILURE = "[currencies] get currencies failure";

export const getCurrenciesRequestAction = payload => ({
  type: GET_CURRENCIES_REQUEST,
  payload: payload
});
export const getCurrenciesSuccessAction = createAction(GET_CURRENCIES_SUCCESS);
export const getCurrenciesFailureAction = createAction(GET_CURRENCIES_FAILURE);
