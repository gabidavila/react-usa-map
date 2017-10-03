import React from "react";

class USAState extends React.Component {
  render() {
    return (
      <path d={this.props.dimensions} fill={this.props.fill} data-name={this.props.state} className={`${this.props.state} state`} onClick={this.props.onClickState} />
    );
  }
}

export default USAState;
