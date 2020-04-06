import React from "react";
import collectionData from "./Shop.data";
import "./Shop.scss";

import CollectionPreview from "../../prod-collection-preview/CollectionPreview";

class Shop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: collectionData,
    };
  }

  render() {
    return (
      <div>
        {this.state.collections.map((col) => (
          <CollectionPreview key={col.id} title={col.title} items={col.items} />
        ))}
      </div>
    );
  }
}

export default Shop;
