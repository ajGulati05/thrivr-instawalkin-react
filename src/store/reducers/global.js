import { createReducer } from "@reduxjs/toolkit";
import { CHANGE_THEME, GLOBAL_LOADER_DECREMENT, GLOBAL_LOADER_RESET, GLOBAL_LOADER_INCREMENT } from "../actions/global";

export const initialState = {
  theme: "dark",
  globalLoader: 0
};

const global = createReducer(initialState, {
  [CHANGE_THEME]: (state, { payload }) => {
    state.theme = payload;
  },
  [GLOBAL_LOADER_INCREMENT]: state => {
    state.globalLoader = state.globalLoader + 1;
  },
  [GLOBAL_LOADER_DECREMENT]: state => {
    state.globalLoader = state.globalLoader - 1;
  },
  [GLOBAL_LOADER_RESET]: state => {
    state.globalLoader = 0;
  }
});

export default global;
