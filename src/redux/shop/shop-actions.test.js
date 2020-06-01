import {
  fetchCollectionFailure,
  fetchCollectionStart,
  fetchCollectionSuccess,
} from "./shop-actions";

describe("fetchCollectionStart Action", () => {
  it("should create fetchCollectionStart action", () => {
    expect(fetchCollectionStart().type).toEqual("FETCH_COLLECTION_START");
  });
});

describe("fetchCollectionSucces action", () => {
  it("should create fetchCollectionSuccess action", () => {
    const mockCollectionMap = {
      shoes: {
        id: 1,
      },
    };

    const action = fetchCollectionSuccess(mockCollectionMap)

    expect(action.type).toEqual('FETCH_COLLECTION_SUCCESS')
    expect(action.payload).toEqual(mockCollectionMap)
  });
});

describe('fetchCollectionFailure action', ()=> {
    it('should create fetchCollectionFailure action', ()=> {
        const mockErrorMessage = {
            message: 'error'
        }

        const action = fetchCollectionFailure(mockErrorMessage)

        expect(action.type).toEqual("FETCH_COLLECTION_FAILURE")
        expect(action.payload).toEqual(mockErrorMessage)
    })
})
