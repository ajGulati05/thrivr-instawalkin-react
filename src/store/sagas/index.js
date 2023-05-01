import { all } from "redux-saga/effects";

import globalSaga from "./global";
import authSaga from "./auth";
import loginSaga from "./login";
import userSaga from "./user";
import forgotPasswordSaga from "./forgot-password";
import updatePasswordSaga from "./update-password";
import currenciesSaga from "./currencies";
import profileSaga from "./profile";
import reviewSaga from "./review";
import endorsementSaga from "./endorsement";
import durationSaga from "./duration";
import modalitySaga from "./modalities";
import notificationSaga from "./notification";
import changePasswordSaga from "./change-password";
import licenseSaga from "./license";
import clientsSaga from "./clients";
import availabilitySaga from "./availability";
import dashboardSaga from "./dashboard";
import bookingsSaga from "./bookings";
import getReviewsSaga from "./review";
import getChartsSaga from "./charts";
export default function*() {
  yield all([
    globalSaga(),
    authSaga(),
    loginSaga(),
    userSaga(),
    forgotPasswordSaga(),
    updatePasswordSaga(),
    currenciesSaga(),
    profileSaga(),
    reviewSaga(),
    getChartsSaga(),
    endorsementSaga(),
    durationSaga(),
    modalitySaga(),
    notificationSaga(),
    changePasswordSaga(),
    licenseSaga(),
    clientsSaga(),
    availabilitySaga(),
    dashboardSaga(),
    bookingsSaga(),
    getReviewsSaga()
  ]);
}
