import { takeLatest, call, all, put } from "redux-saga/effects";
import {
  auth,
  provider,
  getUserProfile,
  getCurrentUser,
} from "../../firebase/firebase-utils";
import {
  signinSuccess,
  signinFailure,
  signOutSuccess,
  signOutFailure,
} from "./user-actions";

export function* getUserSnapshot(userObj) {
  try {
    const userRef = yield call(getUserProfile, userObj);
    const userSnapshot = yield userRef.get();
    yield put(signinSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
  } catch (err) {
    yield put(signinFailure(err));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(provider);
    yield getUserSnapshot(user);
  } catch (err) {
    yield put(signinFailure(err));
  }
}

//prosledjuje se payload iz akcije emailSigninStart, sto je objekat {email:'', password:""}
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    yield getUserSnapshot(user);
  } catch (err) {
    yield put(signinFailure(err));
  }
}

export function* isUserAuthenticated() {
  try {
    const user = yield getCurrentUser();
    if (!user) return;
    yield getUserSnapshot(user);
  } catch (err) {
    yield signinFailure(err);
  }
}

export function* signOutUser() {
  try {
    yield auth.signOut();
    yield put(signOutSuccess());
  } catch (err) {
    yield put(signOutFailure())
  }
}

export function* onGoogleSigninStart() {
  yield takeLatest("GOOGLE_SIGNIN_START", signInWithGoogle);
}

export function* onEmailSigninStart() {
  yield takeLatest("EMAIL_SIGNIN_START", signInWithEmail);
}

export function* onCheckUserSession() {
  yield takeLatest("CHECK_USER_SESSION", isUserAuthenticated);
}

export function* onSignoutStart() {
  yield takeLatest("SIGNOUT_START", signOutUser);
}

export function* userSagas() {
  yield all([
    call(onGoogleSigninStart),
    call(onEmailSigninStart),
    call(onCheckUserSession),
  ]);
}
