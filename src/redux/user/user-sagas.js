import {takeLatest, call, all, put} from 'redux-saga/effects'
import { auth, provider, getUserProfile } from '../../firebase/firebase-utils'
import {googleSigninSuccess, googleSiginFailure} from './user-actions'

export function* signInWithGoogle() {
    try {
     const {user} = yield auth.signInWithPopup(provider)
     const userRef = yield call(getUserProfile, user)
     const userSnapshot = yield userRef.get()
     yield put(googleSigninSuccess({id: userSnapshot.id,...userSnapshot.data()}))
    } catch (err) {
       yield put(googleSiginFailure(err.message)) 
    }
}

export function* onGoogleSigninStart () {
    yield takeLatest('GOOGLE_SIGNIN_START', signInWithGoogle)
}

export function * userSagas() {
    yield all([
        call(onGoogleSigninStart)
    ])
} 