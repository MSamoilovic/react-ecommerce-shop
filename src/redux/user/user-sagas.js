import { takeLatest, call, all, put } from "redux-saga/effects";
import { auth, provider, getUserProfile } from "../../firebase/firebase-utils";
import {
  googleSigninSuccess,
  googleSiginFailure,
  emailSigninSuccess,
  emailSigninFailure,
} from "./user-actions";

export function* signInWithGoogle() {
  try {
    const { user } = yield auth.signInWithPopup(provider);
    const userRef = yield call(getUserProfile, user);
    const userSnapshot = yield userRef.get();
    yield put(
      googleSigninSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (err) {
    yield put(googleSiginFailure(err.message));
  }
}

//prosledjuje se payload iz akcije emailSigninStart, sto je objekat {email:'', password:""}
export function* signInWithEmail({ payload: { email, password } }) {
  try {
    const { user } = yield auth.signInWithEmailAndPassword(email, password);
    const userRef = yield call(getUserProfile, user);
    const userSnapshot = yield userRef.get();
    yield put(
      emailSigninSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
    );
  } catch (err) {
    yield put(emailSigninFailure(err));
  }
}

export function* onGoogleSigninStart() {
  yield takeLatest("GOOGLE_SIGNIN_START", signInWithGoogle);
}

export function* onEmailSigninStart() {
  yield takeLatest("EMAIL_SIGNIN_START", signInWithEmail);
}

export function* userSagas() {
  yield all([call(onGoogleSigninStart), call(onEmailSigninStart)]);
}
