import React from "react";
import CollectionPreview from "../prod-collection-preview/CollectionPreview";
import { connect } from "react-redux";
import { selectCollectionArr } from "../../redux/shop/shop-selectors";
import "./CollectionOverview.scss";

const mapStateToProps = (state) => ({
  collections: selectCollectionArr(state),
});

const CollectionOverview = (props) => {
  return (
    <div>
      {props.collections.map(({id, ...otherProps}) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(CollectionOverview);
