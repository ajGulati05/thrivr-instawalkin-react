import { createAction } from "@reduxjs/toolkit";

export const SIDEBAR_COLLAPSED = "[SIDEBAR_COLLAPSED] hamburger action";
export const sidebarCollapsedAction = createAction(SIDEBAR_COLLAPSED);

export const ACTIVE_MENU_ITEM = "[ACTIVE_MENU_ITEM] current active menu item";
export const activeMenuItemAction = createAction(ACTIVE_MENU_ITEM);
