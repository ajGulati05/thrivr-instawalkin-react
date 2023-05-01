import { createAction } from "@reduxjs/toolkit";

// report cashflow institution
export const GET_REPORT_INST_REQUEST = "[report] get institution report request";
export const GET_REPORT_INST_SUCCESS = "[report] get institution report sucessful";
export const GET_REPORT_INST_FAILURE = "[report] get institution report failure";

export const getReportInstRequestAction = () => ({
  type: GET_REPORT_INST_REQUEST
});
export const getReportInstSuccessAction = createAction(GET_REPORT_INST_SUCCESS);
export const getReportInstFailureAction = createAction(GET_REPORT_INST_FAILURE);
