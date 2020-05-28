import {
  toggleCartHidden,
  addItem,
  clearItemFromCart,
  removeItemsFromCheckout,
  clearCart,
} from "./cart-actions";

describe("ToggleCartHidden action", () => {
  it("should call toggleHidden action", () => {
    expect(toggleCartHidden().type).toEqual("TOGGLE_CART_HIDDEN");
  });
});

describe("addItem action", () => {
  it("should create addItem action", () => {
    const mockItem = {
      id: 1,
    };

    const action = addItem(mockItem);
    expect(action.type).toEqual("ADD_ITEM");
    expect(action.payload).toEqual(mockItem);
  });
});

describe("clearItemFromCart action", () => {
  it("should create clearItem action", () => {
    const mockItem = {
      id: 1,
    };

    const action = clearItemFromCart(mockItem);
    expect(action.type).toEqual("CLEAR_ITEM_FROM_CART");
    expect(action.payload).toEqual(mockItem);
  });
});

describe("removeItemsFromCheckout action", () => {
  it("should create removeItems action", () => {
    const mockItem = {
      id: 1,
    };

    const action = removeItemsFromCheckout(mockItem);
    expect(action.type).toEqual("REMOVE_FROM_CHECKOUT");
    expect(action.payload).toEqual(mockItem);
  });
});

describe("clearCart action", () => {
  it("should create clearCart action", () => {
    expect(clearCart().type).toEqual("CLEAR_CART");
  });
});
