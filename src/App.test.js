import React from "react";
//import { render } from '@testing-library/react';
import { shallow, mount } from "enzyme";
import Card from "./components/card-component/Card";
import CardContainer from "./components/card-wrapper-component/CardContainer";

const mockName = "marko";
const cardWrapper = shallow(<Card name={mockName} />);
const cardContainerWrapper = mount(<CardContainer />);


describe("Card Component", () => {
  it("should render", () => {
    expect(cardWrapper).toMatchSnapshot();
  });

  it("should display props correctly", () => {
    expect(cardWrapper.find("h1").html()).toEqual(`<h1>${mockName}</h1>`);
    expect(cardWrapper.text()).toEqual(mockName);
    expect(cardWrapper.find("h1").text()).toEqual(mockName);
  });
});

describe("CardContainer component", () => {
  it("should render", () => {
    expect(cardContainerWrapper).toMatchSnapshot();
  });
});
