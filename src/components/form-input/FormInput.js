import React from "react";
 import './FormInput.scss'

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className="form-group">
    <input className="form-input" onChange={handleChange} {...otherProps} />
    <label className="form-input-label shrink">{label}</label>
  </div>
);

export default FormInput;
