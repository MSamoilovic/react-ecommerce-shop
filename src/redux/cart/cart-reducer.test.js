import CartReducer from "./cart-reducer";
import cartReducer from "./cart-reducer";

const initialState = {
  hidden: true,
  cartItems: [],
};

describe("Cart Reducer", () => {
  it("should render initial state", () => {
    expect(CartReducer(undefined, {})).toEqual(initialState);
  });

  it("should toggle hidden property when ToggleCartHidden action is fired", () => {
    expect(
      CartReducer(initialState, { type: "TOGGLE_CART_HIDDEN" }).hidden
    ).toBe(false);
  });

  it("should increase quantity of item in the cart by 1 if addItem action is fired with same item as payload", () => {
    const mockItem = {
      id: 1,
      quantity: 4,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(
      cartReducer(mockPrevState, { type: "ADD_ITEM", payload: mockItem })
        .cartItems[0].quantity
    ).toBe(5);
  });

  it("should decrease quantity of item in the cart by 1 if addItem action is fired with same item as payload", () => {
    const mockItem = {
      id: 1,
      quantity: 4,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 1 }],
    };

    expect(
      cartReducer(mockPrevState, {
        type: "REMOVE_FROM_CHECKOUT",
        payload: mockItem,
      }).cartItems[0].quantity
    ).toBe(3);
  });

  it("should remove item from cart if clearItemFromCart is called with payload of existing item", () => {
    const mockItem = {
      id: 1,
      quantity: 1,
    };

    const mockPrevState = {
      hidden: true,
      cartItems: [mockItem, { id: 2, quantity: 3 }],
    };

    expect(
      cartReducer(mockPrevState, {
        type: "CLEAR_ITEM_FROM_CART",
        payload: mockItem,
      }).cartItems.includes((cartItem) => cartItem.id === 1)
    ).toBe(false);
  });

  it('should clear cart when clearCart action is called', ()=> {
      const mockPrevState = {
          hidden:true,
          cartItems: [{id:1, quantity:2}, {id:4, quantity:3}]
      }

      expect(cartReducer(mockPrevState, {type: 'CLEAR_CART'}).cartItems.length).toBe(0)
  })
});
