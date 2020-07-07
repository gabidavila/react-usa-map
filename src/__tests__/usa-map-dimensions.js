import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-15";
import USAMap from "../index";
import data from "../data/usa-map-dimensions";

configure({ adapter: new Adapter() });

describe("Component: USAMap", () => {
  let element;
  let componentProps;
  let onClickMock;
  let customisedClickHandleMock;

  beforeEach(() => {
    onClickMock = jest.fn();
    customisedClickHandleMock = jest.fn();
    componentProps = {
      width: 959,
      height: 593,
      defaultFill: "#D3D3D3",
      title: "Blank US states map",
      customize: {
        "AK": {
          fill: "dummy-fill"
        },
        "NJ": {
          fill: "navy",
          clickHandler: customisedClickHandleMock,
        }
      },
      onClick: onClickMock
    };
    element = shallow(<USAMap {...componentProps} />);
  });

  afterEach(() => {
    onClickMock.mockReset();
  });

  it("should render all states based on `usa-map-dimensions` file", () => {
    expect(onClickMock.mock.calls.length).toEqual(0);
    const statesLength = element.find("USAState").length;
    expect(Object.keys(data()).length).toEqual(statesLength);
  });

  it("should add customised data by state", () => {
    const statesLength = element.find(`USAState[fill="${componentProps.customize.AK.fill}"]`);
    expect(statesLength.length).toEqual(1);
  });

  it("should calls `onClick` when the component is clicked", () => {
    expect(onClickMock.mock.calls.length).toEqual(0);
    const state = element.find(".state .DC2");
    state.simulate("click");
    expect(onClickMock.mock.calls[0]).toEqual([undefined]);
    expect(customisedClickHandleMock.mock.calls.length).toEqual(0);
  });

  it("should calls customise method is customise property has click handler", () => {
    // You have to mount instead of shallow because of dom-child of USAState.
    // We can simulate click only on that child, not in parent.
    element = mount(<USAMap {...componentProps} />);
    const state = element.find(`USAState[fill="${componentProps.customize.NJ.fill}"]`).last();
    expect(state.length).toEqual(1);
    state.simulate("click");
    expect(onClickMock.mock.calls.length).toEqual(0);
    expect(customisedClickHandleMock.mock.calls.length).toEqual(1);
  });
});
