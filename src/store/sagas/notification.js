import { takeEvery, put, call, all } from "redux-saga/effects";
import {
  GET_THERAPIST_NOTIFICATION_REQUEST,
  getTherapistNotificationSuccessAction,
  getTherapistNotificationFailureAction,
  UPDATE_THERAPIST_NOTIFICATION_REQUEST,
  updateTherapistNotificationSuccessAction,
  updateTherapistNotificationFailureAction
} from "../actions/notification";
import { notificationApi } from "../../services";
import pNotification from "../../components/PNotification";

// get therapist notifications
function* getTherapistNotificationSaga({ payload }) {
  try {
    const response = yield call(notificationApi.getTherapistNotifications, payload);
    if (response && response.status) {
      yield put(getTherapistNotificationSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getTherapistNotificationFailureAction(e));
  }
}

// update therapist notifications
function* updateTherapistNotificationSaga({ payload }) {
  try {
    const response = yield call(notificationApi.updateTherapistNotification, payload);
    if (response && response.status) {
      yield put(updateTherapistNotificationSuccessAction(response.data));
      const notifyMessage = {
        type: "success",
        message: "Notification Settings Updated"
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    yield put(updateTherapistNotificationFailureAction(e));
  }
}

export default function*() {
  yield all([
    takeEvery(GET_THERAPIST_NOTIFICATION_REQUEST, getTherapistNotificationSaga),
    takeEvery(UPDATE_THERAPIST_NOTIFICATION_REQUEST, updateTherapistNotificationSaga)
  ]);
}
