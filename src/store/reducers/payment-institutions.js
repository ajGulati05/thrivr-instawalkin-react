import { createReducer } from "@reduxjs/toolkit";
import {
  GET_REPORT_INST_REQUEST,
  GET_REPORT_INST_SUCCESS,
  GET_REPORT_INST_FAILURE
} from "../actions/payment-institutions";

const defaultInst = [
  {
    id: "all",
    name: "ALL"
  }
];

export const initialState = {
  institution: defaultInst,
  loading: false
};

// get report institutions
const getReportInstReq = state => ({ ...state, loading: true });

const getReportInstSuccess = (state, { payload }) => ({
  ...state,
  loading: false,
  institution: defaultInst.concat(payload)
});

const getReportInstFaiure = (state, { payload }) => ({ ...state, loading: false, error: payload });

const reportInstitutionsReducer = createReducer(initialState, {
  [GET_REPORT_INST_REQUEST]: getReportInstReq,
  [GET_REPORT_INST_SUCCESS]: getReportInstSuccess,
  [GET_REPORT_INST_FAILURE]: getReportInstFaiure
});

export default reportInstitutionsReducer;
