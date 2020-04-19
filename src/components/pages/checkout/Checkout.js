import React from "react";
import "./Checkout.scss";
import { connect } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
} from "../../../redux/cart/cart-selectors";

import CheckoutItem from "../../checkout-item/CheckoutItem";

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
  cartTotal: selectCartTotal(state),
});

const CheckoutPage = ({ cartItems, cartTotal }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} item={cartItem} />
    ))}
    <div className="total">Total: ${cartTotal}</div>
  </div>
);

export default connect(mapStateToProps)(CheckoutPage);
