import React from "react";
import PropTypes from "prop-types";
import data from "./data/usa-map-dimensions";
import USAState from "./components/USAState";

//class USAMap extends React.Component {
const USAMap = (props) => {
  const clickHandler = (stateAbbreviation) => {
    props.onClick(stateAbbreviation);
  };

  const fillStateColor = (state) => {
    if (props.customize && props.customize[state] && props.customize[state].fill) {
      return props.customize[state].fill;
    }

    return props.defaultFill;
  };

  const stateClickHandler = (state) => {
    if (props.customize && props.customize[state] && props.customize[state].clickHandler) {
      return props.customize[state].clickHandler
    }
    return clickHandler;
  }

  const buildPaths = () => {
    let paths = [];
    let dataStates = data();
    for (let stateKey in dataStates) {
      const path = <USAState key={stateKey} stateName={dataStates[stateKey].name} dimensions={dataStates[stateKey]["dimensions"]} state={stateKey} fill={fillStateColor(stateKey)} onClickState={stateClickHandler(stateKey)} />
      paths.push(path);
    }
    return paths;
  };

  return (
    <svg className="us-state-map" xmlns="http://www.w3.org/2000/svg" width={props.width} height={props.height} viewBox="0 0 959 593">
      <title>{props.title}</title>
      <g className="outlines">
        {buildPaths()}
        <g className="DC state">
          <path className="DC1" fill={fillStateColor("DC1")} d="M801.8,253.8 l-1.1-1.6 -1-0.8 1.1-1.6 2.2,1.5z" />
          <circle className="DC2" onClick={clickHandler} data-name={"DC"} fill={fillStateColor("DC2")} stroke="#FFFFFF" strokeWidth="1.5" cx="801.3" cy="251.8" r="5" opacity="1" />
        </g>
      </g>
    </svg>
  );
}

USAMap.propTypes = {
  onClick: PropTypes.func.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
  title: PropTypes.string,
  defaultFill: PropTypes.string,
  customize: PropTypes.object
};

USAMap.defaultProps = {
  onClick: () => { },
  width: 959,
  height: 593,
  defaultFill: "#D3D3D3",
  title: "Blank US states map",
  customize: {}
};

export default USAMap;
