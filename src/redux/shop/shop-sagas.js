import { takeEvery, call, put } from "redux-saga/effects";
import {
  firestore,
  convertSnapshotToObject,
} from "../../firebase/firebase-utils";

import { fetchCollectionSuccess, fetchCollectionFailure } from "./shop-actions";

export function* fetchCollectionAsync() {
  try {
    const collectionRef = firestore.collection("collections");
    const snapshot = yield collectionRef.get();
    const collectionsMap = yield call(convertSnapshotToObject, snapshot);
    yield put(fetchCollectionSuccess(collectionsMap));
  } catch (error) {
    yield put(fetchCollectionFailure(error.message));
  }
}

export function* fetchCollectionStart() {
  yield takeEvery("FETCH_COLLECTION_START", fetchCollectionAsync);
}
