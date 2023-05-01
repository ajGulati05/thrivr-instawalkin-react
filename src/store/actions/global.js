import { createAction } from "@reduxjs/toolkit";

export const CHANGE_THEME = "[global] change theme";

export const GLOBAL_LOADER_INCREMENT = "[global] global loader increment";
export const GLOBAL_LOADER_DECREMENT = "[global] global loader decrement";
export const GLOBAL_LOADER_RESET = "[global] global loader reset";

export const changeThemeAction = createAction(CHANGE_THEME);

export const globalLoaderIncrementAction = createAction(GLOBAL_LOADER_INCREMENT);
export const globaLoaderDecrementAction = createAction(GLOBAL_LOADER_DECREMENT);
export const globaLoaderResetAction = createAction(GLOBAL_LOADER_RESET);
