import React, { useEffect } from "react";
import { Route } from "react-router-dom";
import "./Shop.scss";
import CollectionPageContainer from "../collection/CollectionPageContainer";
import { connect } from "react-redux";
import { fetchCollectionStart } from "../../../redux/shop/shop-actions";
import CollectionOverviewContainer from "../../collection-overview/CollectionOverviewContainer";

const mapDispatchToProps = (dispatch) => ({
  fetchCollection: () => dispatch(fetchCollectionStart()),
});

const Shop = ({ fetchCollection, match }) => {
  useEffect(() => {
    fetchCollection();
  }, [fetchCollection]);

  return (
    <div className="collections-overview">
      <Route
        exact
        path={`${match.path}`}
        component={CollectionOverviewContainer}
      />
      <Route
        path={`${match.path}/:collectionId`}
        component={CollectionPageContainer}
      />
    </div>
  );
};

export default connect(null, mapDispatchToProps)(Shop);
