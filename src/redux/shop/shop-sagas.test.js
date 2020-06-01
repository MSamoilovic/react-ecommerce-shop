import { takeLatest, call, put } from "redux-saga/effects";
import {
  firestore,
  convertSnapshotToObject,
} from "../../firebase/firebase-utils";
import {
  fetchCollectionSuccess,
  fetchCollectionFailure,
} from "./shop-actions";

import { fetchCollectionStartSaga, fetchCollectionAsync } from "./shop-sagas";

describe("fetchCollectionStart Saga", () => {
  it("should trigger on FETCH_COLLECTION_START action", () => {
    const generator = fetchCollectionStartSaga();
    expect(generator.next().value).toEqual(
      takeLatest("FETCH_COLLECTION_START", fetchCollectionAsync)
    );
  });
});

describe("fetchCollectionAsync saga", () => {
  const generator = fetchCollectionAsync();
  it("should call firestore collection", () => {
    const getCollection = jest.spyOn(firestore, "collection");
    generator.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it("should call convertSnapshotTo Object function", () => {
    const mockSnapshot = {};
    //prosledjuje se mockSnapshot generator funkciji
    expect(generator.next(mockSnapshot).value).toEqual(
      call(convertSnapshotToObject, mockSnapshot)
    );
  });

  it("should call fetchCollectionSuccess if collectionsMap is successful", () => {
    const mockCollectionMap = {
      hats: {
        id: "aaa",
      },
    };

    expect(generator.next(mockCollectionMap).value).toEqual(
      put(fetchCollectionSuccess(mockCollectionMap))
    );
  });

  it('should call fetchCollectionFailure if there is a failure anywhere', ()=> {
      const newGenerator = fetchCollectionAsync()
      newGenerator.next()
      expect(newGenerator.throw({message:'error'}).value).toEqual(put(fetchCollectionFailure('error')))
  })
});
