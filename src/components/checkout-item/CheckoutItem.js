import React from "react";
import "./CheckoutItem.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  removeItemsFromCheckout,
  addItem,
} from "../../redux/cart/cart-actions";

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
  removeItem: (item) => dispatch(removeItemsFromCheckout(item)),
  addItem: (item) => dispatch(addItem(item)),
});

export const CheckoutItem = ({ item, clearItem, removeItem, addItem }) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="productImage" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => removeItem(item)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => addItem(item)}>
          &#10095;
        </div>
      </span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={() => clearItem(item)}>
        <span role="img" aria-label="Remove Button">
          &#x274C;
        </span>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
