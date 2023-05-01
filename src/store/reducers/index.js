import { combineReducers } from "redux";
import global from "./global";
import user from "./user";
import ui from "./ui";
import auth from "./auth";
import login from "./login";
import forgotPassword from "./forgot-password";
import updatePassword from "./update-password";
import changePassword from "./change-password";
import profile from "./profile";
import endorsement from "./endorsement";
import review from "./review";
import duration from "./duration";
import notification from "./notification";
import modalities from "./modalities";
import license from "./license";

import clients from "./clients";
import charts from "./charts";
import availability from "./availability";
import dashboard from "./dashboard";
import bookingDetails from "./bookings";

const appReducer = combineReducers({
  global,
  user,
  ui,
  auth,
  login,
  forgotPassword,
  updatePassword,
  profile,
  review,
  endorsement,
  duration,
  notification,
  modalities,
  changePassword,
  license,
  clients,
  charts,
  availability,
  dashboard,
  bookingDetails
});

export default appReducer;
