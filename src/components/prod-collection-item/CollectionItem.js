import React from "react";
import "./CollectionItem.scss";

const CollectionItem = ({id, price, name, imageUrl }) => (
  <div className="collection-item-container">
    <div
      className="collection-item-container-image"
      style={{
        backgroundImage: `url('${imageUrl}')`,
      }}
    ></div>
    <div className="collection-item-container-info">
      <span className="collection-item-container-info_name">{name}</span>
      <span className="collection-item-container-info_price">{price}</span>
    </div>
  </div>
);

export default CollectionItem;
