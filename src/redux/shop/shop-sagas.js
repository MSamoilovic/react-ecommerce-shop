import {takeEvery} from 'redux-saga/effects'



export function* fetchCollectionAsync() {
    yield console.log('I am fired')
}

export function* fetchCollectionStart() {
    yield takeEvery('FETCH_COLLECTION_START', fetchCollectionAsync)
}