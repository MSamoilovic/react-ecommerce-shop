import React from "react";
import "./CheckoutItem.scss";

const CheckoutItem = ({ item }) => {
  const { name, price, quantity, imageUrl } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="productImage" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">${price}</span>
      <div className="remove-button">
        <span role="img" aria-label="Remove Button">
          &#x274C;
        </span>
      </div>
    </div>
  );
};

export default CheckoutItem;
