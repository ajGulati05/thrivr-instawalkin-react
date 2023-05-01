import { takeEvery, put, call, all } from "redux-saga/effects";
import pNotification from "../../components/PNotification";
import {
  GET_PROFILE_REQUEST,
  getProfileSuccessAction,
  getProfileFailureAction,
  UPDATE_PROFILE_IMG_REQUEST,
  updatePrpfileImgSuccessAction,
  updatePrpfileImgFailureAction,
  UPDATE_THERAPIST_PROFILE_REQUEST,
  updateTherapistProfileSuccessAction,
  updateTherapistProfileFailureAction,
  UPDATE_THERAPIST_BIO_REQUEST,
  updateTherapistBioSuccessAction,
  updateTherapistBioFailureAction
} from "../actions/profile";
import { globalLoaderIncrementAction, globaLoaderDecrementAction } from "../actions/global";
import { profileApi } from "../../services";

// get therapist profile
function* getProfileSaga({ payload }) {
  try {
    yield put(globalLoaderIncrementAction());
    const response = yield call(profileApi.getProfile, payload);
    if (response && response.status) {
      yield put(getProfileSuccessAction(response.data));
    }
  } catch (e) {
    yield put(getProfileFailureAction(e));
  } finally {
    yield put(globaLoaderDecrementAction());
  }
}

// update profile image
function* updateProfileImgSaga({ payload }) {
  try {
    const response = yield call(profileApi.updateProfileImg, payload);
    if (response && response.status) {
      yield put(updatePrpfileImgSuccessAction(response.data));
      const notifyMessage = {
        type: "success",
        message: "Profile Image Updated"
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    yield put(updatePrpfileImgFailureAction(e));
  }
}

// update therapist profile
function* updateTherapistProfileSaga({ payload }) {
  try {
    const response = yield call(profileApi.updateTherapistProfile, payload);
    if (response && response.status) {
      yield put(updateTherapistProfileSuccessAction(response.data));
      const notifyMessage = {
        type: "success",
        message: "Personal Information Updated"
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    yield put(updateTherapistProfileFailureAction(e));
  }
}

// update therapist bio
function* updateTherapistBioSaga({ payload }) {
  try {
    const response = yield call(profileApi.updateTherapistBio, payload);
    if (response && response.status) {
      yield put(updateTherapistBioSuccessAction(response.data));
      const notifyMessage = {
        type: "success",
        message: "Biographical Updated"
      };
      pNotification(notifyMessage);
    }
  } catch (e) {
    yield put(updateTherapistBioFailureAction(e));
  }
}

export default function*() {
  yield all([
    takeEvery(GET_PROFILE_REQUEST, getProfileSaga),
    takeEvery(UPDATE_PROFILE_IMG_REQUEST, updateProfileImgSaga),
    takeEvery(UPDATE_THERAPIST_PROFILE_REQUEST, updateTherapistProfileSaga),
    takeEvery(UPDATE_THERAPIST_BIO_REQUEST, updateTherapistBioSaga)
  ]);
}
