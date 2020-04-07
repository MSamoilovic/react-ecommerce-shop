import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../prod-collection-item/CollectionItem";

const CollectionPreview = ({ title, items }) => (
  <div className="preview-container">
    <h1 className="preview-container_title">{title.toUpperCase()}</h1>
    <div className="preview-container_item">
      {items.slice(0, 4).map(({id, ...restOfProps}) => (
        //rest of props menja imageUrl={imageUrl}, name={name}
        <CollectionItem key={id} {...restOfProps} />
      ))}
    </div>
  </div>
);

export default CollectionPreview;
