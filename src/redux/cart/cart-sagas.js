 import { takeLatest, put, call, all } from 'redux-saga/effects'
 import { clearCart } from './cart-actions'

export function* clearCartOnSignout () {
    yield put(clearCart())
}

export function * onSignoutSuccess() {
    yield takeLatest('SIGNOUT_SUCCESS', clearCartOnSignout)
}

 export function* cartSagas() {
     yield all([call(onSignoutSuccess)])
 }