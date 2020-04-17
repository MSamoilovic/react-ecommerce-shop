import React from "react";
import "./CartDropdown.scss";
import SubmitButton from "../submit-button/SubmitButton";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";

const CartDropdown = ({ cartItems }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <SubmitButton>GO TO CHECKOUT</SubmitButton>
  </div>
);

const mapStateToProps = (state) => ({
  cartItems: state.cart.cartItems,
});

export default connect(mapStateToProps)(CartDropdown);
