import { createSelector } from "reselect";

//Input selektor
const selectCart = (state) => state.cart;

//Memoizovani selektor
export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);

//Memoizovani selektor koji koristi vec postojeci memoizovani selektor
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  (cartItems) =>
    cartItems.reduce(
      (accumulatedQuantity, cartItem) =>
        accumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce(
    (accumulatedPrice, cartItem) => accumulatedPrice + cartItem.price,
    0
  )
);
