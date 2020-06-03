import shopReducer from "./shop-reducer";

const initialState = {
  collections: null,
  isFetching: false,
  errorMessage: null,
};

describe("shopReducer", () => {
  it("should return initial state", () => {
    expect(shopReducer(undefined, {})).toEqual(initialState);
  });

  it("should set isFetching to true if fetchCollectionStart action is fired", () => {
    expect(
      shopReducer(initialState, { type: "FETCH_COLLECTION_START" }).isFetching
    ).toBe(true);
  });

  it("should pass collection and isFetching set to false when fetchCollection success is fired", () => {
    const mockCollection = [{ id: 1 }, { id: 2 }];

    expect(
      shopReducer(initialState, {
        type: "FETCH_COLLECTION_SUCCESS",
        payload: mockCollection,
      }).collections
    ).toEqual(mockCollection);
  });

  it("should set isFetching to false and errorMessage to payload when fetchCollectionFailure is fired", () => {
    expect(
      shopReducer(initialState, {
        type: "FETCH_COLLECTION_FAILURE",
        payload: "error",
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: "error",
    });
  });
});
