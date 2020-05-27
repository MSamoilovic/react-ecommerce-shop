import React from "react";
import "./CartDropdown.scss";
import SubmitButton from "../submit-button/SubmitButton";
import CartItem from "../cart-item/CartItem";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart-selectors";
import { toggleCartHidden } from "../../redux/cart/cart-actions";

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">u
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="message">Your cart is empty.</span>
      )}
    </div>
    <SubmitButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </SubmitButton>
  </div>
);

export default connect(mapStateToProps)(CartDropdown);
