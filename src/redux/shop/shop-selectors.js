import { createSelector } from "reselect";

const selectShop = (state) => state.shop;

export const selectShopCollection = createSelector(
  [selectShop],
  (shop) => shop.collections
);

export const selectCollectionArr = createSelector(
  [selectShopCollection],
  (collections) =>
    collections ? Object.keys(collections).map((i) => collections[i]) : []
);

export const selectCollection = (collectionURLParam) =>
  createSelector(
    [selectShopCollection],
    (collections) => collections ? collections[collectionURLParam] : null
  );

export const selectIsFetching = createSelector(
  [selectShop],
  (shop) => shop.isFetching
)

export const selectIsCollectionLoaded = createSelector(
  [selectShop],
  shop => !!shop.collections
)