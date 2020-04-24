import React from "react";
import "./CollectionPreview.scss";
import CollectionItem from "../prod-collection-item/CollectionItem";
import {
  CollectionPreviewContainer,
  TitleContainer,
  PreviewContainer,
} from "./CollectionPreview.styles";
import { withRouter } from 'react-router-dom'

const CollectionPreview = ({ title, items, routeName, match, history }) => (
  <CollectionPreviewContainer>
    <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>
      {title.toUpperCase()}
    </TitleContainer>
    <PreviewContainer>
      {items.slice(0, 4).map((item) => (
        //rest of props menja imageUrl={imageUrl}, name={name}
        <CollectionItem key={item.id} item={item} />
      ))}
    </PreviewContainer>
  </CollectionPreviewContainer>
);

export default withRouter(CollectionPreview);
