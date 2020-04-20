import React from "react";
import "./Directory.scss";
import { connect } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory-selectors";
import MenuItem from "../menu-item/Menu-Item";

const mapStateToProps = (state) => ({
  sections: selectDirectorySections(state),
});

const Directory = ({ sections }) => (
  <div className="directory-menu">
    {sections.map(({ title, imageURL, id, size }) => {
      return (
        <MenuItem key={id} title={title} imageURL={imageURL} size={size} />
      );
    })}
  </div>
);

export default connect(mapStateToProps)(Directory);
