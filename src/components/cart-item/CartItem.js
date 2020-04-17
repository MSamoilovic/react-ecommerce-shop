import React from "react";
import "./CartItem.scss";

const CartItem = ({ item: { name, price, imageUrl, quantity } }) => (
  <div className="cart-item">
    <img src={imageUrl} alt={name} />
    <div className="cart-item-details">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x {price}
      </span>
    </div>
  </div>
);

export default CartItem;
