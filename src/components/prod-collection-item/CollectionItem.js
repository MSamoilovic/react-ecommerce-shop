import React from "react";
import "./CollectionItem.scss";
import SubmitButton from "../submit-button/SubmitButton";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart-actions";

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl } = item;

  return (
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
      <SubmitButton onClick={()=> addItemToCart(item)} inverted>
        Add to Cart
      </SubmitButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItemToCart: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
