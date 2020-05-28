import { clearCart } from "./cart-actions";
import { clearCartOnSignout, onSignoutSuccess } from "./cart-sagas";
import { takeLatest, put } from "redux-saga/effects";

describe("on signout success", () => {
  it("should trigger SIGNOUT_SUCCESS", async () => {
    const generator = onSignoutSuccess();
    expect(generator.next().value).toEqual(
      takeLatest("SIGNOUT_SUCCESS", clearCartOnSignout)
    );
  });
});

describe("clear cart on signout saga", () => {
  it("should fire clearCart", () => {
    const generator = clearCartOnSignout();
    expect(generator.next().value).toEqual(put(clearCart()));
  });
});
