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
    {sections.map(({ title, imageURL, id, size, linkUrl }) => {
      return (
        <MenuItem key={id} title={title} imageURL={imageURL} size={size} linkUrl={linkUrl} />
      );
    })}
  </div>
);

export default connect(mapStateToProps)(Directory);
