import React from "react";
import PropTypes from "prop-types";

const USAState = (props) => {
  return (
    <path d={props.dimensions} fill={props.fill} data-name={props.state} className={`${props.state} state`} onClick={props.onClickState}>
      <title>{props.stateName}</title>
    </path>
  );
}

USAState.propTypes = {
  dimensions: PropTypes.any,
  fill: PropTypes.any,
  state: PropTypes.any,
  onClickState: PropTypes.func,
  stateName: PropTypes.any

};

export default USAState;
