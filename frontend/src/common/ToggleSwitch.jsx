import React from "react";
import "./index.css";
import PropTypes from 'prop-types';


const ToggleSwitch = (props) => {
 
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={props.checked} onChange={props.onChange} />
      <span className="switch" />
    </label>
  );
}

ToggleSwitch.propTypes ={
  checked : PropTypes.bool,
  onChange: PropTypes.func
}

export default ToggleSwitch;