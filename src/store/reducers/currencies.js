import { createReducer } from "@reduxjs/toolkit";
import { GET_CURRENCIES_REQUEST, GET_CURRENCIES_SUCCESS, GET_CURRENCIES_FAILURE } from "../actions/currencies";

// const defaultCurrency = [
//   {
//     currency_name: "ALL",
//     description: "ALL",
//     id: "all",
//   },
// ];

export const initialState = {
  currencies: [],
  loading: false
};

const getCurrenciesReq = state => ({ ...state, loading: true });

const getCurrenciesSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  // currencies: defaultCurrency.concat(payload),
  currencies: payload
});

const getCurrenciesFaiure = (state, { payload }) => ({ ...state, loading: false, error: payload });

const userReducer = createReducer(initialState, {
  [GET_CURRENCIES_REQUEST]: getCurrenciesReq,
  [GET_CURRENCIES_SUCCESS]: getCurrenciesSuccess,
  [GET_CURRENCIES_FAILURE]: getCurrenciesFaiure
});

export default userReducer;
