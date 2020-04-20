import collectionData from "./Shop.data";

const INITIAL_STATE = {
  collections: collectionData,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default shopReducer