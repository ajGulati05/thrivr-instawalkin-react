import { createReducer } from "@reduxjs/toolkit";
import { SIDEBAR_COLLAPSED, ACTIVE_MENU_ITEM } from "../actions/ui";

const currentPath = () => {
  const path = window.location.pathname;
  return path;
};

export const initialState = {
  sidebarCollapsed: false,
  activeMenuItem: {
    _tag: "ChildNavItem",
    name: "Revenue",
    to: currentPath() === "/login" ? "/dashboard/revenue" : currentPath(),
    routerSwitch: true
  }
};

const uiReducer = createReducer(initialState, {
  [SIDEBAR_COLLAPSED]: (state, { payload }) => {
    state.sidebarCollapsed = payload;
  },
  [ACTIVE_MENU_ITEM]: (state, { payload }) => {
    state.activeMenuItem = payload;
  }
});

export default uiReducer;
