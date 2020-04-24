import React from "react";
import { Route } from "react-router-dom";
import "./Shop.scss";
import CollectionOverview from "../../collection-overview/CollectionOverview";
import CollectionPage from "../collection/CollectionPage";

import { connect } from "react-redux";
import { fetchCollectionStartAsync } from "../../../redux/shop/shop-actions";
import Spinner from "../../spinner/Spinner";
import { selectIsFetching, selectIsCollectionLoaded } from '../../../redux/shop/shop-selectors'

const CollectionOverviewWithSpinner = Spinner(CollectionOverview);
const CollectionPageWithSpinner = Spinner(CollectionPage);

const mapStateToProps = state => ({
  isFetching: selectIsFetching(state),
  isLoaded: selectIsCollectionLoaded(state)
})

const mapDispatchToProps = (dispatch) => ({
  fetchCollection: () => dispatch(fetchCollectionStartAsync())
});

class Shop extends React.Component {

  async componentDidMount() {
    
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
    fetchCollection()
  }

  render() {
    const { match, isFetching, isLoaded } = this.props;
    
    return (
      <div className="collections-overview">
        <Route
          exact
          path={`${match.path}`}
          render={(props) => (
            <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner isLoading={!isLoaded} {...props} />
          )}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Shop);
