import React from "react";
import { Route } from "react-router-dom";
import "./Shop.scss";
import CollectionOverview from "../../collection-overview/CollectionOverview";
import CollectionPage from "../collection/CollectionPage";
import {
  firestore,
  convertSnapshotToObject,
} from "../../../firebase/firebase-utils";
import { connect } from "react-redux";
import { updateCollections } from "../../../redux/shop/shop-actions";

const mapDispatchToProps = (dispatch) => ({
  updateCollection: (collectionMap) =>
    dispatch(updateCollections(collectionMap)),
});

class Shop extends React.Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection("collections");
    const { updateCollection } = this.props;
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async (snapshot) => {
      const collectionMap = convertSnapshotToObject(snapshot);
      //console.log(collectionMap)
      updateCollection(collectionMap)
    });
  }

  render() {
    const { match } = this.props;

    return (
      <div className="collections-overview">
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPage}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Shop);
