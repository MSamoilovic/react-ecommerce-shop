import React from "react";
import "./Directory.scss";
import MenuItem from "../menu-item/Menu-Item";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "Cactus",
          imageURL:
            "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1090&q=80",
          id: 1,
        },
        {
          title: "Succulents",
          imageURL: "https://images.unsplash.com/photo-1483794344563-d27a8d18014e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
          id: 2,
        },
        {
          title: "Flowers",
          imageURL: "https://images.unsplash.com/photo-1490291268787-39288ca029c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
          id: 3,
        },
        {
          title: "Bouquets",
          imageURL: "https://images.unsplash.com/photo-1556712691-5c39e0e32a8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
          id: 4,
          size: 'large'
        },
        {
          title: "Pots and Others",
          imageURL: "https://images.unsplash.com/photo-1526319601710-b83bec6bd3d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
          id: 5,
          size: 'large'
        },
      ],
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageURL, id, size}) => {
            return (
                <MenuItem key={id} title={title} imageURL={imageURL} size={size} />
            );
        })}
      </div>
    );
  }
}

export default Directory;
