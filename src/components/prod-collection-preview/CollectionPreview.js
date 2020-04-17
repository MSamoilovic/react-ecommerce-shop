import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../prod-collection-item/CollectionItem";

const CollectionPreview = ({ title, items }) => (
  <div className="preview-container">
    <h1 className="preview-container_title">{title.toUpperCase()}</h1>
    <div className="preview-container_item">
      {items.slice(0, 4).map((item) => (
        //rest of props menja imageUrl={imageUrl}, name={name}
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
  </div>
);

export default CollectionPreview;
