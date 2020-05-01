import { connect } from "react-redux"
import { compose } from 'redux'
import { selectIsFetching } from "../../redux/shop/shop-selectors";
import Spinner from "../spinner/Spinner";
import CollectionOverview from "./CollectionOverview";

const mapStateToProps = (state) => ({
  isLoading: selectIsFetching(state),
});

const collectionOverviewContainer = compose(
    connect(mapStateToProps),
    Spinner
)(CollectionOverview)

export default collectionOverviewContainer

//Container komponenta prosledjuje isLoading selektor iz Redux Store
// u Spinner komponentu koja je HOC i koja renderuje CollectionOverview
//vezano za isLoading vrednost

// Container komponenta ne vrsi nikakav render vec samo prosledjuje props u child komponentu

//Compose je wrapper funkcija iz Redux biblioteke koja omogucava
//pozivanje funkcija s desna na levo koje koriste CollectionOverview kao parametar
//Sto znaci da prvo poziva Spinner kao HOC pa zatim connect(mapStateToProps)

//Prevedeno - connect(mapStateToProps)(Spinner(CollectionOverview)) 