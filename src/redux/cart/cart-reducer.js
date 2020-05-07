import { addToCartItem, removeItemFromCheckout } from "./cart-utility";

const INITIAL_STATE = {
  hidden: true,
  cartItems: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_CART_HIDDEN":
      return { 
        ...state,
        hidden: !state.hidden,
      };
    case "ADD_ITEM":
      return {
        ...state,
        cartItems: addToCartItem(state.cartItems, action.payload),
      };
    case "CLEAR_ITEM_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (cartItem) => cartItem.id !== action.payload.id
        ),
      };
    case "REMOVE_FROM_CHECKOUT":
      return {
        ...state,
        cartItems: removeItemFromCheckout(state.cartItems, action.payload),
      };
    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [ ]
      }  
    default:
      return state;
  }
};

export default cartReducer;
