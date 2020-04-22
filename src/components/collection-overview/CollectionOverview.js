import React from "react";
import CollectionPreview from "../prod-collection-preview/CollectionPreview";
import { connect } from "react-redux";
import { selectCollectionArr } from "../../redux/shop/shop-selectors";
import "./CollectionOverview.scss";

const mapStateToProps = (state) => ({
  collections: selectCollectionArr(state),
});

const CollectionOverview = ({ collections }) => {
  return (
    <div>
      {collections.map((col) => (
        <CollectionPreview key={col.id} title={col.title} items={col.items} />
      ))}
    </div>
  );
};

export default connect(mapStateToProps)(CollectionOverview);
