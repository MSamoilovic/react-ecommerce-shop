import { connect } from "react-redux";
import { compose } from "redux";
import { selectIsCollectionLoaded } from "../../../redux/shop/shop-selectors";
import Spinner from "../../spinner/Spinner";
import CollectionPage from "./CollectionPage";

const mapStateToProps = (state) => ({
  isLoading: !selectIsCollectionLoaded(state),
});

const collectionPageContainer = compose(
    connect(mapStateToProps),
    Spinner
)(CollectionPage)

export default collectionPageContainer