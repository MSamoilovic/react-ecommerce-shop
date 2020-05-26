import React from "react";
import "./Menu-item.scss";

const MenuItem = ({ title, imageURL, size, linkUrl, history, match }) => (
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`) }>
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
