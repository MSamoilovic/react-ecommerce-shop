import {firestore, convertSnapshotToObject} from '../../firebase/firebase-utils'

export const fetchCollectionStart = () => ({
  type: "FETCH_COLLECTION_START",
});

export const fetchCollectionSuccess = (collectionMap) => ({
  type: "FETCH_COLLECTION_SUCCESS",
  payload: collectionMap,
});

export const fetchCollectionFailure = (errorMessage) => ({
  type: "FETCH_COLLECTION_FAILURE",
  payload: errorMessage,
});

export const fetchCollectionStartAsync = () => {
  return (dispatch) => {
    //Ovde ubaciti ceo kod koji ide u Shop Component Did Mount
    const collectionRef = firestore.collection("collections");
    dispatch(fetchCollectionStart());
    collectionRef
      .get()
      .then((snapshot) => {
        const collectionMap = convertSnapshotToObject(snapshot);
        console.log(collectionMap);
        dispatch(fetchCollectionSuccess(collectionMap));
      })
      .catch((err) => dispatch(fetchCollectionFailure(err.message)));
  };
};