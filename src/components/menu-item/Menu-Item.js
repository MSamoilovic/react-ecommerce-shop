import React from "react";
import "./Menu-item.scss";

const MenuItem = ({ title, imageURL, size, linkUrl }) => (
  <div className={`${size} menu-item`}>
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageURL})`,
      }}
    />
    <div className="content">
      <h2 className="title">{title.toUpperCase()}</h2>
      <span className="subtitle">Shop Now</span>
    </div>
  </div>
);

export default MenuItem;
