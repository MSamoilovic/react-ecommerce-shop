import React from "react";
import "./CheckoutItem.scss";
import { connect } from "react-redux";
import { clearItemFromCart } from "../../redux/cart/cart-actions";

const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(clearItemFromCart(item)),
});

const CheckoutItem = ({ item, clearItem }) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="productImage" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button" onClick={()=> clearItem(item)}>
        <span role="img" aria-label="Remove Button">
          &#x274C;
        </span>
      </div>
    </div>
  );
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
