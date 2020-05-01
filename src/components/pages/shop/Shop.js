import React from "react";
import { Route } from "react-router-dom";
import "./Shop.scss";
import CollectionPageContainer from "../collection/CollectionPageContainer";
import { connect } from "react-redux";
import { fetchCollectionStartAsync } from "../../../redux/shop/shop-actions";
import CollectionOverviewContainer from "../../collection-overview/CollectionOverviewContainer";

/* const CollectionOverviewWithSpinner = Spinner(CollectionOverview); */
/* const CollectionPageWithSpinner = Spinner(CollectionPage);
 */


const mapDispatchToProps = (dispatch) => ({
  fetchCollection: () => dispatch(fetchCollectionStartAsync()),
});

class Shop extends React.Component {
  componentDidMount() {
    //Observable pattern
    /* this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionMap = convertSnapshotToObject(snapshot);
        //console.log(collectionMap)
        updateCollection(collectionMap);
        this.setState({ loading: false });
      }
    ); */

    //Promise Pattern
    /* const collectionSnapshot = await collectionRef.get();
    const collectionMap = convertSnapshotToObject(collectionSnapshot);
    await updateCollection(collectionMap);
    this.setState({ loading: false }); */

    const { fetchCollection } = this.props;
    fetchCollection();
  }

  render() {
    const { match } = this.props;

    return (
      <div className="collections-overview">
        <Route
          exact
          path={`${match.path}`}
          /* render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />
          )} */
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

export default connect(null, mapDispatchToProps)(Shop);
