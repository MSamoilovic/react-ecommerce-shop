import React from "react";
import { Route } from 'react-router-dom'
import "./Shop.scss";
import CollectionOverview from '../../collection-overview/CollectionOverview'
import CollectionPage from '../collection/CollectionPage'

const Shop = ({match}) => (
  <div className="collections-overview">
    <Route exact path={`${match.path}`} component={CollectionOverview}/>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
  </div>
);

export default Shop;
